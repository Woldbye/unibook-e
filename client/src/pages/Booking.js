import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import Background from '../components/Background';
import Color from '../Colors';
import GoggleInput from '../components/GoggleInput';
import { Link } from 'react-router-dom';

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
          <Container padding={"3rem 0 0 0"} centerContent="true">
            <Background width="60vw" height="40vh" backgroundColor={Color.BLUE}>
              <VStack>
                <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Lokale typer</Text>
              </VStack>
            </Background>
          </Container>
          <Container padding={"2rem 0 3rem 0"} centerContent="true">
            <Background width="60vw" height="40vh" backgroundColor={Color.BLUE}>
              <VStack>
                <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Ressourcer</Text>
              </VStack>
            </Background>
          </Container>
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