import { Box, Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import Categories from "./components/Categories";
import Subcategories, {
  Category,
  Device,
  Subcategory,
} from "./components/Subcategories";
import Devices from "./components/Devices";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Board from "./components/Board";
import { useDrop } from "react-dnd";

export interface DroppedDevice {
  device: Device;
  dropPosition: { x: number; y: number };
}

function App() {
  const [category, setSelectedCategory] = useState<Category | null>(null);
  const [subcategory, setSelectedSubcategory] = useState<Subcategory | null>(
    null
  );
  const [board, setBoard] = useState<DroppedDevice[]>([]); // list of components on board

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

  const addImageToBoard = (
    device: Device,
    dropPosition: { x: number; y: number }
  ) => {
    setBoard((board) => [...board, { device, dropPosition }]);
    console.log("component added to board");
    console.log(dropPosition);
  };

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
          <Board board={board} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
