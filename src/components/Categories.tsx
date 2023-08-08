import { Image, HStack, Tooltip, Box } from "@chakra-ui/react";
import NetworkDevices from "../assets/cloud.png";
import firewall from "../assets/ios-firewall.png";
import router from "../assets/router.png";
import workgroupSwitch from "../assets/workgroup-switch.png";
import wirelessTransport from "../assets/wireless-transport.png";
import { Category } from "./Subcategories";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const Categories = ({ onSelectCategory }: Props) => {
  const categories: Category[] = [
    {
      name: "Network",
      url: NetworkDevices,
      subcategories: [
        {
          name: "Network1",
          url: "Network1",
          devices: [
            { name: "Network11", url: "Network11" },
            { name: "Network12", url: "Network12" },
            { name: "Network13", url: "Network13" },
            { name: "Network14", url: "Network14" },
            { name: "Network15", url: "Network15" },
            { name: "Network16", url: "Network16" },
          ],
        },
        {
          name: "Network2",
          url: "Network2",
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
          name: "Network3",
          url: "Network3",
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
          name: "Network1",
          url: "Network1",
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
          name: "Network2",
          url: "Network2",
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
          name: "Network3",
          url: "Network3",
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
      name: "End",
      url: firewall,
      subcategories: [
        {
          name: "End1",
          url: "End1",
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
          name: "End2",
          url: "End2",
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
          url: "End3",
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
          url: "components1",
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
          url: "components2",
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
          url: "components3",
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
          url: "components4",
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
          url: "Connections1",
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
          url: "Connections2",
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
          url: "Connections3",
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
          url: "MultiUser1",
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
          url: "MultiUser2",
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
          url: "MultiUser3",
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
          url: "Miscella1",
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
          url: "Miscella2",
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
          url: "Miscella3",
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
    <HStack
      height={"35px"}
      borderRadius={14}
      backgroundColor={"white"}
      padding={2}
    >
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
