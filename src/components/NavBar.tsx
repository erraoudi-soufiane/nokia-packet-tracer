import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Highlight,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";
import logofixe from "../assets/logofixe.jpg";
import aboutme from "../assets/aboutme.png";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  myColorMode: string;
  setMyColorMode: (mode: string) => void;
};

const NavBar = ({ myColorMode, setMyColorMode }: Props) => {
  return (
    <HStack padding={4} justifyContent={"space-between"} bg={myColorMode}>
      <HStack>
        <Image src={logofixe} boxSize={"35px"} />
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
        <Breadcrumb
          marginLeft={4}
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">My Projects</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <HStack>
        <Wrap>
          <WrapItem>
            <Avatar
              bg="#cbd5e0"
              size="sm"
              name="ERRAOUDI Soufiane"
              src={aboutme}
            />
          </WrapItem>
        </Wrap>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
