import {
  Text,
  VStack,
  Container,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import Background from "./Background";
import React from "react";
import Color from "../Colors";
import Address from "./Address";
import { capitalize } from "../util";

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
    const { resources } = this.room_json 

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
              { 
                // Show all resources that are available for this room
                Object
                  .keys(resources)
                  .filter(key => resources[key] === '1')
                  .map(key => {
                    return (
                      <Box key={`${this.room_json["id"]}-${key}`} backgroundColor={Color.LIGHT_BROWN} px={4} h={8} m={'2'}>
                      {`${capitalize(key.replace('_', ' '))}`}
                      </Box>
                    )
                  })
              }
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
