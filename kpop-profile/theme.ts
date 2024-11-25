import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // Fonts
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },

  // Custom color palette
  colors: {
    // Soft white variations
    white: {
      50: "#f9f9f9",
      100: "#f1f3f5",
      200: "#e9ecef",
      300: "#dee2e6",
    },

    // Brand colors
    brand: {
      50: "#f0e6ff",
      100: "#d1b3ff",
      200: "#b380ff",
      300: "#944dff",
      400: "#7619ff",
      500: "#5900cc",
      600: "#4600a3",
      700: "#33007a",
      800: "#200052",
      900: "#0d0029",
    },
  },
});
