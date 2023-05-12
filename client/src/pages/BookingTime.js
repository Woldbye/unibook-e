import * as React from 'react';
import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Calendar from '../components/Calendar';


const BookingTime = () => (
  <Background>
    <Container>
      <Stack alignItems={'center'}>
        <Text>BOOKING DATE GRID</Text>
        <Calendar/>
        <Text>BOOKING TIME SELECTOR</Text>
      </Stack>
    </Container>
  </Background>
)

export default BookingTime;