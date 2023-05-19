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

const Room = require('../api/room.js');
const { toUrl } = require('../api/roomquery.js');

const time_start = 0.5;

class Booking extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { size: `${Room.Size.XS}`, duration: `${time_start}`, type: {} };
  }
  
  render() {
    const onPersonChange = (val) => {
      const size = Object.values(Room.Size).find(sz => sz >= val);
      const newState = this.state;
      newState['size'] = `${size}`;
      this.setState( newState );
    };

    const onTimeChange = (val) => {
      const newState = this.state;
      newState['duration'] = `${val}`; // duration in hours
      this.setState( newState )
    }

    const onTypeChange = (tp) => {
      const newState = this.state
      if(Object.keys(newState['type']).includes(tp)) {
        delete newState['type'][tp];
      } else {
        newState['type'][tp] = Room.Type[tp];
      }
      this.setState ( newState )
    }

    return (
      <Container>
        <VStack paddingBottom='2rem'>
          <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg lokale krav</Text>
          <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
            <GoggleInput step_per_click={1} type_name={'Personer'} start={1} max={128} min={1} onChange={onPersonChange.bind(this)} />
            <GoggleInput step_per_click={time_start} type_name={'Timer'} start={2.0} max={14.0} min={0.5} onChange={onTimeChange.bind(this)} />
          </VStack>
          <LokaleTyper onChange={onTypeChange.bind(this)} />
          <Ressourcer></Ressourcer>
          <Link to={`date/${toUrl(this.state)}/` }>
            <Button size={'lg'}>
              <Text size={'lg'}>Næste</Text >
            </Button>
          </Link>
        </VStack>
      </Container>
    )
  }
}

export default Booking;