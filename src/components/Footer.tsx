import { Grid, Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Grid
      templateColumns="1fr"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
      bottom="0"
      width="100%"
    >
      <Text>made by soufiane ER</Text>
    </Grid>
  );
}

export default Footer;
