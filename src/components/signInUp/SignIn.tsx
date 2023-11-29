import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import "./sign.css";
import { SignUpBox } from "./SignUpBox";

const SignIn = () => {
  return (
    <SimpleGrid columns={2} minHeight="100vh" width="100vw">
      <Box bg="purple.50"></Box>
      <Box className="sign-un-box">
        <SignUpBox />
      </Box>
    </SimpleGrid>
  );
};

export default SignIn;
