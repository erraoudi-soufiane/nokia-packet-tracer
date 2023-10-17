import { HStack, Tooltip, Image, Box, Button, Text } from "@chakra-ui/react";

export interface Category {
  name: string;
  url: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  name: string;
  url: string;
  devices: Device[];
}

export interface Device {
  name: string;
  url: string;
}

interface Props {
  selectedCategory: Category | null;
  onSelectSubcategory: (subcategory: Subcategory) => void;
  myColorMode: string;
}

const Subcategories = ({
  selectedCategory,
  onSelectSubcategory,
  myColorMode,
}: Props) => {
  console.log("HIIIIIIIII" + myColorMode);
  return (
    <HStack borderRadius={14} bg={myColorMode} padding={2} height={"35px"}>
      {selectedCategory?.subcategories.map((subcategory) => (
        <Box
          key={subcategory.name}
          onClick={() => onSelectSubcategory(subcategory)}
        >
          <Tooltip label={subcategory.name} aria-label="A tooltip">
            <Image src={subcategory.url} boxSize={"25px"} />
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default Subcategories;
