import { Box } from "@chakra-ui/react";
import { DroppedDevice } from "../App";
import DeviceComponent from "./Device";

interface Props {
  board: DroppedDevice[];
}

const Board = ({ board }: Props) => {
  return (
    <Box marginTop={3} borderRadius={14} bg={"white"} minHeight="550px">
      {board.map((droppedDevice, index) => {
        return (
          <Box
            key={index}
            style={{
              position: "absolute",
              left: `${droppedDevice.dropPosition.x}px`,
              top: `${droppedDevice.dropPosition.y}px`,
            }}
          >
            <DeviceComponent device={droppedDevice.device} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Board;
