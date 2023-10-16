import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
      },
    },
  },
  config,
  colors: {
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    customTeal: "#cecbcb",
  },
});

export default theme;
