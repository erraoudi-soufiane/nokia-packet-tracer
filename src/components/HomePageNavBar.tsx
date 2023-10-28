import {
  Button,
  HStack,
  Heading,
  Highlight,
  useDisclosure,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logofixe from "../assets/logofixe.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SignIn from "../routing/SignIn";

type Props = {
  myColorMode: string;
  setMyColorMode: (mode: string) => void;
};

const HomePageNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack padding={4} justifyContent={"space-between"}>
      <HStack>
        <Image src={logofixe} boxSize={"40px"} mr={3} borderRadius={7} />
        <Highlight
          query="NokiaNetGraph"
          styles={{
            px: "4",
            py: "1.5",
            rounded: "full",
            bg: "blue.100",
            fontWeight: "bold",
          }}
        >
          NokiaNetGraph
        </Highlight>
      </HStack>
      <HStack>
        <Button colorScheme="messenger" variant="ghost" onClick={onOpen}>
          Login
        </Button>
        <ColorModeSwitch />
      </HStack>
      <SignIn isSignInOpen={isOpen} onCloseSignIn={onClose} />
    </HStack>
  );
};

export default HomePageNavBar;
