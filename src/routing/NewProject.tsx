import { Box, Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import Categories from "../components/Categories";
import Subcategories, {
  Category,
  Device,
  Subcategory,
} from "../components/Subcategories";
import Devices from "../components/Devices";
import NavBar from "../components/NavBar";
import { useCallback, useState } from "react";
import Board from "../components/Board";
import { useDrop } from "react-dnd";
import {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import DeviceInBoard from "../components/DeviceInBoard";
import AsideBar from "../components/asideBar";

export interface DropPosition {
  x: number;
  y: number;
}

function NewProject() {
  const [myColorMode, setMyColorMode] = useState("#ffffff");
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
      bg={"#cecbcb"}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      height="100vh"
      templateRows="auto 1fr"
    >
      <GridItem area="nav" height="100%">
        <NavBar myColorMode={myColorMode} setMyColorMode={setMyColorMode} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" height="100%">
          <AsideBar nodes={nodes} edges={edges} myColorMode={myColorMode} />
        </GridItem>
      </Show>

      <GridItem area="main" padding={3} height="100%">
        <Stack h={"100%"}>
          <HStack>
            <Stack marginRight={2}>
              <Categories
                myColorMode={myColorMode}
                onSelectCategory={(category) => setSelectedCategory(category)}
                selectedCategory={category}
              />
              <Subcategories
                myColorMode={myColorMode}
                selectedCategory={category}
                onSelectSubcategory={(subcategory) =>
                  setSelectedSubcategory(subcategory)
                }
              />
            </Stack>
            <Devices
              myColorMode={myColorMode}
              selctedSubcategory={subcategory}
            />
          </HStack>
          <Box flex="1" height="1fr" ref={drop} marginTop={1.5}>
            <Board
              myColorMode={myColorMode}
              board={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onConnect={onConnect}
              onEdgesChange={onEdgesChange}
            />
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default NewProject;
