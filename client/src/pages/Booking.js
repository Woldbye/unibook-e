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

class Booking extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: { size: `${Room.Size.XS}` } };
  }

  onNextClick = () => {
    const size = Object.values(Room.Size).find(key => Room.Size[key] >= this.person_val);
    this.setState({query: {size: `${size}`}});
  }
  
  render() {
    const onPersonChange = (val) => {
      const size = Object.values(Room.Size).find(sz => sz >= val);
      this.setState({ query: { size: `${size}` } });
    };

    const onTimeChange = (val) => { console.log("time: ",val); }

    return (
      <Container>
        <VStack paddingBottom='2rem'>
          <Text color={Color.BLACK} fontSize={'3xl'} padding={'30px 0px 10px 0px'}>Vælg lokale krav</Text>
          <VStack width='40%' spacing={'1rem'} minWidth={'12rem'}>
            <GoggleInput step_per_click={1} type_name={'Personer'} start={1} max={128} min={1} onChange={onPersonChange.bind(this)} />
            <GoggleInput step_per_click={0.5} type_name={'Timer'} start={2.0} max={14.0} min={0.5} onChange={onTimeChange.bind(this)} />
          </VStack>
          <LokaleTyper></LokaleTyper>
          <Ressourcer></Ressourcer>
          <Link to={`date/${toUrl(this.state.query)}/` }>
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