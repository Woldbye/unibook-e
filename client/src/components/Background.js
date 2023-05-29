import { Box } from '@chakra-ui/react';
import Color from '../Colors';

//The Background for our page is created here, but is also usable for our containers, as this only makes a background, and gives it a default.
//This component is used in most of our components, just with another color.

const Background = ({children = [], height = 'auto', width = '100vw', color = 'black', backgroundColor = Color.GREY,minH = 'auto'}) => (
  (
    <Box
      height={height}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      justifyContent={'center'}
      boxShadow={'0px 6px 8px #00000040'}
      minH={minH}
    >
    {children}
    </Box>
  ) 
);

export default Background;