import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface User {
  id: number;
  username: string;
  email: string;
  //   password: string;
  //   graphs: Graph[];
}

interface Node {
  id: number;
  idInGraph: number;
  x: number;
  y: number;
  name: string;
  url: string;
  //   graph: Graph;
}

interface Edge {
  id: number;
  idInGraph: string;
  //   graph: Graph;
  sourceNode: Node;
  targetNode: Node;
}

export interface Graph {
  id: number;
  name: string;
  background_image: string;
  //   user: User;
  //   nodes: Node[];
  //   edges: Edge[];
}

interface Props {
  graph: Graph;
}

const ProjectCard = ({ graph }: Props) => {
  return (
    <Card
      width="200px"
      height="250px"
      borderRadius={14}
      overflow="hidden"
      marginBottom={10}
    >
      <Image src={graph.background_image} />
      <CardBody>
        <Heading fontSize="lg"> {graph.name} </Heading>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
