import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  VStack,
  Button
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';
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
      <Container height={'100vh'}width ={'100vw'}>
      <Stack alignItems={'center'} spacing={'2rem'}  minWidth={'12rem'}>
        <Text fontSize={24}>Vælg dato</Text>
        <Calendar/>
        <VStack width='50%' minWidth={'12rem'}>
          <TimeChooser />
          <Link to={`/rooms/${toUrl(query)}/` }>
          <Button size={'lg'}>
            <Text size={'lg'}>Næste</Text >
          </Button>
          </Link>
        </VStack>
      </Stack>
      </Container>
    </Background>
  )
}

export default BookingTime;