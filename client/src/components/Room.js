import {
  Text,
  VStack,
  Container,
  HStack,
  Button,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Background from "./Background";
import React from "react";
import Color from "../Colors";
import Address from "./Address";

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
    //! TO:DO Set up display of rooms as grid
    return (
      <Container padding={"3rem 0 0 0"}>
        <Background width="100%" height="auto" backgroundColor={Color.BLUE}>
         <Text color={Color.CREME} fontSize={"xl"} padding={"30px 40px 0px 40px"}>
            {this.room_json["type"]} {this.room_json["id"]}
         </Text>
         <Address json={this.room_json["address"]} />
          <VStack padding={"1rem"} spacing={'24px'}>
            <Flex spacing={"2rem"} display={"Flex"} flexWrap={"wrap"} justify={"center"}>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} m={'2'} h={8}>
                Max people for this room is {this.room_json["size"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                Building {this.room_json["building_nr"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                Floor {this.room_json["floor"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                Screen: {this.room_json["hasScreen"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                Projector: {this.room_json["hasProjector"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                Outlets: {this.room_json["hasOutlets"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                TableDesks: {this.room_json["hasTableDesks"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                AC: {this.room_json["hasAC"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                WhiteBoard: {this.room_json["hasWhiteBoard"]}
              </Box>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                BlackBoard: {this.room_json["hasBlackBoard"]}
              </Box>
            </Flex>
          </VStack>
          <VStack padding={'0'}>
            <Button  marginLeft={'auto'} marginRight={'1rem'} marginBottom={'1rem'}>Book this room</Button>
          </VStack>
        </Background>
      </Container>
    );
  }
}

export default Room;
