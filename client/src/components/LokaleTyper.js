import * as React from 'react';
import {
  Container,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react';
import ToggleButton from './ToggleButton';
import Background from '../components/Background';
import Color from '../Colors';

//When wanting to pick a type of room, it will show this component. Which works together with the ToggleButton.


class LokaleTyper extends React.Component {
  onChange;
  startTypes;

  constructor(props) {
    super(props);
    const { onChange,startTypes } = props;
    this.startTypes = startTypes ?? {};
    this.onChange = onChange;
  }
  
  render() {
    return (
      <>
        <Container padding={"2rem 0 0 0"} centerContent="true">
          <Background width="60vw" height="auto" backgroundColor={Color.BLUE}>
            <VStack>
              <Text color={Color.CREME} fontSize={'xl'} padding={'20px 40px 0px 40px'}>{'Lokalet skal være en af typerne'}</Text>
            </VStack>
            <VStack padding={'0 0 1rem 0'}>
              <Flex spacing={'2rem'} display={'Flex'} flexWrap={'wrap'} justify={'center'}>
                <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'120px'}
                  startActive={"Meeting" in this.startTypes}
                  onClick={() => this.onChange("Meeting")}
                  children={"Mødelokale"} />
                <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'120px'}
                  startActive={"Skybox" in this.startTypes}
                  onClick={() => this.onChange("Skybox")}
                  children={"Skybox"} />
                <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'120px'}
                  startActive={"Auditorium" in this.startTypes}
                  onClick={() => this.onChange("Auditorium")}
                  children={"Auditorium"} />
                <ToggleButton
                  className={'chakra-button'}
                  margin={'10px'}
                  width={'120px'}
                  startActive={"Classroom" in this.startTypes}
                  onClick={() => this.onChange("Classroom")}
                  children={"Klasselokale"} />
              </Flex>
            </VStack>
          </Background>
        </Container>
      </>
    )
  }
};
  
  export default LokaleTyper;