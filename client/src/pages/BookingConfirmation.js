import * as React from 'react';
import {
  Container,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react';

// The pop-up should appear after the user has selected a time slot and room
const BookingConfirmation = () => (
  <Container>
    <Stack>
      <Text>Navn</Text>
      <Text>E-Mail</Text>
      <Button>BEKRÆFT</Button>
    </Stack>
  </Container>
)

export default BookingConfirmation;