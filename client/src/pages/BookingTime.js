import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  VStack,
  Button
} from '@chakra-ui/react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';
import BackButton from '../components/BackButton';
import { toUrl, fromUrl, getRooms } from "../api/roomquery.js";

const BookingTime = () => {
  let params = useParams();
  const today = new Date(); // today's date
  const start_query = params.query ?? ''; // start query in url form
  const [query, setQuery] = React.useState(fromUrl(start_query));
  const [rooms, setRooms] = React.useState([]);
  const [selected_date, setSelectedDate] = React.useState(today); // selected date is today, initially

  // { roomid, date } obj
  const [booking, setBooking] = React.useState();


  //listener to update selected timeslot in query when picked in TimeChooser
  React.useEffect(() => {
    if(booking !== undefined && "room_ids" in booking && "date" in booking) {
      const { room_ids, date } = booking;
      const newState = query; // copy query
      newState['id'] = room_ids;
      newState['date'] = date;
      setQuery(newState);
    }
  }, [booking,query])
  // listener to update rooms when query changes
  React.useEffect(() => { getRooms(query).then(rs => setRooms(rs)); },[query])

  return (
    <Background>
      <BackButton to={`/book/${start_query}/`} />
      <Container>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
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
        </Stack>
      </Container>
      <Container paddingTop={'0'} paddingBottom={10}>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
          <VStack width='50%' minWidth={'12rem'}>
            <TimeChooser
              marginBottom={'15%'}
              date={selected_date}
              rooms={rooms}
              setBooking={({ room_ids, date }) => setBooking({ room_ids: room_ids, date: date })}
            />
            <Link to={`/rooms/${toUrl(query)}/`}>
              <Button size={'lg'}>
                <Text size={'lg'}>Næste</Text >
              </Button>
            </Link>
            <Outlet /> // TODO: what is nested here?
          </VStack>
        </Stack>
      </Container>
    </Background >
  )
}

export default BookingTime;