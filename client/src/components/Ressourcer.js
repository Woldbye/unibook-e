import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  HStack,
  Text,
  Flex
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';
import ToggleButton from './ToggleButton';
//! TO:DO Hold a state with value of selected room types
//! The value is a single number represented as a bitfield (see Room.Tag)

const Ressourcer = (props) => {
    var { onChange,startRessources } = props;
    onChange = onChange ?? ((x)=>{});
    startRessources = startRessources ?? {};
    return (
      <>
        <Container padding={"2rem 0 2rem 0"} centerContent="true">
            <Background width="60vw" height="auto" backgroundColor={Color.BLUE}>
                <VStack>
                    <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>Ressourcer</Text>
                </VStack>
                <VStack padding={'0 0 1rem 0'}>
                    <Flex spacing={'2rem'} display={'Flex'} flexWrap={'wrap'} justify={'center'}>
                    <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Screen" in startRessources}
                  onClick={() => onChange("Screen")}
                  children={"Skærm"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Projector" in startRessources}
                  onClick={() => onChange("Projector")}
                  children={"projekter"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Outlets" in startRessources}
                  onClick={() => onChange("Outlets")}
                  children={"Outlet"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Table_Desks" in startRessources}
                  onClick={() => onChange("Table_Desks")}
                  children={"Skrivebord"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"AC" in startRessources}
                  onClick={() => onChange("AC")}
                  children={"AC"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Whiteboard" in startRessources}
                  onClick={() => onChange("Whiteboard")}
                  children={"Whiteboard"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={"Blackboard" in startRessources}
                  onClick={() => onChange("Blackboard")}
                  children={"tavle"} />

                
                   </Flex>
                </VStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default Ressourcer;