import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Button,
  VStack
} from '@chakra-ui/react';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';


const BookingTime = () => (
 
    <Container height={'100vh'}width ={'100vw'} >
      <Stack alignItems={'center'} spacing={'2rem'}  minWidth={'12rem'}>
        <Text fontSize={24}>Vælg dato</Text>

        <Calendar/>
        
        <VStack width='50%' minWidth={'12rem'}>
          <TimeChooser />
          <Button size={'lg'}>Næste</Button>
        </VStack>
      </Stack>
    </Container>
   
  
)

export default BookingTime;