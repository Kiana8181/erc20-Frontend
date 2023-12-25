import {
  Box,
  Center,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Grid,
  GridItem,
  Show,
  Image,
  Text,
  useDisclosure,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import logoLight from "../assets/pictures/logo-light.svg";
import logoDark from "../assets/pictures/logo-dark.svg";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <NavBar onOpen={onOpen} />
      <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `"main"`,
        }}
        templateColumns={{
          lg: "200px 1fr",
          base: "1fr",
        }}
        height="calc(100vh - 72px)"
      >
        <Show above="lg">
          <GridItem
            area="aside"
            boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          >
            <Sidebar />
          </GridItem>
        </Show>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent pt={10}>
            <DrawerCloseButton />
            <GridItem area="aside" paddingX={5}>
              <Flex m="16px" gap="12px">
                <Image
                  src={colorMode === "light" ? logoDark : logoLight}
                  alt="logo"
                  width="40px"
                />
                <Center>
                  <Text fontWeight="bold" fontSize="xl">
                    KWallet
                  </Text>
                </Center>
              </Flex>
              <Sidebar />
            </GridItem>
          </DrawerContent>
        </Drawer>

        <GridItem area="main">
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
