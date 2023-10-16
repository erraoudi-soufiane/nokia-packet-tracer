import { Box, Button, Stack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const ControlButtons = () => {
  return (
    <Stack height={"100%"} bg="#ffffff" padding={10}>
      <Button
        leftIcon={<EmailIcon />}
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
      >
        My Projects
      </Button>
      <Button
        leftIcon={<EmailIcon />}
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
      >
        New Project
      </Button>
      <Button
        leftIcon={<EmailIcon />}
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
        marginBottom={2}
        marginTop={370}
      >
        Settings
      </Button>
      <Button
        leftIcon={<EmailIcon />}
        bg="#cecbcb"
        color="black"
        variant="solid"
        borderRadius={14}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default ControlButtons;
