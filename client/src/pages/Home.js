import * as React from 'react';
import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';


const Home = () => (
  <Container>
    <Stack>
      <Text>Homepage text body and a phone icon to illustrate icons </Text>
      <PhoneIcon />
    </Stack>
  </Container>
)

export default Home;