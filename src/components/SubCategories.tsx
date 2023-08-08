import { HStack, Tooltip, Image, Box, Button } from "@chakra-ui/react";

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

interface Device {
  name: string;
  url: string;
}

interface Props {
  selectedCategory: Category | null;
  onSelectSubcategory: (subcategory: Subcategory) => void;
}

const Subcategories = ({ selectedCategory, onSelectSubcategory }: Props) => {
  return (
    <HStack
      borderRadius={14}
      backgroundColor={"white"}
      padding={2}
      height={"35px"}
    >
      {selectedCategory?.subcategories.map((subcategory) => (
        <Box onClick={() => onSelectSubcategory(subcategory)}>
          <Tooltip label={subcategory.name} aria-label="A tooltip">
            {/* <Image src={subcategory.url} boxSize={"25px"} /> */}
            <Button colorScheme="blue">{subcategory.url}</Button>
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default Subcategories;
