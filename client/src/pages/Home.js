import * as React from 'react';
import {
  Container,
  Button,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';

const Home = () => (
    <Container padding={"3rem 1rem 0 0"} centerContent="true">
      <Background width="80vw" height="85vh" backgroundColor={Color.BLUE}>
        <VStack>
          <Text color={Color.CREME} fontSize={'3xl'}>Velkommen</Text>
          <Button>Book tid</Button>
          <Button>Søg lokale</Button>
          <Textarea variant="unstyled" color={Color.CREME}>
            Det her er en intro til vores hjemmeside. Universitets side bla blå
            bla
          </Textarea>
        </VStack>
      </Background>
    </Container>
);

export default Home;