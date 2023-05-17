import * as React from 'react';
import {
  Container,
  List,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Room from '../components/Room';

const { toUrl, fromUrl } = require('../shared/roomquery.js');

// Example that fetches all rooms in building 1
// setRooms is the method that filters the rooms
const Rooms = () => {
  let params = useParams();
  const [rooms,setRooms] = React.useState([]);
  
  React.useEffect(() => {
    const url = `http://localhost:5000/rooms?${params.query}`; // URL for overview of all rooms
    console.log("Rooms url: ", url)
    fetch(url)
      .then(res => res.json())
      .then(res => setRooms(Array.isArray(res) ? res : [res]))
  },[]);

  return (
    <Container>
      <List spacing={'1rem'}>
        {rooms.map(room => <Room json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;