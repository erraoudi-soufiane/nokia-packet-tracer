import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  MiniMap,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

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
      >
        <Background color="#ccc" variant={variant as BackgroundVariant} />
      </ReactFlow>
    </Box>
  );
};

export default Board;
