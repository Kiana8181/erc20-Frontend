import { Box, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";
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

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        m="16px"
        gap="12px"
        flexDirection="column"
        height="calc(100% - 36px)"
      >
        <Flex mt="16px" gap="8px">
          <MdSpaceDashboard size="30px" />
          <Center>
            <NavLink to="/dashboard">
              {({ isActive }) =>
                isActive ? (
                  <Text fontWeight="bold">Dasboard</Text>
                ) : (
                  <Text>Dasboard</Text>
                )
              }
            </NavLink>
          </Center>
        </Flex>

        <Flex mt="16px" gap="8px">
          <IoIosSend size="30px" />
          <Center>
            <NavLink to="/dashboard/send">
              {({ isActive }) =>
                isActive ? (
                  <Text fontWeight="bold">Send</Text>
                ) : (
                  <Text>Send</Text>
                )
              }
            </NavLink>
          </Center>
        </Flex>

        <Flex mt="16px" gap="8px">
          <GiReceiveMoney size="30px" />
          <Center>
            <NavLink to="/dashboard/receive">
              {({ isActive }) =>
                isActive ? (
                  <Text fontWeight="bold">Receive</Text>
                ) : (
                  <Text>Receive</Text>
                )
              }
            </NavLink>
          </Center>
        </Flex>

        <Flex mt="16px" gap="8px">
          <FaRegCreditCard size="30px" />
          <Center>
            <NavLink to="/dashboard/buy">
              {({ isActive }) =>
                isActive ? <Text fontWeight="bold">Buy</Text> : <Text>Buy</Text>
              }
            </NavLink>
          </Center>
        </Flex>

        <Flex mt="16px" gap="8px">
          <LuHistory size="30px" />
          <Center>
            <NavLink to="/dashboard/history">
              {({ isActive }) =>
                isActive ? (
                  <Text fontWeight="bold">History</Text>
                ) : (
                  <Text>History</Text>
                )
              }
            </NavLink>
          </Center>
        </Flex>

        <Spacer />

        <Flex
          cursor="pointer"
          mt="16px"
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
      </Flex>
    </>
  );
};

export default Sidebar;
