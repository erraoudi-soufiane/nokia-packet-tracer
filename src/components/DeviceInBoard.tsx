import { Box, Image, Tooltip } from "@chakra-ui/react";
import { Device } from "./Subcategories";
import firewall from "../assets/ios-firewall.png";

interface Props {
  device: Device;
}
const DeviceInBoard = ({ device }: Props) => {
  return (
    <Box>
      <Tooltip label={device.name} aria-label="A tooltip">
        <Image src={device.url} boxSize={"25px"} />
      </Tooltip>
    </Box>
  );
};

export default DeviceInBoard;
