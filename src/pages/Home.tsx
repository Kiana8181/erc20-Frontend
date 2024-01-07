import React from "react";
import NavBar from "../components/common/NavBar";
import "../components/home/home.css";
import {
  Box,
  Text,
  Image,
  Center,
  Button,
  SkipNavContent,
  AspectRatio,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  useColorMode,
  Stepper,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  Flex,
} from "@chakra-ui/react";
import welcomeImage from "../assets/pictures/buyMain.svg";
import { useNavigate } from "react-router-dom";
import wave from "../assets/pictures/homePageWave.svg";
import fqa from "../assets/pictures/FAQs.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const features = [
  {
    title: " Secure and User-Friendly Wallet",
    context:
      "Experience a highly secure and user-friendly wallet interface designed to simplify cryptocurrency management for both beginners and seasoned users.",
  },
  {
    title: "Effortless Token Transactions",
    context:
      "Seamlessly buy, sell, and transfer KC tokens with just a few clicks. Our intuitive interface ensures a smooth and straightforward transaction process.",
  },
  {
    title: "Real-Time Transaction History",
    context:
      "Stay informed about your financial activities with a real-time and detailed transaction history. Easily track your purchases, transfers, and other transactions in one centralized location.",
  },
  {
    title: "Integrated Market Data",
    context:
      "Access up-to-date market information directly within the wallet. Stay informed about the latest trends, prices, and market capitalization of KC tokens.",
  },
  {
    title: "Multi-Layer Security",
    context:
      "Rest easy with our multi-layer security measures, including end-to-end encryption and optional two-factor authentication. Your assets are protected with the highest standards of security.",
  },
  {
    title: "Token Utility Beyond Trading",
    context:
      "Unlock a world of possibilities with your KC tokens. Soon, you will be able to pay utility bills and enjoy exclusive rewards and privileges directly through the wallet.",
  },
  {
    title: "User-Centric Design",
    context:
      "Our user-centric design focuses on simplicity without compromising functionality. Enjoy a visually pleasing and efficient wallet experience tailored to your needs.",
  },
  {
    title: "Seamless Cross-Platform Integration",
    context:
      "Access your wallet seamlessly across various devices. Whether you prefer desktop, mobile, or tablet, our wallet is designed for a consistent and enjoyable user experience.",
  },
];

const steps = [
  {
    title: "Sign Up and Verify Your Account",
    description:
      "Begin your journey by signing up for our wallet. Provide essential details to create your account. Verify your identity to ensure a secure and compliant experience.",
  },
  {
    title: "Deposit Funds Into Your Wallet",
    description:
      "Start by depositing funds into your wallet. You can purchase KC tokens directly within the app using various payment methods. Your wallet balance will reflect the amount of KC tokens you own.",
  },
  {
    title: "Explore the Dashboard",
    description:
      "Once your wallet is funded, explore the dashboard. Get a quick overview of your current balance, portfolio value, and recent transactions. The dashboard is designed for easy navigation and a clear snapshot of your account.",
  },
  {
    title: "Buy, Sell, or Transfer KC Tokens",
    description:
      "Engage in a variety of transactions effortlessly. Buy KC tokens from the market, sell them when you choose, or transfer tokens to other wallets seamlessly. Our user-friendly interface ensures a straightforward process.",
  },
  {
    title: "Real-Time Transaction Tracking",
    description:
      "Stay informed with real-time transaction tracking. Access your complete transaction history, including dates, amounts, and transaction types, all conveniently displayed in one location.",
  },
  {
    title: "Coming Soon: Pay Bills and Enjoy Rewards",
    description:
      "Exciting features are on the horizon! Soon, you will be able to use your KC tokens to pay utility bills and unlock exclusive rewards. We are dedicated to expanding the utility of your tokens beyond traditional transactions.",
  },
];

