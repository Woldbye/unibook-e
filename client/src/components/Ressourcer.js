import * as React from 'react';
import {
  Container,
  Button,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react';

import Background from '../components/Background';
import Color from '../Colors';
import ToggleButton from '../components/ToggleButton';

//Shows every ressource available to a room
const Ressourcer = (props) => {
    var { onChange,startRessources } = props;
    onChange = onChange ?? ((x)=>{});
    startRessources = startRessources ?? [];
  
    return (
      <>
        <Container padding={"2rem 0 2rem 0"} centerContent="true">
            <Background width="60vw" height="auto" backgroundColor={Color.BLUE}>
                <VStack>
                <Text color={Color.CREME} fontSize={'xl'} padding={'30px 40px 0px 40px'}>{'Lokalet skal havde'}</Text>
                </VStack>
                <VStack padding={'0 0 1rem 0'}>
                  <Flex spacing={'2rem'} display={'Flex'} flexWrap={'wrap'} justify={'center'}>
                  <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Screen")}
                  onClick={() => onChange("Screen")}
                  children={"Skærm"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Projector")}
                  onClick={() => onChange("Projector")}
                  children={"Projektor"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Outlets")}
                  onClick={() => onChange("Outlets")}
                  children={"Outlets"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Table_Desks")}
                  onClick={() => onChange("Table_Desks")}
                  children={"Skrivebord"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("AC")}
                  onClick={() => onChange("AC")}
                  children={"AC"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Whiteboard")}
                  onClick={() => onChange("Whiteboard")}
                  children={"Whiteboard"} />
                   <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'110px'}
                  startActive={startRessources.includes("Blackboard")}
                  onClick={() => onChange("Blackboard")}
                  children={"Tavle"} />
                   </Flex>
                </VStack>
            </Background>
        </Container>
      </>
    )
  };
  
  export default Ressourcer;