import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  value: string;
  label: string;
}

interface Props {
  //   selectedSortOrder: SortOrder | null;
  //   onSelectSortOrder: (sortOrder: SortOrder) => void;
  myColorMode: string;
}

const SortSelector = ({ myColorMode }: Props) => {
  const selectedSortOrder: SortOrder = { value: "name", label: "Name" };
  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
  ];

  return (
    <Menu>
      <MenuButton
        borderRadius={14}
        color={myColorMode == "#A5A5A5" ? "white" : "black"}
        as={Button}
        rightIcon={<BsChevronDown />}
        colorScheme="gray"
      >
        Order By : {selectedSortOrder ? selectedSortOrder.label : "name"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            // onClick={() => onSelectSortOrder(sortOrder)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
