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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Spacer,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import logoLight from "../assets/pictures/logo-light.svg";
import logoDark from "../assets/pictures/logo-dark.svg";
import NavBar from "../components/common/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import { ColorModeSwitch } from "../components/common/ColorModeSwitch";
import { IoMenu } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const Dashboard = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Show below="lg">
        <Box
          position="fixed"
          top="16px"
          right="16px"
          bg="purple.200"
          p="8px"
          borderRadius="24px"
        >
          <ColorModeSwitch />{" "}
        </Box>
      </Show> */}

      {pathname !== "/home" && (
        <Show below="lg">
          <Menu>
            <MenuButton
              position="fixed"
              top="16px"
              left="16px"
              bg="purple.200"
              p="8px"
              borderRadius="24px"
            >
              <IoMenu size="30" />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Setting">
                <MenuItem _focus={{}}>
                  <Flex width="100%">
                    <Text>Color Mode</Text>
                    <Spacer />
                    <ColorModeSwitch />
                  </Flex>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("tokenKey");
                  navigate("/home");
                }}
              >
                <Flex cursor="pointer" mx="16px" gap="8px">
                  <ImExit size="30px" />
                  <Center>
                    <Text>Exit</Text>
                  </Center>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        </Show>
      )}

      {/* <NavBar onOpen={onOpen} /> */}
      <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `"main"`,
        }}
        templateColumns={{
          lg: "repeat(6, 1fr)",
          base: "1fr",
        }}
        height="calc(100vh - 72px)"
      >
        <Show above="lg">
          <GridItem
            height="100vh"
            p="16px"
            area="aside"
            // boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
          >
            <Sidebar />
          </GridItem>
        </Show>

        {/* <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
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
        </Drawer> */}

        <GridItem area="main" colSpan={5}>
          <Outlet />
        </GridItem>
      </Grid>
      <Show below="lg">
        <DashboardFooter />
      </Show>
    </>
  );
};

export default Dashboard;
