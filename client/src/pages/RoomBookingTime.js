import * as React from 'react';
import {
  Container,
  Stack,
  Text,
  Heading,
  FormLabel,
  FormControl,
  VStack,
  Button,
  Center
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
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
  
  const navigate = useNavigate();
  const [query,setQuery] = React.useState(fromUrl(start_query));
  const [rooms, setRooms] = React.useState([]);
  const [selected_date, setSelectedDate] = React.useState(today);
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
  },[booking,query,duration])
  
  React.useEffect(() => { getRooms(query).then(rs => setRooms(rs)); },[query])

  return (
    <Background>
      <BackButton to={`/rooms`} />
      <Container>
        <Stack alignItems={'center'} spacing={'0.5rem'} minWidth={'12rem'}>
          <Heading as='h2' size='lg'>{`Tider for ${query['type']} ${query['id'][0]}`}</Heading>
          <FormControl>
            <FormLabel marginTop={'4%'} textAlign={'center'} fontSize={20}>Vælg varighed</FormLabel>
            <Center>
            <GoggleInput
              width={'40%'}
              step_per_click={1.0}
              type_name={'Timer'}
              start={parseFloat(duration)}
              max={8.0}
              min={1.0}
              onChange={onDurationChange}
              />
            </Center>
            <FormLabel marginTop={'5%'} textAlign={'center'} fontSize={20}>Vælg dato</FormLabel>
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
          </FormControl>
        </Stack>
      </Container>
      <Container paddingTop={'0'} paddingBottom={'10'}>
        <Stack alignItems={'center'} spacing={'2rem'} minWidth={'12rem'}>
          <VStack width='50%' minWidth={'12rem'}>
            <TimeChooser
              marginBottom={'15%'}
              date={selected_date}
              rooms={rooms}
              setBooking={({ room_ids, date }) => setBooking({ room_ids: room_ids, date: date })}
            />
            <Button size={'lg'} onClick={() => {
              navigate(`/book/confirm/${toUrl(query)}&rid=${query['id']}&from_date=1/`)
            }}>
                <Text size={'lg'}>Næste</Text >
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Background >
  )
}

export default RoomBookingTime;