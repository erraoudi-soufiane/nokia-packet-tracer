import { HStack, Tooltip, Image } from "@chakra-ui/react";
import React from "react";

const SubCategories = () => {
  const subcategories = [
    { name: "Network", url: "Network" },
    { name: "End", url: "End" },
    { name: "Comopnents", url: "Comopnents" },
    { name: "Connections", url: "Connections" },
    { name: "MultiUser", url: "MultiUser" },
    { name: "Miscella", url: "Miscella" },
  ];
  return (
    <HStack padding={2} bg="white" borderRadius={10}>
      {subcategories.map((subcategory) => (
        <Tooltip label={subcategory.name} aria-label="A tooltip">
          <Image src={subcategory.url} />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default SubCategories;
