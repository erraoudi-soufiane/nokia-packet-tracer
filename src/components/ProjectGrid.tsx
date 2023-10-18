import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard, { Graph } from "./ProjectCard";
import logo4 from "../assets/logo4.jpg";

const GameGrid = () => {
  const data: Graph[] = [
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
    {
      id: 1,
      name: "soufianeGraph2",
      background_image: logo4,
    },
  ];

  return (
    <Box maxHeight="560px" overflowY="auto">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={15}
        padding="7"
      >
        {data.map((graph) => (
          <ProjectCard key={graph.id} graph={graph} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
