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
import { toUrl,fromUrl, getRooms } from "../api/roomquery.js";


const BookingTime = () => {
  let params = useParams();
  
  // Use setQuery to update the date information in the query
  const [query,setQuery] = React.useState(fromUrl(params.query));
  
  // Rooms will contain the rooms that are available for the given query
  const [rooms,setRooms] = React.useState([]);
  
  // Also way too many update not sure why
  React.useEffect(() => {
    getRooms(query).then(rooms => setRooms(rooms));
  }, [query])
  
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