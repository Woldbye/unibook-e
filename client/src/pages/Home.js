import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';

const Home = () => (
    <Container padding={"3rem 0 0 0"} centerContent="true">
      <Background width="80vw" height="85vh" backgroundColor={Color.BLUE}>
        <VStack>
          <Text color={Color.CREME} fontSize={'5xl'} padding={'60px 0px 60px 0px'}>Velkommen</Text>
          <Button size={'lg'}>Book tid</Button>
          <Text padding={'20px 0px 0px 0px'}></Text>
          <Button size={'lg'}>Søg lokale</Button>
          <Text color={Color.CREME} padding={'50px 40px 0px 40px'}>UNIBOOK-E er en hjemmeside til ITU. Det er en side hvor du kan se og booke lokaler på ITU. Hvis du har brug for hjælp kan du kontakte os på</Text>
          <Text color={Color.CREME} padding={'0px 40px 20px 40px'}>Tlf :  ** ** ** **</Text>
        </VStack>
      </Background>
    </Container>
);

export default Home;