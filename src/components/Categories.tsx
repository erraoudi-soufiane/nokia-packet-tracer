import { Image, HStack, Tooltip } from "@chakra-ui/react";
import NetworkDevices from "../assets/cloud.png";
import firewall from "../assets/ios-firewall.png";
import router from "../assets/router.png";
import workgroupSwitch from "../assets/workgroup-switch.png";
import wirelessTransport from "../assets/wireless-transport.png";

const Categories = () => {
  const categories = [
    { name: "Network", url: NetworkDevices },
    { name: "End", url: firewall },
    { name: "Comopnents", url: router },
    { name: "Connections", url: workgroupSwitch },
    { name: "MultiUser", url: wirelessTransport },
  ];

  return (
    <HStack bg="white" borderRadius={10} padding={2}>
      {categories.map((category) => (
        <Tooltip label={category.name} aria-label="A tooltip">
          <Image width={"35px"} src={category.url} />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default Categories;
