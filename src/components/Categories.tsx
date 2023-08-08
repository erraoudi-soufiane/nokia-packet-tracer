import { Image, HStack, Tooltip, Box } from "@chakra-ui/react";
import NetworkDevices from "../assets/cloud.png";
import firewall from "../assets/ios-firewall.png";
import router from "../assets/router.png";
import workgroupSwitch from "../assets/workgroup-switch.png";
import wirelessTransport from "../assets/wireless-transport.png";
import { Category } from "./SubCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const Categories = ({ onSelectCategory }: Props) => {
  const categories: Category[] = [
    {
      name: "Network",
      url: NetworkDevices,
      subcategories: [
        { name: "Network1", url: "Network1" },
        { name: "Network2", url: "Network2" },
        { name: "Network3", url: "Network3" },
        { name: "Network1", url: "Network1" },
        { name: "Network2", url: "Network2" },
        { name: "Network3", url: "Network3" },
      ],
    },
    {
      name: "End",
      url: firewall,
      subcategories: [
        { name: "End1", url: "End1" },
        { name: "End2", url: "End2" },
        { name: "End3", url: "End3" },
      ],
    },
    {
      name: "Comopnents",
      url: router,
      subcategories: [
        { name: "components1", url: "components1" },
        { name: "components2", url: "components2" },
        { name: "components3", url: "components3" },
        { name: "components4", url: "components4" },
      ],
    },
    {
      name: "Connections",
      url: workgroupSwitch,
      subcategories: [
        { name: "Connections1", url: "Connections1" },
        { name: "Connections2", url: "Connections2" },
        { name: "Connections3", url: "Connections3" },
      ],
    },
    {
      name: "MultiUser",
      url: wirelessTransport,
      subcategories: [
        { name: "MultiUser1", url: "MultiUser1" },
        { name: "MultiUser2", url: "MultiUser2" },
        { name: "MultiUser3", url: "MultiUser3" },
      ],
    },
    {
      name: "Miscella",
      url: wirelessTransport,
      subcategories: [
        { name: "Miscella1", url: "Miscella1" },
        { name: "Miscella2", url: "Miscella2" },
        { name: "Miscella3", url: "Miscella3" },
      ],
    },
  ];

  return (
    <HStack borderRadius={14} backgroundColor={"white"} padding={2}>
      {categories.map((category) => (
        <Box onClick={() => onSelectCategory(category)} marginRight={4}>
          <Tooltip label={category.name} aria-label="A tooltip">
            <Image boxSize={"25px"} src={category.url} />
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default Categories;
