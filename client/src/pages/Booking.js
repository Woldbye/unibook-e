import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';


const Booking = () => (
  <Container>
    <VStack>
      <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg lokale krav</Text>
      <Text color={Color.BLACK} fontSize={'xl'} padding={'30px 0px 0px 0px'}>Antal personer boks</Text>
      <Text color={Color.BLACK} fontSize={'xl'} padding={'20px 0px 0px 0px'}>Tid boks</Text>
      <Container padding={"3rem 0 0 0"} centerContent="true">
        <Background width="60vw" height="40vh" backgroundColor={Color.BLUE}>
          <VStack>
            <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Lokale typer</Text>
          </VStack>
        </Background>
      </Container>
      <Container padding={"2rem 0 3rem 0"} centerContent="true">
        <Background width="60vw" height="40vh" backgroundColor={Color.BLUE}>
          <VStack>
            <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Ressourcer</Text>
          </VStack>
        </Background>
      </Container>
      <Button size={'lg'}>Næste</Button>
    </VStack>
  </Container>
)

export default Booking;