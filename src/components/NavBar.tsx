import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo4 from "../assets/logo4.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack padding={4} marginBottom={2} justifyContent={"space-between"}>
    <Image borderRadius={6} src={logo4} boxSize={"40px"} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
