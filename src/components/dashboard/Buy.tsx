import { SimpleGrid, Box, Image } from "@chakra-ui/react";
import buyImage from "../../assets/pictures/buy.svg";
import BuyForm from "./BuyForm";

const Buy = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} p="32px">
      <Box>
        <Image src={buyImage} alt="send" />
      </Box>
      <BuyForm />
    </SimpleGrid>
  );
};

export default Buy;
