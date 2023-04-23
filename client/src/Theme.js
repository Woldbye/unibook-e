import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  brand: {
    900: "#1a365d",
  },
  fonts: {
    heading: `'Domaine Text', sans-serif`,
    body: `'Founders Grotesk', sans-serif`
  }
})

export default theme;