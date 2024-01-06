import React from "react";
import useUser from "../../hooks/useUser";
import {
  Flex,
  Text,
  Image,
  Center,
  Box,
  Spacer,
  Grid,
  GridItem,
  useColorMode,
  Badge,
  SimpleGrid,
  Button,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import avatar from "../../assets/pictures/Avatar.svg";
import useBalance from "../../hooks/useBalance";
import authorize from "../../hooks/authorize";
import coinBlack from "../../assets/pictures/coin-black.png";
import coinWhite from "../../assets/pictures/coin-white.png";
import wave from "../common/purpleWave.svg";
import Buy from "../../assets/pictures/AddtoCart.svg";
import Receive from "../../assets/pictures/MoneyIncome.svg";
import Send from "../../assets/pictures/MailSent.svg";
import History from "../../assets/pictures/history.svg";
import Wallet from "../../assets/pictures/E-Wallet-bro.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const staticValue = 2.36;

  const news = [
    {
      title: "Exciting News for Our Users!",
      context:
        "We are thrilled to announce that in the upcoming weeks, users will have the ability to use their KC tokens to pay utility bills directly from their wallet. This new feature adds a practical dimension to your token ownership, making it not just an investment but a versatile asset that enhances everyday convenience. Stay tuned for more details on this exciting development!",
    },
    {
      title: "Unlocking New Possibilities: KC Token Rewards Program",
      context:
        "We're excited to unveil our upcoming KC Token Rewards Program! As the value of KC tokens continues to soar, users will soon be able to unlock exclusive rewards and privileges by holding and actively using their tokens. This program is designed to appreciate our community and provide added benefits for your loyalty. Keep an eye out for more details on the rewards awaiting you!",
    },
    {
      title: "Breaking News: KC Token Value Surges!",
      context:
        "In a remarkable turn of events, the value of KC tokens has experienced a significant surge in the market. The recent increase reflects growing confidence in the project, and we want to express our gratitude to our dedicated community for their continued support. This uptrend is a testament to the strength of the project, and we remain committed to delivering value to our users.",
    },
    {
      title: "Upcoming Feature: Peer-to-Peer Token Lending",
      context:
        "We're excited to share a sneak peek into an upcoming feature: Peer-to-Peer Token Lending. Soon, users will have the option to lend their KC tokens to others in the community, providing a new way to earn rewards. This feature empowers our users to actively participate in the growth of the ecosystem while benefiting from additional opportunities. Stay tuned for more details on this innovative lending feature!",
    },
  ];

  const navigate = useNavigate();

  const { toggleColorMode, colorMode } = useColorMode();

  const { data, isLoading, error } = useUser();

  const { data: balance } = useBalance();

  return (
    <>
      <Grid
        p="48px 48px 72px"
        overflowY="scroll"
        maxH="100vh"
        templateColumns={{
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        templateRows={{
          md: "repeat(2, 1fr)",
          base: "1fr",
        }}
        gap={8}
      >
        <GridItem
          boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          borderRadius="32px"
          p="32px"
        >
          <Box>
            <Image src={wave} borderRadius="24px" />
            <Flex flexDirection="column">
              <Text
                textAlign="center"
                fontFamily="gilroyMedium"
                fontSize="24px"
                fontWeight="700"
                lineHeight="200%"
              >
                Your Current Balance:
              </Text>
              <Text
                textAlign="center"
                fontFamily="gilroyMedium"
                fontSize="22px"
                fontWeight="500"
                lineHeight="normal"
                color={colorMode === "dark" ? "purple.100" : "purple.700"}
              >
                {balance?.value} KC
              </Text>
            </Flex>

            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="60px 3fr 1fr"
              mt="32px"
              py="16px"
              px="16px"
              gap="8px"
            >
              <GridItem rowSpan={2}>
                <Image
                  src={colorMode === "dark" ? coinWhite : coinBlack}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </GridItem>
              <GridItem my="auto">
                <Text fontWeight="bold">
                  KC{" "}
                  <Badge colorScheme="purple" borderRadius="24px" p="8px">
                    ERC20
                  </Badge>
                </Text>
              </GridItem>
              <GridItem my="auto" justifySelf="end">
                <Text fontWeight="bold">{balance?.value}</Text>
              </GridItem>
              <GridItem my="auto">
                <Flex gap="4px">
                  <Text>${staticValue}</Text>
                  <Text color="green">+0.01%</Text>
                </Flex>
              </GridItem>
              <GridItem my="auto" justifySelf="end">
                <Text>
                  {(parseFloat(balance?.value || "0") * staticValue).toFixed(2)}
                  $
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={2}
          boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          borderRadius="32px"
          p="32px"
        >
          <Box>
            <Text
              textAlign="center"
              fontFamily="gilroyMedium"
              fontSize="28px"
              fontWeight="700"
              lineHeight="200%"
            >
              Quick Access:
            </Text>

            <SimpleGrid columns={{ md: 2, base: 1 }} gap="32px">
              <Box
                p="12px"
                boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
                borderRadius="24px"
              >
                <Center>
                  <Image src={Buy} alt="Buy" height="100px" width="100px" />
                </Center>

                <Button
                  borderRadius="24px"
                  colorScheme="purple"
                  mt="16px"
                  width="100%"
                  onClick={() => navigate("/dashboard/buy")}
                >
                  Buy
                </Button>
              </Box>

              <Box
                p="12px"
                boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
                borderRadius="24px"
              >
                <Center>
                  <Image
                    src={Receive}
                    alt="Receive"
                    height="100px"
                    width="100px"
                  />
                </Center>

                <Button
                  borderRadius="24px"
                  colorScheme="purple"
                  mt="16px"
                  width="100%"
                  onClick={() => navigate("/dashboard/receive")}
                >
                  Receive
                </Button>
              </Box>

              <Box
                p="12px"
                boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
                borderRadius="24px"
              >
                <Center>
                  <Image src={Send} alt="Send" height="100px" width="100px" />
                </Center>

                <Button
                  borderRadius="24px"
                  colorScheme="purple"
                  mt="16px"
                  width="100%"
                  onClick={() => navigate("/dashboard/send")}
                >
                  Send
                </Button>
              </Box>

              <Box
                p="12px"
                boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
                borderRadius="24px"
              >
                <Center>
                  <Image
                    src={History}
                    alt="History"
                    height="100px"
                    width="100px"
                  />
                </Center>

                <Button
                  borderRadius="24px"
                  colorScheme="purple"
                  mt="16px"
                  width="100%"
                  onClick={() => navigate("/dashboard/history")}
                >
                  History
                </Button>
              </Box>
            </SimpleGrid>

            <Center mt="16px">
              <Image
                src={Wallet}
                alt="Wallet"
                objectFit="contain"
                maxHeight="340px"
              />
            </Center>
          </Box>
        </GridItem>
        <GridItem
          minHeight="340px"
          overflow="hidden"
          boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          borderRadius="32px"
          p="32px"
        >
          <Box height="100%" overflow="hidden">
            <Text
              textAlign="center"
              fontFamily="gilroyMedium"
              fontSize="28px"
              fontWeight="700"
              lineHeight="200%"
            >
              News
            </Text>

            <Box height="calc(100% - 32px)" p="16px" overflowY="scroll">
              <Accordion defaultIndex={[0]} allowMultiple>
                {news.map((n, index) => (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize="18px"
                          fontWeight="bold"
                        >
                          {n.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{n.context}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Main;