const fqas = [
  {
    title: "Is My Wallet Secure?",
    context:
      "Yes, we prioritize the security of your wallet. KWallet employs multi-layer security measures, including end-to-end encryption and optional two-factor authentication, to ensure the safety of your assets.",
  },
  {
    title: "Can I Buy KC Tokens within the App?",
    context:
      "Absolutely! KWallet allows you to purchase KC tokens directly within the app using various payment methods. You can easily fund your wallet and start engaging in transactions.",
  },
  {
    title: "When Can I Pay Utility Bills with KC Tokens?",
    context:
      "We are excited to announce that soon, users will be able to use their KC tokens to pay utility bills directly from the app. Stay tuned for updates on this upcoming feature!",
  },
  {
    title: "What Rewards Can I Expect from Holding KC Tokens?",
    context:
      "By holding KC tokens, you will soon be able to unlock exclusive rewards and privileges through our upcoming Rewards Program. Details on the program will be provided as it launches.",
  },
  {
    title: "Is KWallet Available on Multiple Devices?",
    context:
      "Yes, KWallet is designed for seamless cross-platform integration. Whether you prefer desktop, mobile, or tablet, you can access your wallet consistently across various devices.",
  },
];

const Home = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const { activeStep } = useSteps({
    index: 6,
    count: steps.length,
  });

  const navigate = useNavigate();
  return (
    <Box pb="16px" pt="88px">
      <NavBar />

      <Box minHeight="calc(100vh - 88px)" pb="16px">
        <Text
          mx="auto"
          width="60%"
          textAlign="center"
          fontSize="3xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
        >
          Welcome to KWallet - Your Gateway to Digital Wealth!
        </Text>
        <Center>
          <Image src={welcomeImage} width="30%" />
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
          effortless coin management, and endless financial possibilities. Your
          digital wallet adventure starts here!
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
      </Box>

      <Box p="32px" bg={colorMode === "dark" ? "purple.900" : "purple.200"}>
        <Text
          mx="auto"
          width="60%"
          textAlign="center"
          fontSize="3xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
          mb="16px"
        >
          Key Features
        </Text>
        <SimpleGrid columns={{ lg: 4, md: 2, base: 1 }} gap="32px">
          {features.map((f, index) => (
            <Card
              key={index}
              boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
              borderRadius="24px"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
              }}
            >
              <CardHeader>
                <Heading size="md">{f.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{f.context}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box p="32px">
        <Text
          mx="auto"
          width="60%"
          textAlign="center"
          fontSize="3xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
          mb="16px"
        >
          How It Works
        </Text>
        <Box
          width={{ base: "100%", md: "50%" }}
          mx="auto"
          boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          borderRadius="24px"
          p="32px"
        >
          <Stepper
            colorScheme="purple"
            index={activeStep}
            orientation="vertical"
            gap="0"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepNumber />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box mb="32px">
                  <StepTitle>
                    <Text fontWeight="bold">{step.title}</Text>
                  </StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>

      <Box p="32px" bg={colorMode === "dark" ? "purple.900" : "purple.200"}>
        <Text
          mx="auto"
          width="60%"
          textAlign="center"
          fontSize="3xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
          mb="16px"
        >
          Frequently Asked Questions (FAQs)
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="16px">
          <Flex
            flexDirection="column"
            boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
            borderRadius="24px"
            p="32px"
            gap="32px"
          >
            {fqas.map((f, index) => (
              <Card
                colorScheme="purple"
                key={index}
                boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
                borderRadius="24px"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                }}
              >
                <CardHeader>
                  <Heading size="md">{f.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{f.context}</Text>
                </CardBody>
              </Card>
            ))}
          </Flex>

          <Center>
            <Image src={fqa} alt="fqa" />
          </Center>
        </SimpleGrid>
      </Box>

      <Box p="32px">
        <Text
          textAlign="center"
          fontSize="xl"
          fontFamily="gilroyMedium"
          fontWeight="bold"
          mb="16px"
        >
          KWallet
        </Text>
        <Center>
          <SimpleGrid columns={3} gap="32px">
            <Box
              borderRadius="100%"
              p="8px"
              bg="purple.300"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                bg: "purple.400",
              }}
            >
              <SiGmail size={20} />
            </Box>
            <Box
              borderRadius="100%"
              p="8px"
              bg="purple.300"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                bg: "purple.400",
              }}
            >
              <AiFillInstagram size={20} />
            </Box>
            <Box
              borderRadius="100%"
              p="8px"
              bg="purple.300"
              _hover={{
                transform: "scale(1.03)",
                transition: "transform .15s ease-in",
                bg: "purple.400",
              }}
            >
              <FaLinkedinIn size={20} />
            </Box>
          </SimpleGrid>
        </Center>
        <Text textAlign="center" mt="32px">
          Copyright© 2022 KWallet. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
