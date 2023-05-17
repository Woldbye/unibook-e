import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Background from '../components/Background';
import { Link } from 'react-router-dom';

const { toUrl,fromUrl } = require('../api/roomquery.js');

const BookingTime = () => {
  let params = useParams();
  const [query, setQuery] = React.useState(fromUrl(params.query));

  return (
    <Background>
      <Container>
        <Stack>
          <Text>BOOKING DATE GRID</Text>
          <Text>BOOKING TIME SELECTOR</Text>
          <Link to={`/rooms/${toUrl(query)}/` }>
            <Button size={'lg'}>
              <Text size={'lg'}>Næste</Text >
            </Button>
          </Link>
        </Stack>
      </Container>
    </Background>
  )
}


export default BookingTime;