import React from "react";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh" // Centers vertically within the viewport
      textAlign="center"
      paddingY={57}
      paddingX={"380px"}
    >
      <Text fontSize="6xl" mb="1rem" as="b">
        Create Network Archietectures{" "}
        <Text as="span" color="#005aff">
          With Speed
        </Text>
      </Text>

      <br />
      <Text fontSize="xl" as="abbr" mb="1.5rem">
        NokiaNetGraph is a simple application
        <br />
        that gives you all the tools you need <br />
        to create a network architecture in a matter of minutes.
      </Text>

      <Button
        size="300px"
        colorScheme="blue"
        fontSize="xl"
        paddingY="1rem"
        paddingX="2rem"
        display={"flex"}
        justifyContent={"center"}
        rightIcon={<ArrowForwardIcon />}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default About;
