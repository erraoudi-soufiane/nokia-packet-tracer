import { Box } from "@chakra-ui/react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";
import "reactflow/dist/style.css";
import "../customStyle.css";

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
  const variant = "cross";

  return (
    <Box height="100%" borderRadius={14} bg={"white"}>
      <ReactFlow
        nodes={board}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
      >
        <Background color="#ccc" variant={variant as BackgroundVariant} />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </Box>
  );
};

export default Board;
