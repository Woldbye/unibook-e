import * as React from 'react';
import {
  Container,
  List,
} from '@chakra-ui/react';
import Room from '../components/Room';
import SearchBar from '../components/SearchBar';
import Background from '../components/Background';
import { getRooms } from '../api/roomquery.js';

const BookingRoom = () => {
  const [rooms,setRooms] = React.useState([]);
  const [search,setSearch] = React.useState('');
  
  // Laggy atm as it's updating too often
  React.useEffect(() => {
    setInterval(() => {
      getRooms('').then(
        r => setRooms(
          (search === '') ? r : r.filter(r => {
            // Search the json of the room for matches to all the words in the search bar
            // If all words has a match return true
            const json = JSON.stringify(r)
            return search
              .split(' ')
              .filter(word => word !== ' ' && word !== '')
              .every(word => json.includes(word))
          })
        )
      );
    }, 800);
  }, [search]) // Add depdency on search to update when search changes

  return (
    <Background>
      <Container>
        <SearchBar marginTop={'5'} onChange={setSearch}/>
        <List spacing={'1rem'}>
        {rooms.map(room => <Room key={room['id']} json={room}/>)}
        </List>
      </Container>
    </Background>
  )
}

export default BookingRoom;