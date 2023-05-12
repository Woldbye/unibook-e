import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';


const LokaleTyper = ({ }) => {
    return (
      <>
        <Container padding={"3rem 0 0 0"} centerContent="true">
            <Background width="60vw" height="30vh" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Lokale typer</Text>
                </VStack>
                <HStack spacing={'2rem'} padding={'20px 0px 0px 0px'} alignItems={'center'}>
                    <Button margin={'10px'}>Skyboks</Button>
                    <Button margin={'10px'}>Auditorium</Button>
                    <Button margin={'10px'}>Møde lokale</Button>
                </HStack>
                <HStack spacing={'2rem'} padding={'20px'}>
                    <Button margin={'10px'}>Klasse lokale</Button>
                </HStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default LokaleTyper;