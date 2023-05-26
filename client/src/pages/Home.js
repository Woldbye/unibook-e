import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import { Link } from 'react-router-dom';

const Home = () => (
    <Container padding={"3rem 0 7rem 0"} centerContent="true">
      <Background width="80vw" height="auto" backgroundColor={Color.BLUE}>
        <VStack>
          <Text color={Color.CREME} fontSize={'4xl'} paddingTop={'50px'}>Velkommen til</Text>
          <Text color={Color.CREME} fontSize={'4xl'} paddingBottom={'50px'}>UNIBOOK-E</Text>
          <Link to={'book/'}><Button size={'lg'} width={'100px'} >Book tid</Button></Link>
          <Text padding={'20px 0px 0px 0px'}></Text>
          <Link to={'rooms'}><Button size={'lg'} width={'100px'}>Søg lokale</Button></Link>
           <Text color={Color.CREME} fontSize={'xl'} padding={'50px 40px 0px 40px'} textAlign="center">Hvordan finder jeg rundt?</Text>
          <Text color={Color.CREME} padding={'0px 40px 0px 40px'} textAlign="center">Hvis du gerne vil finde et lokale til et bestemt tidspunkt og med 
          bestemte krav, skal du ind på "Book nu". Hvis du derimod har en specifikt lokale i tankerne eller en adresse, skal du ind 
          og søge på det under oversigten.</Text>
          <Text color={Color.CREME} fontSize={'xl'} padding={'20px 40px 0px 40px'} textAlign="center">Om os</Text>
          <Text color={Color.CREME} padding={'0px 40px 0px 40px'} textAlign="center">UNIBOOK-E er en hjemmeside til ITU. Det er en side hvor du kan se
           og booke lokaler på ITU. Hjemmesiden er udviklet af 4 studerende på ITU i faget UX & Webprogrammering.</Text>
          <Text color={Color.CREME} fontSize={'xl'} padding={'20px 40px 0px 40px'} textAlign="center">Kontakt os</Text>
          <Text color={Color.CREME} padding={'0px 40px 50px 40px'} textAlign="center">For hurtig hjælp ring på Tlf :  ** ** ** ** mellem 8:30 og 13:30 
          mandag til torsdag. Hvis ikke det er muligt, kan vi kontaktes på emailSomething@gmail.com. Svartid variere.</Text>
        </VStack>
      </Background>
    </Container>
);

export default Home;