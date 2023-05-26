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
  Center,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom';
import { parseISOString } from '../date.js';

// The site should appear after the user has selected a time slot and room
const BookingConfirmation = () => {
  let params = useParams();

  const id = params.id;                     // The id of the room to book
  const date = parseISOString(params.date); // Date is now a date object

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [mail, setMail] = React.useState('');

  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  }

  const handleChange = (event) => {
    setMail(event.target.value)
  }

  const isEmailValid = mail.trim() !== ''; // Check if the email field is not empty

  return (
    <>
      <Background>
        <Container>
          <BackButton to="/book/date/rooms" />
          <Container padding={"3rem 0 3rem 0"} centerContent="true">
            <Background width="80vw" height="87vh" backgroundColor={Color.BLUE}>
              <VStack>
                <Container padding={"5rem 0 0 0"} centerContent="true" >
                  <Background width="65vw" height="auto" backgroundColor={Color.DARK_BROWN}>
                    <VStack>
                      <HStack padding={'40px 20px 0px 20px'}>
                        <Text color={Color.CREME}>Navn:</Text>
                        <Input color={Color.CREME} />
                      </HStack>
                      <HStack padding={'30px 20px 40px 20px'}>
                        <Text color={Color.CREME}>Email:</Text>
                        <Input color={Color.CREME} onChange={handleChange} />
                      </HStack>
                    </VStack>
                  </Background>
                </Container>
                <Text color={Color.CREME} fontSize={'xl'} padding={'30px 0px 10px 0px'}>Du er ved at booke:</Text>
                <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Lokale : Bla  den et eller andet dato</Text>
                <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>Fra : </Text>
                <Text color={Color.CREME} padding={'0px 40px 40px 40px'}>Til : </Text>
                <Button onClick={onOpen} isDisabled={!isEmailValid}>Bekræft</Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent backgroundColor={Color.BLUE}>
                    <Link to={'/'}><ModalCloseButton color={Color.CREME}/></Link>
                    <ModalBody>
                      <VStack>
                        <Text paddingTop={'15px'} color={Color.CREME}>{'Vi har sendt en bekræftelse til mailen:'}</Text>
                        <Text color={Color.CREME}>{mail.valueOf()}</Text>
                      </VStack>
                    </ModalBody>

                    <Center>
                      <ModalFooter>
                        <HStack spacing={'2rem'}>
                        <Button mr={3} onClick={toHome} width={'90px'}>
                          Luk
                        </Button>
                        <Button variant='ghost' width={'90px'}>Send igen</Button>
                        </HStack>
                      </ModalFooter>
                    </Center>
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