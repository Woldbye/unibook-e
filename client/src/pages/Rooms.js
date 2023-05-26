import * as React from 'react';
import {
  Container,
  Heading,
  List,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Color from '../Colors';
import Room from '../components/Room';
import { getRooms, queryToStringIfDate } from '../api/roomquery.js';
import BackButton from '../components/BackButton';

const Rooms = () => {
  let params = useParams();
  if(!params.query) { params.query = ''; } // If no query is given, return all rooms
  const [rooms,setRooms] = React.useState([]);
  const [header,setHeader] = React.useState('');// header to display query on top of page

  React.useEffect(() => { // Listener to update rooms and query display when query changes
    getRooms(params.query).then(
      rooms => setRooms(rooms)
    );
    setHeader( 
      <Heading as='h2' color={Color.BLUE} size={"l"} padding={"30px 40px 0px 40px"} textAlign={'center'}>
      {queryToStringIfDate(params.query)}
      </Heading>
    );
  },[params.query]);
  
  return (
    <Container>
      <BackButton to={`/book/date/${params.query}/`} /> 
      {header} 
      <List spacing={'1rem'}> //List of rooms matching search query
        {rooms.map(room => <Room key={room['id']} json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;