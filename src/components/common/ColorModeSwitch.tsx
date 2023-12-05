import {
  Box,
  HStack,
  Switch,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box p="8px">
      <Tooltip label="Dark Mode">
        <HStack>
          <Text whiteSpace="nowrap">Dark Mode</Text>
          <Switch
            size="md"
            colorScheme="purple"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </HStack>
      </Tooltip>
    </Box>
  );
};
