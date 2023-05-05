import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';

// The site should appear after the user has selected a time slot and room
const BookingConfirmation = () => (
  <Container>
    <Container padding={"3rem 0 0 0"} centerContent="true">
      <Background width="80vw" height="85vh" backgroundColor={Color.BLUE}>
        <VStack>
          <Container padding={"5em 0 0 0"} centerContent="true">
            <Background width="65vw" height="25vh" backgroundColor={Color.DARK_BROWN}>
              <VStack>
                <Text color={Color.CREME} padding={'30px 40px 0px 40px'}>Navn ______________________</Text>
                <Text color={Color.CREME} padding={'50px 40px 0px 40px'}>Email ______________________</Text>
              </VStack>
            </Background>
          </Container>
          <Text color={Color.CREME} fontSize={'xl'} padding={'30px 0px 10px 0px'}>Du er ved at booke:</Text>
          <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Lokale :  ****</Text>
          <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Fra :  14:30</Text>
          <Text color={Color.CREME} padding={'0px 40px 40px 40px'}>Til :  15:00</Text>
          <Button size={'lg'}>Bekræft</Button>
        </VStack>
      </Background>
    </Container>
  </Container>
)

export default BookingConfirmation;