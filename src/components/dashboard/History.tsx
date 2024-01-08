import {
  Box,
  Center,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import useHistory from "../../hooks/useHistory";
import { FaRegCreditCard } from "react-icons/fa";
import { MdGetApp, MdOutlineSend } from "react-icons/md";

const History = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const { data, isLoading, error } = useHistory();

  if (isLoading)
    return (
      <Center mt="100px">
        <Spinner />
      </Center>
    );

  if (error) throw error;

  return (
    <Center height="100%" p="16px">
      <Box
        maxH="85vh"
        minH="85%"
        overflowY="scroll"
        my="auto"
        boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
        borderRadius="32px"
        p="32px"
      >
        <Text
          fontFamily="gilroyMedium"
          fontSize="32px"
          fontWeight="700"
          lineHeight="200%"
        >
          Transaction History
        </Text>

        {data?.data === null ? (
          <Text>There are no transactions</Text>
        ) : (
          <TableContainer>
            <Table variant="striped" colorScheme="purple">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Date & Time</Th>
                  <Th>Type</Th>
                  <Th>Amount</Th>
                  <Th>Counterparty (Sender/Recipient)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.data.map((h, index) => (
                  <Tr key={index}>
                    <Td>
                      {h.type === "0" ? (
                        <FaRegCreditCard
                          size="20px"
                          color={colorMode === "dark" ? "#FAF089" : "#975A16"}
                        />
                      ) : h.type === "1" ? (
                        <MdOutlineSend
                          size="20px"
                          color={colorMode === "dark" ? "#FC8181" : "#9B2C2C"}
                        />
                      ) : (
                        <MdGetApp
                          size="20px"
                          color={colorMode === "dark" ? "#68D391" : "#22543D"}
                        />
                      )}
                    </Td>
                    <Td>{h.date}</Td>
                    <Td>
                      {h.type === "0"
                        ? "Buy"
                        : h.type === "1"
                        ? "Give"
                        : "Receive"}
                    </Td>
                    <Td
                      color={h.type === "1" ? "red" : "green"}
                      fontWeight="bold"
                      fontSize="16px"
                    >
                      {h.value}
                    </Td>
                    <Td>{h.type === "1" ? h.to : h.from}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Center>
  );
};

export default History;
