import { HStack, Tooltip, Image } from "@chakra-ui/react";
import React from "react";

const Components = () => {
  const devices = [
    { name: "Network", url: "Network" },
    { name: "End", url: "End" },
    { name: "Comopnents", url: "Comopnents" },
    { name: "Connections", url: "Connections" },
    { name: "MultiUser", url: "MultiUser" },
    { name: "Miscella", url: "Miscella" },
  ];

  return (
    <HStack padding={2} bg="white" borderRadius={10}>
      {devices.map((device) => (
        <Tooltip label={device.name} aria-label="A tooltip">
          <Image src={device.url} />
        </Tooltip>
      ))}
    </HStack>
  );
};

export default Components;
