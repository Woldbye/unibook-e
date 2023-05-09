import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import GoggleInput from '../components/GoggleInput';

const Booking = () => (
  <Container>
    <VStack paddingBottom='2rem'>
      <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg lokale krav</Text>
      <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
        <GoggleInput step_per_click={1} type_name={'Personer'} start={1} max={128} min={1} />
        <GoggleInput step_per_click={0.5} type_name={'Timer'} start={2.0} max={14.0} min={0.5} /> 
      </VStack>
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