import {
  Box,
  Button,
  Center,
  Flex,
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
import { Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import ErrorNotify from "../common/ErrorNotify";
import { InputStyle, TextErrorStyle } from "../common/FormStyle";
import { SendCoin } from "../common/api-call";
import useUser from "../../hooks/useUser";
import authorize from "../../hooks/authorize";
import useBalance from "../../hooks/useBalance";
import SuccessModal from "../common/SuccessModal";

const schema = z.object({
  receiver: z.string().min(1),

  value: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const SendForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const { data, isLoading: loading, error } = useUser();

  const { data: balance } = useBalance();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const [valueError, setValueError] = useState("");

  if (!balance) return null;

  const handleMax = () => {
    setValue("value", balance.value);
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    if (parseFloat(data.value) > parseFloat(balance.value)) {
      setValueError(
        "The transfer amount must be less than your current balance"
      );
      setIsLoading(false);
    } else {
      try {
        setValueError("");

        await SendCoin(data);

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
    }
  };

  if (error) return <Navigate to="/" />;

  return (
    <>
      <Box>
        <form
          id="phone-form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ paddingTop: "4px" }}
        >
          <FormLabel htmlFor="myWallet">My Wallet Id:</FormLabel>
          <Input
            id="myWallet"
            readOnly
            value={data?.data.walletId}
            sx={InputStyle(false)}
          />

          <Box marginTop="24px">
            <FormLabel htmlFor="receiverWallet">Receiver Wallet Id:</FormLabel>
            <Input
              id="receiverWallet"
              {...register("receiver")}
              placeholder="Receiver Wallet Id"
              sx={InputStyle(!!errors.receiver)}
            />
          </Box>
          {errors.receiver && (
            <Text sx={TextErrorStyle}>{errors.receiver.message}</Text>
          )}

          <Box marginTop="24px">
            <FormLabel htmlFor="value">Amount:</FormLabel>
            <InputGroup>
              <Input
                id="value"
                type="number"
                {...register("value")}
                onFocus={() => console.log(getValues().value)}
                placeholder="Value to Transfer"
                sx={InputStyle(!!errors.value || valueError.length !== 0)}
              />
              <InputRightElement pt="12px" pr="10px" width="99px">
                <Flex gap="8px">
                  <Center>
                    <Text color="#555555">KC</Text>
                  </Center>
                  <Button
                    colorScheme="purple"
                    borderRadius="32px"
                    onClick={handleMax}
                  >
                    max
                  </Button>
                </Flex>
              </InputRightElement>
            </InputGroup>
          </Box>
          {errors.value && (
            <Text sx={TextErrorStyle}>{errors.value.message}</Text>
          )}
          {valueError.length !== 0 && (
            <Text sx={TextErrorStyle}>{valueError}</Text>
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
              {isLoading ? <Spinner /> : "Send"}
            </Button>
          </Center>
        </form>
      </Box>
      <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        text={`${getValues().value}KC transferred successfully.`}
      />
    </>
  );
};

export default SendForm;
