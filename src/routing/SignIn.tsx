import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

interface Props {
  isSignInOpen: boolean;
  onCloseSignIn: () => void;
}

const SignIn = ({ isSignInOpen, onCloseSignIn }: Props) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isSignInOpen}
      onClose={onCloseSignIn}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome to NokiaNetGraphs</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input ref={initialRef} placeholder="Email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" />
          </FormControl>
        </ModalBody>
        <Box marginLeft={6}>
          Don't have an account?{" "}
          <Button colorScheme="teal" variant="link" onClick={onOpen}>
            Sign Up
          </Button>
          <SignUp isOpen={isOpen} onClose={onClose} />
        </Box>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            <Link to="/new-project">Log In</Link>
          </Button>
          <Button onClick={onCloseSignIn}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignIn;
