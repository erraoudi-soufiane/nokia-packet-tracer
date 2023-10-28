import { Box, Text, Image, Tooltip } from "@chakra-ui/react";
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
    <Box
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="d-flex justify-center items-center"
    >
      <Tooltip label={device.name} aria-label="A tooltip">
        <Image src={device.url} boxSize={"30px"} />
      </Tooltip>
      <Text fontSize="xs">{device.name}</Text>
    </Box>
  );
};

export default DeviceComponent;
