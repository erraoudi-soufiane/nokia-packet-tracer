import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => (
  <HStack padding={4} justifyContent={"space-between"} bg="#ffffff">
    <Image src={logo1} boxSize={"40px"} />
    <ColorModeSwitch />
  </HStack>
);

export default NavBar;
