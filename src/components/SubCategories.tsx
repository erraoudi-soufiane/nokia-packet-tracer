import { HStack, Tooltip, Image, Box, Button } from "@chakra-ui/react";

export interface Category {
  name: string;
  url: string;
  subcategories: SubCategory[];
}

interface SubCategory {
  name: string;
  url: string;
}

interface Props {
  selectedCategory: Category | null;
}

const SubCategories = ({ selectedCategory }: Props) => {
  return (
    <HStack borderRadius={14} backgroundColor={"white"} padding={2}>
      {selectedCategory?.subcategories.map((subcategory) => (
        <Box>
          <Tooltip label={subcategory.name} aria-label="A tooltip">
            {/* <Image src={subcategory.url} boxSize={"25px"} /> */}
            <Button colorScheme="blue">{subcategory.url}</Button>
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default SubCategories;
