import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import Categories from "./components/Categories";
import Subcategories, {
  Category,
  Subcategory,
} from "./components/Subcategories";
import Devices from "./components/Devices";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [category, setSelectedCategory] = useState<Category | null>(null);
  const [subcategory, setSelectedSubcategory] = useState<Subcategory | null>(
    null
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
        <Board />
      </GridItem>
    </Grid>
  );
}

export default App;
