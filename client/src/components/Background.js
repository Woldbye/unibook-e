import { Box } from '@chakra-ui/react';
import Color from '../Colors';

//The Background for our page is created here, but is also usable for our containers, as this only makes a background, and gives it a default.
//This component is used in most of our components, just with another color.

const Background = ({children = [], height = '100%', width = '100vw', color = 'black', backgroundColor = Color.GREY}) => (
  (
    <Box
      height={height}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
    >
    {children}
    </Box>
  ) 
);

export default Background;