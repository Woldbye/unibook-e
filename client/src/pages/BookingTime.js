import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Button,
  Link
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Background from '../components/Background';

const BookingTime = () => {
  let params = useParams();
  console.log(params);
  return (
    <Background>
      <Container>
        <Stack>
          <Text>BOOKING DATE GRID</Text>
          <Text>BOOKING TIME SELECTOR</Text>
          <Button size={'lg'}>
            <Link to={`/rooms/${params}/` }>
              <Text size={'lg'}>Næste</Text >
            </Link>
          </Button>
        </Stack>
      </Container>
    </Background>
  )
}


export default BookingTime;