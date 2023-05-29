import * as React from 'react';
import {
  Container,
  Heading,
  List,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import Color from '../Colors';
import Room from '../components/Room';
import { getRooms, queryToStringIfDate } from '../api/roomquery.js';
import BackButton from '../components/BackButton';
import { getType } from '../util.js';
import { fromUrl,toUrl } from '../api/roomquery.js';
import Background from '../components/Background';

const Rooms = () => {
  let params = useParams();
  if(!params.query) { params.query = ''; } // If no query is given, return all rooms
  const navigate = useNavigate();
  const [rooms,setRooms] = React.useState([]);
  const [header,setHeader] = React.useState('');   //Header to display query on top of page
  const query = fromUrl(params.query);
  const start_query = { ...query }; // start query in url form
  const date = query['date'];
  delete start_query['date'];
  delete start_query['id'];

  if(getType(date) !== 'date') throw new Error("Received invalid date object from url", date)
  
  React.useEffect(() => {     //Listener to update rooms and query display when query changes

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
    navigate(`/book/confirm/${params.query}&rid=${roomid}/`);
  }

  return (
    <Background>
      <Container>
        <BackButton to={`/book/date/${toUrl(start_query)}/`} /> 
        {header}
        <List spacing={'1rem'}>
          {rooms.map(room => <Room key={room['id']} onClick={() => onRoomSelect(room['id'])} json={room}/>)}
        </List>
      </Container>
    </Background>
  )
}
export default Rooms;