import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  myColorMode: string;
  setMyColorMode: (myColorMode: string) => void;
}

const ColorModeSwitch = ({ myColorMode, setMyColorMode }: Props) => {
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={myColorMode === "#A5A5A5"}
        onChange={(e) =>
          setMyColorMode(e.target.checked ? "#A5A5A5" : "#ffffff")
        }
      />
      <Text
        color={myColorMode === "#A5A5A5" ? "white" : "black"}
        whiteSpace="nowrap"
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
