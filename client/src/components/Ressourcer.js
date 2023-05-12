import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';


const Ressourcer = ({ }) => {
    return (
      <>
        <Container padding={"2rem 0 3rem 0"} centerContent="true">
            <Background width="60vw" height="40vh" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Ressourcer</Text>
                </VStack>
                <HStack spacing={'2rem'}>
                    <Button margin={'10px'}>Screen</Button>
                    <Button margin={'10px'}>Projector</Button>
                    <Button margin={'10px'}>White board</Button>
                </HStack>
                <HStack spacing={'2rem'}>
                    <Button margin={'10px'}>Black board</Button>
                    <Button margin={'10px'}>Outlets</Button>
                    <Button margin={'10px'}>Table desks</Button>
                </HStack>
                <HStack spacing={'2rem'}>
                    <Button margin={'10px'}>AC</Button>
                </HStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default Ressourcer;