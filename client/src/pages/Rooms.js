import * as React from 'react';
import {
  Container,
  List,
} from '@chakra-ui/react';
import Room from '../components/Room';


// Example that fetches all rooms in building 1
const Rooms = () => {
  const [rooms,setRooms] = React.useState([]);
  
  React.useEffect(() => {
    const url = `http://localhost:5000/rooms?`; // URL for overview of all rooms
    fetch(url)
      .then(res => res.json())
      .then(res => setRooms(Array.isArray(res) ? res : [res]))
  },[]);

  return (
    <Container>
      <List>
        {rooms.map(room => <Room json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;