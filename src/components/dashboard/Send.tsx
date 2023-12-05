import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import sendImage from "../../assets/pictures/sent.svg";
import SendForm from "./SendForm";

const Send = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} p="32px">
      <SendForm />
      <Box>
        <Image src={sendImage} alt="send" />
      </Box>
    </SimpleGrid>
  );
};

export default Send;
