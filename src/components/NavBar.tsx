import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";

type Props = {
  myColorMode: string;
  setMyColorMode: (mode: string) => void;
};

const NavBar = ({ myColorMode, setMyColorMode }: Props) => (
  <HStack padding={4} justifyContent={"space-between"} bg={myColorMode}>
    <Image src={logo1} boxSize={"40px"} />
    <ColorModeSwitch
      myColorMode={myColorMode}
      setMyColorMode={setMyColorMode}
    />
  </HStack>
);

export default NavBar;
