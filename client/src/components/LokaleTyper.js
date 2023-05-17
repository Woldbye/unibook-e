import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
  HStack,
  Flex,
  Center
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';


const LokaleTyper = ({ }) => {
    return (
      <>
        <Container padding={"2rem 0 0 0"} centerContent="true">
            <Background width="60vw" height="auto" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'20px 40px 0px 40px'}>Lokale typer</Text>
                </VStack>
                <VStack padding={'0 0 1rem 0'}>
                    <Flex spacing={'2rem'} display={'Flex'} flexWrap={'wrap'} justify={'center'}>
                      <Button margin={'10px'} width={'120px'}>Skyboks</Button>
                      <Button margin={'10px'} width={'120px'}>Auditorium</Button>
                      <Button margin={'10px'} width={'120px'}>Møde lokale</Button>
                      <Button margin={'10px'} width={'120px'}>Klasse lokale</Button>
                   </Flex>
                </VStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default LokaleTyper;