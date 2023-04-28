import { extendTheme } from "@chakra-ui/react";
import Color from "./Colors.js";

const theme = extendTheme({
  brand: {
    900: Color.BLUE, 
    800: Color.GREY , 
    700: Color.GREEN ,
    600: Color.CREME , 
    500: Color.DARK_BROWN, 
    400: Color.LIGHT_BROWN,    
  },
  
  fonts: {
    heading: `'Domaine Text', sans-serif`,
    body: `'Founders Grotesk', sans-serif`
  }
})

export default theme;