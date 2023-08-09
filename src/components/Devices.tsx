import { HStack, Tooltip, Image, Button } from "@chakra-ui/react";
import { Subcategory } from "./Subcategories";
import DeviceComponent from "./Device";

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
        <DeviceComponent key={device.name} device={device} />
      ))}
    </HStack>
  );
};

export default Devices;
