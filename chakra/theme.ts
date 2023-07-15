// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200: "#000",
      300: "#EA047E",
      
    },
  },

  fonts: {
    body: "Inter,  sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },

  components: {
    Button,
  },
});
