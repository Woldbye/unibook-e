import * as React from 'react';
import {
  Container,
  List,
} from '@chakra-ui/react';
import Room from '../components/Room';


// Example that fetches all rooms in building 1
const Rooms = async () => {
  const [ rooms_json, setRooms ] = React.useState([])
  const res = await fetch(`http://localhost:5000/rooms?building_nr=1`)
  console.log("Response: ", res.json())
  setRooms(res);
  
  return (
    <Container>
      <List spacing={1}>
        {rooms_json.map(room_json => <Room json={room_json} />)}
      </List>
    </Container>
  )
}
export default Rooms;