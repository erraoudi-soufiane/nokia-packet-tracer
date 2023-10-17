import { Button, Stack, Text } from "@chakra-ui/react";
import { RepeatClockIcon, LinkIcon, SettingsIcon } from "@chakra-ui/icons";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

interface Props {
  myColorMode: string;
}

const ControlButtons = ({ myColorMode }: Props) => {
  console.log(myColorMode);
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
    </Stack>
  );
};

export default ControlButtons;
