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
  const update_delay = 1000; // in ms
  const [rooms,setRooms] = React.useState([]);
  const [search,setSearch] = React.useState('');

  React.useEffect(() => {
    // Delay search by 1 second to reduce updates
    const timeid = setTimeout(() => {

      getRooms('').then( //get array of all rooms, then filter by search
        r => 
          setRooms(
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
    }, update_delay)
    return () => clearTimeout(timeid);
  }, [search]) // Add dependency on search to update when search changes

  return (
    <Background>
      <Container paddingTop={'20px'}>
        <SearchBar marginTop={'5'} onChange={setSearch}/>
        <List spacing={'1rem'} paddingTop={'20px'}>
        {rooms.map(room => <Room key={room['id']} json={room}/>)}
        </List>
      </Container>
    </Background>
  )
}

export default BookingRoom;