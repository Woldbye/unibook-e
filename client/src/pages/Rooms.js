import * as React from 'react';
import {
  Container,
  VStack,
  Text,
} from '@chakra-ui/react';
import LokaleModel from '../components/LokaleModel';
import LokaleTyper from '../components/LokaleTyper';


const Rooms = () => (
  <Container>
    <VStack paddingBottom='2rem'>
      <LokaleModel></LokaleModel>
    </VStack>
  </Container>
)

export default Rooms;