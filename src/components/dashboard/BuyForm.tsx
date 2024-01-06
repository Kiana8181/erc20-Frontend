import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import ErrorNotify from "../common/ErrorNotify";
import { InputStyle, TextErrorStyle } from "../common/FormStyle";
import { BuyCoin } from "../common/api-call";
import useUser from "../../hooks/useUser";
import authorize from "../../hooks/authorize";
import SuccessModal from "../common/SuccessModal";

const schema = z.object({
  value: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const BuyForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const staticValue = 2.36;

  const { data: user, isLoading: loading, error } = useUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const [amount, setAmount] = useState(0);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      await BuyCoin({
        username: user?.data.username,
        value: parseInt(data.value),
      });

      setIsLoading(false);

      onOpen();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        ErrorNotify(error.response.data.error);
      } else if (isAxiosError(error) && error.message) {
        ErrorNotify(error.message);
      } else console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box>
        <Box>
          <Center>
            <Text
              fontFamily="gilroyMedium"
              fontSize="28px"
              fontWeight="700"
              lineHeight="normal"
            >
              1KC = {staticValue}$
            </Text>
          </Center>
        </Box>
        <form id="phone-form" onSubmit={handleSubmit(onSubmit)} style={{}}>
          <Box marginTop="24px">
            <FormLabel htmlFor="value">Amount:</FormLabel>
            <InputGroup>
              <NumberInput width="100%">
                <NumberInputField
                  id="value"
                  {...register("value")}
                  autoFocus
                  placeholder="Value to Transfer"
                  sx={InputStyle(!!errors.value)}
                />
              </NumberInput>

              <InputRightElement pt="10px" pr="16px">
                <Text color="#555555">KC</Text>
              </InputRightElement>
            </InputGroup>
          </Box>
          {errors.value && (
            <Text sx={TextErrorStyle}>{errors.value.message}</Text>
          )}

          <Center width="100%" marginTop="64px">
            <Button
              form="phone-form"
              type="submit"
              isDisabled={!isValid || isLoading}
              colorScheme="purple"
              borderRadius="100px"
              width="100%"
            >
              {isLoading ? <Spinner /> : "Pay"}
            </Button>
          </Center>
        </form>
      </Box>
      <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        text={`${
          getValues().value
        }KC has been successfully deposited into your wallet`}
      />
    </>
  );
};

export default BuyForm;
