import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => (
  <HStack padding={3}>
    <Image borderRadius={6} src={logo} boxSize={"60px"} />
  </HStack>
);

export default NavBar;
