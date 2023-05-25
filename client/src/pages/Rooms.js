import * as React from 'react';
import {
  Container,
  Center,
  Heading,
  List,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Color from '../Colors';
import Room from '../components/Room';
import { getRooms, queryToString } from '../api/roomquery.js';
import BackButton from '../components/BackButton';

const Rooms = () => {
  let params = useParams();
  if(!params.query) { params.query = ''; } // If no query is given, return all rooms
  const [rooms,setRooms] = React.useState([]);
  const [header,setHeader] = React.useState('');

  React.useEffect(() => {
    getRooms(params.query).then(
      rooms => setRooms(rooms)
    );
    setHeader(
      <Heading as='h2' color={Color.BLUE} size={"l"} padding={"30px 40px 0px 40px"} textAlign={'center'}>
      {queryToString(params.query)}
      </Heading>
    );
  },[params.query]);
  
  return (
    <Container>
      <BackButton to={`/book/date/${params.query}/`} /> 
      {header}
      <List spacing={'1rem'}>
        {rooms.map(room => <Room key={room['id']} json={room}/>)}
      </List>
    </Container>
  )
}
export default Rooms;