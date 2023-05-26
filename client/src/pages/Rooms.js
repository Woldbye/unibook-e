import * as React from 'react';
import {
  Container,
  Center,
  Heading,
  List,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Color from '../Colors';
import Room from '../components/Room';
import { getRooms, queryToStringIfDate } from '../api/roomquery.js';
import BackButton from '../components/BackButton';
import { getType } from '../util.js';
import { fromUrl } from '../api/roomquery.js';
import { parseISOString } from '../date';

const Rooms = () => {
  let params = useParams();
  if(!params.query) { params.query = ''; } // If no query is given, return all rooms
  const navigate = useNavigate();
  const [rooms,setRooms] = React.useState([]);
  const [header,setHeader] = React.useState('');
  const date = fromUrl(params.query)['date']; 
  if(getType(date) !== 'date') throw new Error("Received invalid date object from url")
  
  React.useEffect(() => {
    getRooms(params.query).then(
      rooms => setRooms(rooms)
    );
    setHeader(
      <Heading as='h2' color={Color.BLUE} size={"l"} padding={"30px 40px 0px 40px"} textAlign={'center'}>
      {queryToStringIfDate(params.query)}
      </Heading>
    );
  },[params.query]);
  
  const onRoomSelect = (roomid) => {
    navigate(`/book/confirm/${roomid}/${date.toISOString()}`);
  }

  return (
    <Container>
      <BackButton to={`/book/date/${params.query}/${date}/`} /> 
      {header}
      <List spacing={'1rem'}>
        {rooms.map(room => <Room key={room['id']} onClick={() => onRoomSelect(room['id'])} json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;