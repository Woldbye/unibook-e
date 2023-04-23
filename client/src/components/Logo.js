import { Text } from '@chakra-ui/react';

/**
 * @param {position,top,left} string inject the css parameters through props 
 * @returns 
 */



/**
 * @param {position,top,left} string inject the css parameters through props
 */
const Logo = ({ position = 'relative', top = '0px',left = '0px', fontSize = 'l' }) => (
  <Text
    as={'u'}
    fontSize={fontSize}
    className={'logo'}
    pos={position}
    top={top}
    left={left}
  >
    UNIBOOK⋅E
  </Text>
)

export default Logo;