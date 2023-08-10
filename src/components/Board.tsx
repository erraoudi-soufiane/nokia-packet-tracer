import { Box } from "@chakra-ui/react";
import ReactFlow, {
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "../custom-react-flow.css";

interface Props {
  board: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onConnect: OnConnect;
  onEdgesChange: OnEdgesChange;
}

const Board = ({
  board,
  onNodesChange,
  onConnect,
  edges,
  onEdgesChange,
}: Props) => {
  return (
    <Box
      marginTop={3}
      borderRadius={14}
      bg={"white"}
      minHeight="550px"
      style={{ width: "100%", height: "500px" }}
    >
      <ReactFlow
        nodes={board}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
      />
    </Box>
  );
};

export default Board;
