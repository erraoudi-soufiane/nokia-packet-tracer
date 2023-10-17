import { Image, HStack, Tooltip, Box } from "@chakra-ui/react";
import NetworkDevices from "../assets/cloud.png";
import firewall from "../assets/ios-firewall.png";
import router from "../assets/router.png";
import workgroupSwitch from "../assets/workgroup-switch.png";
import wirelessTransport from "../assets/wireless-transport.png";
import { Category } from "./Subcategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  myColorMode: string;
}

const Categories = ({ onSelectCategory, myColorMode }: Props) => {
  const categories: Category[] = [
    {
      name: "Network",
      url: NetworkDevices,
      subcategories: [
        {
          name: "Network1",
          url: NetworkDevices,
          devices: [
            { name: "Network11", url: NetworkDevices },
            { name: "Network12", url: NetworkDevices },
            { name: "Network13", url: NetworkDevices },
            { name: "Network14", url: NetworkDevices },
            { name: "Network15", url: NetworkDevices },
            { name: "Network16", url: NetworkDevices },
          ],
        },
        {
          name: "Network2",
          url: NetworkDevices,
          devices: [
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
          ],
        },
        {
          name: "Network3",
          url: NetworkDevices,
          devices: [
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
          ],
        },
        {
          name: "Network4",
          url: NetworkDevices,
          devices: [
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
          ],
        },
        {
          name: "Network5",
          url: NetworkDevices,
          devices: [
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
          ],
        },
        {
          name: "Network6",
          url: NetworkDevices,
          devices: [
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
            { name: "", url: NetworkDevices },
          ],
        },
      ],
    },
    {
      name: "End",
      url: firewall,
      subcategories: [
        {
          name: "End1",
          url: firewall,
          devices: [
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
          ],
        },
        {
          name: "End2",
          url: firewall,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "End3",
          url: firewall,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Comopnents",
      url: router,
      subcategories: [
        {
          name: "components1",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components2",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components3",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components4",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Connections",
      url: workgroupSwitch,
      subcategories: [
        {
          name: "Connections1",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Connections2",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Connections3",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "MultiUser",
      url: wirelessTransport,
      subcategories: [
        {
          name: "MultiUser1",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "MultiUser2",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "MultiUser3",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Miscella",
      url: wirelessTransport,
      subcategories: [
        {
          name: "Miscella1",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Miscella2",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Miscella3",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
  ];

  return (
    <HStack height={"35px"} borderRadius={14} bg={myColorMode} padding={2}>
      {categories.map((category) => (
        <Box
          key={category.name}
          onClick={() => onSelectCategory(category)}
          marginRight={4}
        >
          <Tooltip label={category.name} aria-label="A tooltip">
            <Image boxSize={"25px"} src={category.url} />
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default Categories;
