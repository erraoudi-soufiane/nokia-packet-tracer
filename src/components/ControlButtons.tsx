import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RepeatClockIcon, LinkIcon, SettingsIcon } from "@chakra-ui/icons";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { LegacyRef, useRef } from "react";

interface Props {
  myColorMode: string;
}

const ControlButtons = ({ myColorMode }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Stack height={"100%"} bg={myColorMode} padding={10}>
      <Button
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
      >
        <RepeatClockIcon />
        <Text marginLeft={2.5}>My Projects</Text>
      </Button>
      <Button
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
      >
        <LinkIcon />
        <Text marginLeft={2.5}>New Project</Text>
      </Button>
      <Button
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        <BookmarkAddOutlinedIcon />
        <Text marginLeft={2.5}>Save Project</Text>
      </Button>
      <Button
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
        marginTop={315}
      >
        <SettingsIcon />
        <Text marginLeft={2.5}>Settings</Text>
      </Button>
      <Button bg="#cecbcb" color="black" variant="solid" borderRadius={14}>
        <LogoutRoundedIcon />
        <Text marginLeft={2.5}>Log Out</Text>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>save your changes to this project ?</DrawerHeader>

          <DrawerBody>
            <Input placeholder="project name..." />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button variant="outline" mr={3}>
              Discard
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default ControlButtons;
