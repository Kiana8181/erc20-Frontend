import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import botImage from "../../assets/pictures/Chat-bot.svg";

export const SignUpBox = () => {
  return (
    <Center height="100%">
      <Box p="32px">
        <Text
          textAlign="center"
          fontSize="6xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
          mb="24px"
        >
          Hello, Friend!
        </Text>
        <Image mx="auto" src={botImage} alt="hello" width="40%" />
        <Text
          textAlign="center"
          fontSize="2xl"
          fontFamily="gilroyRegular"
          mb="64px"
          mt="24px"
        >
          Enter your personal details and start journey with us
        </Text>
        <Center>
          <Button
            colorScheme="purple"
            variant="outline"
            borderRadius="100px"
            width="40%"
          >
            SIGN UP
          </Button>
        </Center>
      </Box>
    </Center>
  );
};
