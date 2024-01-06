import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { ImExit } from "react-icons/im";
import avatar from "../../assets/pictures/Avatar.svg";
import useUser from "../../hooks/useUser";

import logoDark from "../../assets/pictures/logo-dark.svg";
import logoLight from "../../assets/pictures/logo-light.svg";
import { ColorModeSwitch } from "../common/ColorModeSwitch";

const Sidebar = () => {
  const navigate = useNavigate();

  const { data: user } = useUser();

  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="32px"
      boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
      height="100%"
      bg={colorMode === "dark" ? "purple.600" : "purple.300"}
      p="16px"
    >
      <Box>
        <Center pt="32px">
          <Image src={avatar} />
        </Center>
        <Text
          mt="16px"
          textAlign="center"
          fontFamily="gilroyMedium"
          fontSize="20px"
          fontWeight="700"
          lineHeight="200%"
        >
          {user?.data.firstname} {user?.data.lastname}
        </Text>
        <Text
          textAlign="center"
          fontSize="16px"
          fontWeight="400"
          lineHeight="normal"
        >
          {user?.data.email}
        </Text>
      </Box>

      <Flex gap="12px" flexDirection="column" height="calc(100% - 203px)">
        <NavLink to="/dashboard/main">
          {({ isActive }) => (
            <Flex
              mt="16px"
              gap="8px"
              bg={isActive ? "purple.400" : ""}
              borderRadius="24px"
              py="8px"
              px="16px"
            >
              <MdSpaceDashboard size="30px" />
              <Center>
                <Text fontWeight={isActive ? "bold" : ""}>Dasboard</Text>
              </Center>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/dashboard/send">
          {({ isActive }) => (
            <Flex
              gap="8px"
              bg={isActive ? "purple.400" : ""}
              borderRadius="24px"
              py="8px"
              px="16px"
            >
              <IoIosSend size="30px" />
              <Center>
                <Text fontWeight={isActive ? "bold" : ""}>Send</Text>
              </Center>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/dashboard/receive">
          {({ isActive }) => (
            <Flex
              gap="8px"
              bg={isActive ? "purple.400" : ""}
              borderRadius="24px"
              py="8px"
              px="16px"
            >
              <GiReceiveMoney size="30px" />
              <Center>
                <Text fontWeight={isActive ? "bold" : ""}>Receive</Text>
              </Center>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/dashboard/buy">
          {({ isActive }) => (
            <Flex
              gap="8px"
              bg={isActive ? "purple.400" : ""}
              borderRadius="24px"
              py="8px"
              px="16px"
            >
              <FaRegCreditCard size="30px" />
              <Center>
                <Text fontWeight={isActive ? "bold" : ""}>Buy</Text>
              </Center>
            </Flex>
          )}
        </NavLink>

        <NavLink to="/dashboard/history">
          {({ isActive }) => (
            <Flex
              gap="8px"
              bg={isActive ? "purple.400" : ""}
              borderRadius="24px"
              py="8px"
              px="16px"
            >
              <LuHistory size="30px" />
              <Center>
                <Text fontWeight={isActive ? "bold" : ""}>History</Text>
              </Center>
            </Flex>
          )}
        </NavLink>

        <Spacer />

        <Flex
          cursor="pointer"
          mx="16px"
          gap="8px"
          onClick={() => {
            localStorage.removeItem("tokenKey");
            navigate("/home");
          }}
        >
          <ImExit size="30px" />
          <Center>
            <Text>Exit</Text>
          </Center>
        </Flex>

        <Flex mt="16px" gap="4px">
          <Image
            src={colorMode === "light" ? logoDark : logoLight}
            boxSize="40px"
            objectFit="contain"
          />

          <Text fontWeight="bold" fontSize="l" my="auto">
            KWallet
          </Text>

          <Spacer />

          <ColorModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
