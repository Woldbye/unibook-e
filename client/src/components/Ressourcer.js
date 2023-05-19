import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  HStack,
  Text,
  Flex
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';

//! TO:DO Hold a state with value of selected room types
//! The value is a single number represented as a bitfield (see Room.Tag)

const Ressourcer = ({ }) => {
    return (
      <>
        <Container padding={"2rem 0 2rem 0"} centerContent="true">
            <Background width="60vw" height="auto" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Ressourcer</Text>
                </VStack>
                <VStack padding={'0 0 1rem 0'}>
                    <Flex spacing={'2rem'} display={'Flex'} flexWrap={'wrap'} justify={'center'}>
                      <Button margin={'10px'} width={'110px'}>Skærm</Button>
                      <Button margin={'10px'} width={'110px'}>Projektor</Button>
                      <Button margin={'10px'} width={'110px'}>White board</Button>
                      <Button margin={'10px'} width={'110px'}>Black board</Button>
                      <Button margin={'10px'} width={'110px'}>Outlets</Button>
                      <Button margin={'10px'} width={'110px'}>Borde</Button>
                      <Button margin={'10px'} width={'110px'}>AC</Button>
                   </Flex>
                </VStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default Ressourcer;