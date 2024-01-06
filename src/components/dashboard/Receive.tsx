import { Alert, AlertIcon, Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import useUser from "../../hooks/useUser";
import QRCode from "react-qr-code";
import authorize from "../../hooks/authorize";

const Receive = () => {
  const { data, isLoading, error } = useUser();

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <Center height="100%">
      <Box
        width="60%"
        borderRadius="24px"
        boxShadow="0px 3px 10px 4px rgba(212, 224, 229, 0.70)"
      >
        <Center mt="16px">
          <Text fontSize="xl">Network: ERC20</Text>
        </Center>
        <QRCode
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "32px",
          }}
          value={data?.data.walletId || ""}
        />
        <Center mt="32px">
          <Box width="70%" height="40px" border="1px solid" borderRadius="7px">
            <Text
              p="8px"
              wordBreak="break-word"
              height="28px"
              id="walletId"
              overflow="hidden"
            >
              {data?.data.walletId}
            </Text>
          </Box>
        </Center>
        <Center my="32px">
          <Alert status="info" width="70%">
            <AlertIcon />
            Send only ERC20 to this address. Sending any other coins may result
            in permanent loss.
          </Alert>
        </Center>
        <Center my="16px">
          <Button
            width="20%"
            colorScheme="purple"
            borderRadius="24px"
            onClick={() => {
              copyToClipboard(
                document.getElementById("walletId")?.innerHTML || ""
              );
            }}
          >
            Copy
          </Button>
        </Center>
        {/* <Box width="80%">
          <Text overflow="hidden" height="20px">
            {data?.data.walletId}
          </Text>
        </Box> */}
      </Box>
    </Center>
  );
};

export default Receive;
