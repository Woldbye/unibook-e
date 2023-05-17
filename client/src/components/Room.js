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
          <VStack>
            <Text color={Color.CREME} fontSize={"xl"} padding={"30px 40px 0px 40px"}>
              {this.room_json["type"]} {this.room_json["id"]}
            </Text>
            <Address json={this.room_json["address"]} />
          </VStack>
          <VStack padding={"1rem"}>
            <Flex spacing={"2rem"} display={"Flex"} flexWrap={"wrap"} justify={"center"}>
              <Box backgroundColor={Color.LIGHT_BROWN} h={8}>
                Max people for this room: {this.room_json["size"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                Building: {this.room_json["building_nr"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                Floor: {this.room_json["floor"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                Screen: {this.room_json["hasScreen"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                Projector: {this.room_json["hasProjector"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                Outlets: {this.room_json["hasOutlets"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                TableDesks: {this.room_json["hasTableDesks"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                AC: {this.room_json["hasAC"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                WhiteBoard: {this.room_json["hasWhiteBoard"]}
              </Box>
              <Spacer/>
              <Box backgroundColor={Color.LIGHT_BROWN} px={4} h={8}>
                BlackBoard: {this.room_json["hasBlackBoard"]}
              </Box>
            </Flex>
          </VStack>
          <VStack padding={"2rem 0rem 2rem 22rem"}>
            <Button>Book this room</Button>
          </VStack>
        </Background>
      </Container>
    );
  }
}

export default Room;
