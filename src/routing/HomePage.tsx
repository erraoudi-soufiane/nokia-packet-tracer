import { Grid } from "@chakra-ui/react";
import HomePageNavBar from "../components/HomePageNavBar";
import { useState } from "react";
import Footer from "../components/Footer";
import About from "../components/About";

function HomePage() {
  const [myColorMode, setMyColorMode] = useState("#ffffff");

  return (
    <Grid templateRows="auto 1fr auto" height="100vh">
      <HomePageNavBar />
      <About />
      <Footer />
    </Grid>
  );
}

export default HomePage;
