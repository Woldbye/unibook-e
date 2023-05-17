import * as React from 'react';
import {
  Container,
  List,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Room from '../components/Room';
import { getRooms } from '../api/roomquery.js';

// Example that fetches all rooms in building 1
// setRooms is the method that filters the rooms
const Rooms = () => {
  let params = useParams();
  const [rooms,setRooms] = React.useState([]);
  
  React.useEffect(() => {
    getRooms(params.query).then(rooms => setRooms(rooms));
  },[params]);

  return (
    <Container>
      <List spacing={'1rem'}>
        {rooms.map(room => <Room json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;