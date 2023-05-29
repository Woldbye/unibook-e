import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
  FormLabel,
  FormControl
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

const time_start = 2.0; // initially selected meeting length
const person_max = Room.Size.XLL; // 128 max number of people in a room
const time_max = 8.0; // max meeting duiration

const Booking = () => {
  let params = useParams(); //get url parameters upon page load in case user is using the back button
  const start_q = fromUrl(params.query ?? '');
  
  if(!("type" in start_q) || !Array.isArray(start_q.type)) { start_q.type = []; } 
  if(!("ressources" in start_q) || !Array.isArray(start_q.ressources)) { start_q.ressources = []; } // Keep ressources as arrays of strings

  var tp =  start_q.type.reduce((acc,t) => {
    const key = Object.keys(Room.Type).find(tpkey => Room.Type[tpkey] === t)
    if (key !== undefined)
      acc[key] = t
    return acc;
  },{});
  if(Object.keys(tp).length === 0)
    tp = { ...Room.Type }; // if no types are selected, select all
  
  const [type,setType] = React.useState(tp)
  const [ressources, setRessources] = React.useState(start_q.ressources);
  const [size,setSize] = React.useState(start_q.size ?? `${Room.Size.XS}`);
  const [duration,setDuration] = React.useState(start_q.duration ?? `${time_start}`);
  const [query,setQuery] = React.useState({type,size,duration,ressources});
  
  const onPersonChange = (val) => { //get rooms of selected size or greater
    setSize( `${Object.values(Room.Size).find(sz => sz >= val)}` );
  };

  const onTimeChange = (val) => { setDuration( `${val}` ) }
  
  const onResChange = (res) => { // if ressource is already selected, remove it, otherwise add it
    var newRessources = ressources;
    if(newRessources.includes(res)) {
      newRessources = newRessources.filter(r => r !== res);
    } else {
      newRessources.push(res);
    }
    setRessources(newRessources);
    // Can't figure out why but this is needed to update the query state variable, even though below useEffect listens on type
    setQuery({ size: query.size,duration: query.duration,type: query.type,ressources: newRessources })
  }

  const onTypeChange = (typeKey) => { //if type is already selected, remove it, otherwise add it
    var newType = query.type;

    if(typeKey in newType) {
      delete newType[typeKey];
    } else {
      newType[typeKey] = Room.Type[typeKey];
    }
    
    setType(newType);
    // Can't figure out why but this is needed to update the query state variable, even though below useEffect listens on type
    setQuery({ size: query.size,duration: query.duration, type: newType, ressources: query.ressources })
  }
  
  React.useEffect(() => {  //listener to update query when state variables change
    setQuery({
      size: size,
      duration: duration,
      type: type,
      ressources: ressources,
    });

  },[size,duration,type,ressources]);
  
  return (
    <Background height='auto'>
      <Container>
        <VStack paddingBottom='2rem'>
          <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg de ting der passer til dit lokale</Text>
          <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
            <FormControl>
            <FormLabel marginTop={'4%'} textAlign={'center'} fontSize={20}>Vælg antal personer</FormLabel>
            <GoggleInput step_per_click={1.0} type_name={'Personer'} start={parseInt(size)} max={person_max} min={8}
              onChange={onPersonChange} />
            <FormLabel marginTop={'4%'} textAlign={'center'} fontSize={20} paddingTop={'15px'}>Vælg varighed</FormLabel>
            <GoggleInput step_per_click={1.0} type_name={'Timer'} start={parseFloat(duration)} max={time_max} min={1.0}
              onChange={onTimeChange} />
            </FormControl>
          </VStack>
          <LokaleTyper startTypes={tp} onChange={(x) => onTypeChange(x) } />
          <Ressourcer startRessources={start_q.ressources} onChange={(x) => onResChange(x)}></Ressourcer>
          <Link to={`/book/date/${toUrl(query)}/` }>
            <Button size={'lg'}>
              <Text size={'lg'} >Næste</Text >
            </Button>
          </Link>
        </VStack>
      </Container>
    </Background>
  )
}


export default Booking;