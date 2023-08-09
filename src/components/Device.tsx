import { Box, Image, Text, Tooltip } from "@chakra-ui/react";
import { Device } from "./Subcategories";
import { useDrag } from "react-dnd";

interface Props {
  device: Device;
}
const DeviceComponent = ({ device }: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: "device",
    item: { name: device.name, url: device.url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Tooltip label={device.name} aria-label="A tooltip">
        <Image src={device.url} boxSize={"25px"} />
      </Tooltip>
    </Box>
  );
};

export default DeviceComponent;
