import React from "react";
import useUser from "../../hooks/useUser";
import { Flex, Text, Image, Center, Box, Spacer } from "@chakra-ui/react";
import avatar from "../../assets/pictures/Avatar.svg";
import useBalance from "../../hooks/useBalance";
import authorize from "../../hooks/authorize";

const Main = () => {
  const { data, isLoading, error } = useUser();
  authorize(error);

  const { data: balance } = useBalance();

  return (
    <>
      <Flex p="64px">
        <Flex gap="16px">
          <Image src={avatar} alt="avatar" />
          <Center>
            <Text textAlign="center" fontSize="4xl" fontWeight="bold">
              Hi, {data?.data.firstname}!
            </Text>
          </Center>
        </Flex>
        <Spacer />
        <Box
          p="32px"
          borderRadius="24px"
          boxShadow="0px 3px 10px 4px rgba(212, 224, 229, 0.70)"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Balance: {balance?.value} KC
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Main;
