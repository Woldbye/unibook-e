import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Spacer,
  VStack,
  Button
} from '@chakra-ui/react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';
import BackButton from '../components/BackButton';
import { toUrl,fromUrl, getRooms } from "../api/roomquery.js";
import { parseISOString } from '../date.js';

const BookingTime = () => {
  let params = useParams();
  const today = new Date();
  const start_query = params.query ?? ''; // start query in url form
  const [query,setQuery] = React.useState(fromUrl(start_query));
  const [rooms,setRooms] = React.useState([]);
  const [selected_date,setSelectedDate] = React.useState(today);
  
  // { roomid, date } obj
  const [booking, setBooking] = React.useState();

  React.useEffect(() => {
    console.log("received update for ", booking)
    if(booking !== undefined && "roomid" in booking && "date" in booking) {
      const { room_id, date } = booking;
      const newState = query;
      newState['id'] = room_id;
      newState['date'] = date.toISOString();
      setQuery(newState);
    }
  }, [booking])
  React.useEffect(() => { getRooms(query).then(rs => setRooms(rs)); },[query])

  return (
    <Background>
      <Container height={'100vh'}width ={'100vw'}>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
        <BackButton to={`/book/${start_query}/`} /> 
        <Text fontSize={28}>Vælg dato</Text>
          <Calendar
            onClick={(date) => {
              setSelectedDate(date)
              const newState = query;
              newState['date'] = date;
              setQuery(newState);
            }}
            rooms={rooms}
            selected_date={selected_date}
          />
        <VStack width='50%' minWidth={'12rem'}>
          <TimeChooser
            marginBottom={'15%'}
            date={selected_date}
            rooms={rooms}
            setBooking={({room_id, date}) => setBooking({roomid: room_id, date: date})}  
          />
          <Link to={`/rooms/${toUrl(query)}/` }>
          <Button size={'lg'}>
            <Text size={'lg'}>Næste</Text >
          </Button>
          </Link>
          <Outlet/>
        </VStack>
      </Stack>
      </Container>
    </Background>
  )
}

export default BookingTime;