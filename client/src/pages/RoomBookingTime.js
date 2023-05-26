import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Heading,
  VStack,
  Button
} from '@chakra-ui/react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Background from '../components/Background';
import Calendar from '../components/Calendar';
import TimeChooser from '../components/TimeChooser';
import BackButton from '../components/BackButton';
import { toUrl, fromUrl, getRooms } from "../api/roomquery.js";
import GoggleInput from '../components/GoggleInput';
const RoomBookingTime = () => {
  let params = useParams();
  const today = new Date();
  const start_query = params.query ?? ''; // start query in url form
  const [query, setQuery] = React.useState(fromUrl(start_query));
  const [rooms, setRooms] = React.useState([]);
  const [selected_date, setSelectedDate] = React.useState(today);

  // { roomid, date } obj
  const [booking,setBooking] = React.useState();
  const [duration,setDuration] = React.useState(2.0);
  const onDurationChange = (dur) => setDuration(`${dur}`) 

  React.useEffect(() => {
    var newState = query;
    if(booking !== undefined && "room_ids" in booking && "date" in booking) {
      const { room_ids, date } = booking;
      newState['id'] = room_ids;
      newState['date'] = date;
    }
    newState['duration'] = duration;
    setQuery(newState);
  }, [booking,query,duration])
  React.useEffect(() => { getRooms(query).then(rs => setRooms(rs)); },[query])

  return (
    <Background>
      <BackButton to={`/book/${start_query}/`} />
      <Container>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
          <Heading as='h2'>Booking for Room INSERT RID</Heading>
          <GoggleInput
            step_per_click={1.0}
            type_name={'Timer'}
            start={parseFloat(duration)}
            max={8.0}
            min={1.0}
            onChange={onDurationChange} />
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
            <Outlet />
          </VStack>
        </Stack>
      </Container>
    </Background >
  )
}

export default RoomBookingTime;