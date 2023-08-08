import { HStack, Tooltip, Image, Button } from "@chakra-ui/react";
import React from "react";
import { Subcategory } from "./Subcategories";

interface Props {
  selctedSubcategory: Subcategory | null;
}

const Devices = ({ selctedSubcategory }: Props) => {
  return (
    <HStack
      backgroundColor={"white"}
      height={"80px"}
      padding={2}
      borderRadius={14}
      width={"100%"}
    >
      {selctedSubcategory?.devices.map((device) => (
        <Tooltip label={device.name} aria-label="A tooltip">
          <Button colorScheme="blue">{device.url}</Button>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default Devices;
