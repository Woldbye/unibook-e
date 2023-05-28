import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';
import BackButton from '../components/BackButton';
import { toUrl, fromUrl, getRooms } from "../api/roomquery.js";

const BookingTime = () => {
  let params = useParams();
  const navigate = useNavigate();
  // today's date, but without the current clock
  const today = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
  const start_query = params.query ?? ''; // start query in url form
  const [query, setQuery] = React.useState(fromUrl(start_query));
  const [rooms, setRooms] = React.useState([]);
  const [selected_date, setSelectedDate] = React.useState(today); // selected date is today, initially
  const duration = ('duration' in query && query['duration'] !== undefined)
    ? query['duration'] : 0;
  
  // { roomid, date } obj
  const [booking, setBooking] = React.useState();

  // listener to update selected timeslot in query when picked in TimeChooser
  React.useEffect(() => {
    if(booking !== undefined && "date" in booking) {
      const { room_ids, date } = booking;
      const newState = query; // copy query
      newState['id'] = room_ids;
      newState['date'] = date;
      setQuery(newState);
    }
  },[booking,query,selected_date])
  
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
            duration={duration}
            selected_date={selected_date}
          />
        </Stack>
      </Container>
      <Container paddingTop={'0'} paddingBottom={5}>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
          <VStack width='100%' minWidth={'12rem'}>
            <TimeChooser
              key={`${selected_date}-${query}-chooser`}
              marginBottom={'5%'}
              date={selected_date}
              rooms={rooms}
              setBooking={({ room_ids, date }) => setBooking({ room_ids: room_ids, date: date })}
            />
            <Button
              size={'lg'}
              isDisabled={!(query !== undefined && "id" in query && query["id"].length > 0 && "date" in query)}
              onClick={() => navigate(`/rooms/${toUrl(query)}/`)}
            >
              <Text size={'lg'}>Næste</Text >
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Background >
  )
}
export default BookingTime;