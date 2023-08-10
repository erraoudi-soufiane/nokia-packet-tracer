import { Box, Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import Categories from "./components/Categories";
import Subcategories, {
  Category,
  Device,
  Subcategory,
} from "./components/Subcategories";
import Devices from "./components/Devices";
import NavBar from "./components/NavBar";
import { useCallback, useState } from "react";
import Board from "./components/Board";
import { useDrop } from "react-dnd";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import DeviceInBoard from "./components/DeviceInBoard";

export interface DropPosition {
  x: number;
  y: number;
}

function App() {
  const [category, setSelectedCategory] = useState<Category | null>(null);
  const [subcategory, setSelectedSubcategory] = useState<Subcategory | null>(
    null
  );
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "device",
    drop: (item: { name: string; url: string }, monitor) => {
      const dropPosition = monitor.getClientOffset();
      if (dropPosition) {
        const device = { name: item.name, url: item.url };
        addImageToBoard(device, {
          x: dropPosition.x,
          y: dropPosition.y,
        });
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (device: Device, dropPosition: DropPosition) => {
    console.log("dropPosition");
    console.log(dropPosition);
    setNodes((nodes) => [
      ...nodes,
      {
        id: String(nodes.length + 1),
        position: { x: dropPosition.x, y: dropPosition.y },
        data: { label: <DeviceInBoard device={device} /> },
        style: {
          width: 50,
          height: 50,
          backgroundColor: "transparent",
          border: "none",
        },
      },
    ]);
  };

  const onConnect = useCallback(
    (connection: Connection) => {
      if (connection.target && connection.source) {
        const newEdge: Edge = {
          id: `${connection.source}-${connection.target}`,
          source: connection.source,
          target: connection.target,
        };
        setEdges((eds) => addEdge(newEdge, eds));
      }
    },
    [setEdges]
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={6}></GridItem>
      </Show>

      <GridItem area="main" padding={3}>
        <HStack>
          <Stack marginRight={2}>
            <Categories
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <Subcategories
              selectedCategory={category}
              onSelectSubcategory={(subcategory) =>
                setSelectedSubcategory(subcategory)
              }
            />
          </Stack>
          <Devices selctedSubcategory={subcategory} />
        </HStack>
        <Box ref={drop}>
          <Board
            board={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
