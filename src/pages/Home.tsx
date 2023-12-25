import React from "react";
import NavBar from "../components/common/NavBar";
import "../components/home/home.css";
import { Box, Text, Image, Center, Button } from "@chakra-ui/react";
import welcomeImage from "../assets/pictures/buyMain.svg";
import { useNavigate } from "react-router-dom";
import wave from "../assets/pictures/homePageWave.svg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="all">
        <Box position="fixed" top="0" width="100%">
          <NavBar />
        </Box>

        <Box className="section" pt="52px">
          <Text
            mx="auto"
            width="60%"
            textAlign="center"
            fontSize="4xl"
            fontFamily="gilroyMedium"
            fontWeight="bold"
          >
            Welcome to KWallet - Your Gateway to Digital Wealth!
          </Text>
          <Center>
            <Image src={welcomeImage} width="25%" />
          </Center>
          <Text
            fontSize="xl"
            mt="16px"
            mx="auto"
            width="80%"
            textAlign="center"
            fontFamily="gilroyMedium"
          >
            Embark on a seamless journey into the world of digital currency with
            KWallet. Register today to unlock the power of secure transactions,
            effortless coin management, and endless financial possibilities.
            Your digital wallet adventure starts here!
          </Text>
          <Text
            mt="48px"
            mx="auto"
            textAlign="center"
            fontSize="2xl"
            fontFamily="gilroyMedium"
            fontWeight="bold"
          >
            🚀 Ready to dive in?
          </Text>
          <Center>
            <Button
              mt="16px"
              size="lg"
              borderRadius="24px"
              colorScheme="purple"
              onClick={() => navigate("/sign-up")}
            >
              Let's Get Started
            </Button>
          </Center>
          {/* <Image src={wave} alt="wave" height="10px" width="100%" /> */}
        </Box>
        <Box className="section"></Box>
        <Box className="section"></Box>
        <Box className="section"></Box>
      </Box>
    </>
  );
};

export default Home;
