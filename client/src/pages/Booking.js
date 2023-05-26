import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Color from '../Colors';
import GoggleInput from '../components/GoggleInput';
import { Link } from 'react-router-dom';
import LokaleTyper from '../components/LokaleTyper';
import Ressourcer from '../components/Ressourcer';
import Background from '../components/Background';
import { useParams } from 'react-router-dom';

const Room = require('../api/room.js');
const { toUrl,fromUrl } = require('../api/roomquery.js');

const time_start = 0.5;

const Booking = () => {
  let params = useParams();
  const start_q = fromUrl(params.query ?? '');

  if (!start_q.type) { start_q.type = []; }
  const tp =  start_q.type.reduce((acc,t) => {
    const key = Object.keys(Room.Type).find(tpkey => Room.Type[tpkey] === t)
    if (key != undefined)
      acc[key] = t
    return acc;
  },{});
  
  const [type,setType] = React.useState(tp ?? {})
  const [size,setSize] = React.useState(start_q.size ?? `${Room.Size.XS}`);
  const [duration,setDuration] = React.useState(start_q.duration ?? `${time_start}`);

  const [query,setQuery] = React.useState({
    size: size,
    duration: duration,
    type: type,
  });

  const onPersonChange = (val) => {
    setSize( `${Object.values(Room.Size).find(sz => sz >= val)}` );
  };

  const onTimeChange = (val) => { setDuration( `${val}` ) }

  const onTypeChange = (tp) => {
    const newState = type;
    if(Object.keys(type).includes(tp)) {
      delete newState[tp];
    } else {
      newState[tp] = Room.Type[tp];
    }
    setType(newState);
    setQuery({...query, type: newState})
  }

  React.useEffect(() => {
    setQuery({
      size: size,
      duration: duration,
      type: type,
    });
  },[size,duration,type]);
  
  return (
    <Background >
      <Container>
        <VStack paddingBottom='2rem'>
          <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg lokale krav</Text>
          <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
            <GoggleInput step_per_click={1} type_name={'Personer'} start={parseInt(size)} max={128} min={1}
              onChange={onPersonChange} />
            <GoggleInput step_per_click={time_start} type_name={'Timer'} start={parseFloat(duration)} max={14.0} min={0.5}
              onChange={onTimeChange} />
          </VStack>
          <LokaleTyper startTypes={type} onChange={onTypeChange} />
          <Ressourcer></Ressourcer>
          <Link to={`/book/date/${toUrl(query)}/` }>
            <Button size={'lg'}>
              <Text size={'lg'}>Næste</Text >
            </Button>
          </Link>
        </VStack>
      </Container>
    </Background>
  )
}


export default Booking;