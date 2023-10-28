import {
  Box,
  Button,
  Center,
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
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Edge, Node } from "reactflow";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

interface Props {
  myColorMode: string;
  nodes: Node[];
  edges: Edge[];
}

interface NodeToDB {
  idInGraph: string;
  x: number;
  y: number;
  name: string;
  url: string;
}

interface EdgeToDB {
  idInGraph: string;
  sourceNode: { idInGraph: string };
  targetNode: { idInGraph: string };
}

export interface GraphToDB {
  name: string;
  nodes: NodeToDB[];
  edges: EdgeToDB[];
}

const AsideBar = ({ myColorMode, nodes, edges }: Props) => {
  const {
    isOpen: firstModalIsOpen,
    onOpen: firstModalOnOpen,
    onClose: firstModalOnClose,
  } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const handleSaveProject = () => {
    // Perform your save action here
    // Show the alert dialog
    setIsAlertDialogOpen(true);
    firstModalOnClose();
  };

  return (
    <Stack
      height="100%"
      bg={myColorMode}
      padding={10}
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Stack flex="1">
        <Button
          bg="#cecbcb"
          color="black"
          variant="solid"
          borderRadius={14}
          marginBottom={2}
          ref={btnRef}
          colorScheme="teal"
          onClick={firstModalOnOpen}
          display="flex"
          alignItems="center"
          height="40px"
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
          ref={btnRef}
          colorScheme="teal"
          onClick={firstModalOnOpen}
          display="flex"
          alignItems="center"
          height="40px"
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
          onClick={firstModalOnOpen}
          display="flex"
          alignItems="center"
          height="40px"
        >
          <BookmarkAddOutlinedIcon />
          <Text marginLeft={2.5}>Save Project</Text>
        </Button>
      </Stack>
      <Stack>
        <Button
          bg="#cecbcb"
          color="black"
          variant="solid"
          borderRadius={14}
          flex="1"
          display="flex"
          alignItems="center"
          minH="40px"
          marginBottom={2}
        >
          <SettingsIcon />
          <Text marginLeft={2.5}>Settings</Text>
        </Button>
        <Button
          bg="#cecbcb"
          color="black"
          variant="solid"
          borderRadius={14}
          flex="1"
          display="flex"
          alignItems="center"
          minH="40px"
        >
          <LogoutRoundedIcon />
          <Text marginLeft={2.5}>Log Out</Text>
        </Button>
      </Stack>
      // drawer overlay for saving a project
      <Drawer
        isOpen={firstModalIsOpen}
        placement="right"
        onClose={firstModalOnClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>save your changes to this project ?</DrawerHeader>

          <DrawerBody>
            <Input placeholder="project name..." ref={inputRef} />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveProject}>
              Save
            </Button>
            <Button variant="outline" mr={3}>
              Discard
            </Button>
            <Button variant="outline" onClick={firstModalOnClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      //alert dialog for saving a project
      <AlertDialog
        isOpen={isAlertDialogOpen}
        onClose={() => setIsAlertDialogOpen(false)}
        leastDestructiveRef={btnRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              color={"#e2747d"}
            >
              Failed to save this project
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>Can't save an empty project.</AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="red"
                onClick={() => setIsAlertDialogOpen(false)}
              >
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
};

export default AsideBar;
