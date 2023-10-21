import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import ProjectCard, { Graph } from "./ProjectCard";
import useProjects from "../hooks/useProjects";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

const ProjectGrid = () => {
  const { graphs, error, isloading } = useProjects();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Box color={"red"}> {error} </Box>}
      {!error && (
        <Box maxHeight="560px" overflowY="auto">
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            spacing={15}
            padding="7"
          >
            {isloading &&
              skeletons.map((skeleton) => (
                <ProjectCardSkeleton key={skeleton} />
              ))}
            {graphs.map((graph) => (
              <ProjectCard key={graph.id} graph={graph} />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default ProjectGrid;
