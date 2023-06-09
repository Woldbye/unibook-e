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
  Heading,
  Center,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';
import { } from '../date.js'
import { useParams, useNavigate } from 'react-router-dom';
import { fromUrl, toUrl, queryToStringIfDate } from '../api/roomquery';
// The site should appear after the user has selected a time slot and room
const BookingConfirmation = () => {
  let params = useParams();
  const start_query = fromUrl(params.query) ?? ''; // start query in url form
  const back_query = { ...start_query };
  delete back_query['rid'];

  const isFromDatePage = 'from_date' in back_query;
  if (isFromDatePage) delete back_query['from_date'];
  const prv_path = (isFromDatePage) ? `/book/room/date/${toUrl(back_query)}/` : `/rooms/${toUrl(back_query)}/`;
  const header = queryToStringIfDate(back_query)
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
      <BackButton to={prv_path} />
        <Container>
          <Container padding={"0 0 3rem 0"} centerContent="true">
            <Heading as='h2' color={Color.BLUE} size={"l"} padding={"30px 40px 0px 40px"} textAlign={'center'} paddingBottom={'3%'}>
              {header}
            </Heading>
            <Background width="80vw" height="auto" backgroundColor={Color.BLUE}>
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
                <Heading as='h4' color={Color.CREME} fontSize={'l'} padding={'30px 0px 10px 0px'}>Du er ved at booke:</Heading>
                <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>
                  {`Lokale : ${start_query.rid}`}
                </Text>
                <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>
                  {`Fra : ${start_query.date.toClockString()}`}
                </Text>
                <Text color={Color.CREME} padding={'0px 40px 0px 40px'}>
                  {`Til : ${start_query.date.addTime(0, 0, start_query.duration).toClockString()}`}
                </Text>
                <Text fontSize={'l'} color={Color.CREME} padding={'0px 40px 20px 40px'}>
                  {`d. ${start_query.date.getDate()}/${start_query.date.getMonth() + 1}/${start_query.date.getFullYear()} `}
                </Text>
                <Button onClick={onOpen} isDisabled={!isEmailValid}>Bekræft</Button>
                <Text paddingBottom={'20px'}></Text>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent backgroundColor={Color.BLUE}>
                    <Link to={'/'}><ModalCloseButton color={Color.CREME} /></Link>
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