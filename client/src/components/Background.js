import { Box } from '@chakra-ui/react';
import Color from '../Colors';

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