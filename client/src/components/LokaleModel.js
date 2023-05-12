import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';

import Background from './Background';
import Color from '../Colors';


class LokaleModel extends React.Component{

  render(){
    return (
      <>
        <Container padding={"3rem 0 0 0"} centerContent="true">
            <Background width="60vw" height="30vh" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Lokale nummer</Text>
                </VStack>
                <HStack >
                </HStack>
                <HStack >
                </HStack>
                <Button>Book</Button>
            </Background>
        </Container>
      </>
    )
  }
}
  
  export default LokaleModel;