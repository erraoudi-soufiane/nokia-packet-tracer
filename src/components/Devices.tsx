import { HStack, Tooltip, Image, Button } from "@chakra-ui/react";
import { Subcategory } from "./Subcategories";
import DeviceComponent from "./Device";

interface Props {
  selctedSubcategory: Subcategory | null;
  myColorMode: string;
}

const Devices = ({ selctedSubcategory, myColorMode }: Props) => {
  return (
    <HStack
      backgroundColor={myColorMode}
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
