import * as React from 'react';
import {
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';

import Logo from '../components/Logo';
import { PhoneIcon } from '@chakra-ui/icons';


const Frontpage = () => (
  <Container>
    <Stack>
      <Logo></Logo>
      <Text>Front page text body</Text>
      <PhoneIcon />
    </Stack>
  </Container>
)

export default Frontpage;