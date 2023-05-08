import { Text,VStack,Container} from '@chakra-ui/react';
import Background from './Background';
import React from 'react';
import Color from '../Colors';

/** 
 * @brief Generates a Room component
 */
class Room extends React.Component {
  room_json;

  constructor(props) {
    super(props);
    const { json } = props;
    this.room_json = json;
  }

  render() {
    // TO:DO Set up display of rooms as grid
    return (
      <Background width="80%" height="60%" backgroundColor={Color.BLUE}>
        <Container><Text>Lokale {this.room_json["id"]}</Text></Container>
        <VStack>
          <Text>building_nr: {this.room_json["building_nr"]}</Text>
          <Text>floor: {this.room_json["floor"]}</Text>
          <Text>address: {this.room_json["address"]}</Text>
          <Text>size: {this.room_json["size"]}</Text>
          <Text>hasScreen: {this.room_json["hasScreen"]}</Text>
          <Text>hasProjector: {this.room_json["hasProjector"]}</Text>
          <Text>hasOutlets: {this.room_json["hasOutlets"]}</Text>
          <Text>hasTableDesks: {this.room_json["hasTableDesks"]}</Text>
          <Text>hasAC: {this.room_json["hasAC"]}</Text>
          <Text>hasWhiteBoard: {this.room_json["hasWhiteBoard"]}</Text>
          <Text>hasBlackBoard: {this.room_json["hasBlackboard"]}</Text>
        </VStack>
      </Background>
    )
  }
}

export default Room;