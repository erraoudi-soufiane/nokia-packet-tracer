// import { HStack, Switch, Text } from "@chakra-ui/react";
// import { useState } from "react";

// interface Props {
//   myColorMode: string;
//   setMyColorMode: (myColorMode: string) => void;
// }

// const ColorModeSwitch = ({ myColorMode, setMyColorMode }: Props) => {
//   return (
//     <HStack>
//       <Switch
//         colorScheme={myColorMode === "#A5A5A5" ? "black" : "black"}
//         isChecked={myColorMode === "#A5A5A5"}
//         onChange={(e) =>
//           setMyColorMode(e.target.checked ? "#A5A5A5" : "#ffffff")
//         }
//         opacity={0.8}
//       />
//       <Text
//         color={myColorMode === "#A5A5A5" ? "white" : "black"}
//         whiteSpace="nowrap"
//       >
//         Dark Mode
//       </Text>
//     </HStack>
//   );
// };

// export default ColorModeSwitch;

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginLeft={3}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
