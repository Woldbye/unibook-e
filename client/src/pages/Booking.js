import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Color from '../Colors';
import GoggleInput from '../components/GoggleInput';
import LokaleTyper from '../components/LokaleTyper';
import Ressourcer from '../components/Ressourcer';

const Booking = () => (
  <Container>
    <VStack paddingBottom='2rem'>
      <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 30px 0px'}>Vælg lokale krav</Text>
      <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
        <GoggleInput step_per_click={1} type_name={'Personer'} start_value={1} max_value={128} />
        <GoggleInput step_per_click={0.5} type_name={'Timer'} start_value={2.0} max_value={14.0} /> 
      </VStack>
      <LokaleTyper></LokaleTyper>
      <Ressourcer></Ressourcer>
      <Button size={'lg'}>Næste</Button>
    </VStack>
  </Container>
)

export default Booking;