import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  HStack,
  Text,    
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import BackButton from '../components/BackButton';

import { useParams, useNavigate } from 'react-router-dom';
import { parseISOString } from '../date.js';

// The site should appear after the user has selected a time slot and room
const BookingConfirmation = () => {  
  let params = useParams();
  
  const id = params.id;                     // The id of the room to book
  const date = parseISOString(params.date); // Date is now a date object
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mail,setMail] = React.useState('blank');
  
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  }

  const handleChange = (event) => {
    setMail(event.target.value)
  }

  return (
    <>
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
                  <Input  onChange={handleChange}/>
                </HStack>
                </VStack>
              </Background>
            </Container>
            <Text color={Color.CREME} fontSize={'xl'} padding={'30px 0px 10px 0px'}>Du er ved at booke:</Text>
            <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Lokale :  ****</Text>
            <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Fra :  14:30</Text>
            <Text color={Color.CREME} padding={'0px 40px 40px 40px'}>Til :  15:00</Text>
            <Button onClick={onOpen}>Bekræft</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent backgroundColor={Color.BLUE}>
                <ModalCloseButton />
                <ModalBody>
                <VStack>
                <Text color={Color.CREME}>{'Vi har sendt en bekræftelse til'}</Text>
                <Text color={Color.CREME}>{mail.valueOf()}</Text>
                </VStack>
                </ModalBody>
        
                <ModalFooter>
                  <Button mr={3} onClick={toHome}>
                    Luk
                  </Button>
                  <Button variant='ghost'>Send igen</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </VStack>
        </Background>
      </Container>
    </Container>
  </Background>
    </>
  )
}
export default BookingConfirmation;