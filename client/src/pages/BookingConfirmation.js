import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  HStack,
  Text,
  Link,
  Input
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import BackButton from '../components/BackButton';

// The site should appear after the user has selected a time slot and room
const BookingConfirmation = () => (
  <Background>
    <Container>
      <BackButton  to="/book/date/rooms"/>
      <Container padding={"3rem 0 0 0"} centerContent="true">
        <Background width="80vw" height="85vh" backgroundColor={Color.BLUE}>
          <VStack>
            <Container padding={"5em 0 0 0"} centerContent="true">
              <Background width="65vw" height="25vh" backgroundColor={Color.DARK_BROWN}>
                <VStack>
                <HStack  padding={'30px 40px 0px 40px'}>
                  <Text color={Color.CREME}>Navn:</Text>
                  <Input/>
                </HStack>
                <HStack  padding={'50px 40px 0px 40px'}>
                  <Text color={Color.CREME}>Email:</Text>
                  <Input/>
                </HStack>
                </VStack>
              </Background>
            </Container>
            <Text color={Color.CREME} fontSize={'xl'} padding={'30px 0px 10px 0px'}>Du er ved at booke:</Text>
            <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Lokale :  ****</Text>
            <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Fra :  14:30</Text>
            <Text color={Color.CREME} padding={'0px 40px 40px 40px'}>Til :  15:00</Text>
            <Link to={'/'}> 
              <Button size={'lg'}>Bekræft</Button>
            </Link>
          </VStack>
        </Background>
      </Container>
    </Container>
  </Background>
)

export default BookingConfirmation;