import { Box, Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import ControlButtons from "../components/ControlButtons";
import { Link } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid";

export interface DropPosition {
  x: number;
  y: number;
}

function App() {
  const [myColorMode, setMyColorMode] = useState("#ffffff");

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
      height="100vh"
      templateRows="auto 1fr"
    >
      <GridItem area="nav" height="100%">
        <NavBar myColorMode={myColorMode} setMyColorMode={setMyColorMode} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" height="100%">
          <ControlButtons myColorMode={myColorMode} />
        </GridItem>
      </Show>

      <GridItem area="main" padding={3} flex="1" height="1fr">
        <Box borderRadius={14} marginTop={1.5} height="100%">
          <Heading
            padding="20px 20px 5px 80px"
            noOfLines={1}
            marginBottom={5}
            as="h4"
            size="md"
            color={myColorMode == "#A5A5A5" ? "white" : "black"}
          >
            My Projects
          </Heading>
          {/* <Link to="/new-project">
            <Text color={myColorMode == "#A5A5A5" ? "white" : "black"}>
              new project{" "}
            </Text>
          </Link> */}
          <ProjectGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
