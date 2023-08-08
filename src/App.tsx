import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories";
import Devices from "./components/Devices";
import NavBar from "./components/NavBar";

function App() {
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

      <GridItem area="main">
        <HStack>
          <Stack>
            <Categories />
            <SubCategories />
          </Stack>
          <Devices />
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;
