import { Text,IconButton, HStack, VStack, Flex } from '@chakra-ui/react';
import { AddIcon,MinusIcon } from '@chakra-ui/icons';
import React from 'react';
import Color from '../Colors';
// https://chakra-ui.com/docs/components/icon-button


/**
 * Generate an input component that can be used to change the value of a variable 
 * @param {*} step_per_click denotes how much the input should change up or down for each click
 * @param {*} type_name the shown name in the middle of the component
 */
class GoggleInput extends React.Component {
  step_per_click = 1;
  type_name = "EMPTY";

  constructor(props) {
    super(props);
    const { step_per_click, type_name, start_value } = props;
    this.step_per_click = step_per_click ?? 1;
    this.state = { value: start_value ?? 0 }
    this.type_name = type_name;
  }
    
  increment = (isInc) => {
    const new_value = isInc ? this.state.value + this.step_per_click : Math.max(this.state.value - this.step_per_click,0);
    this.setState({ value: new_value })
  };

  render() {
    return (
      <HStack
        hide={-1}
        width={'100%'}
        justifyContent={'space-between'}
        height={'50px'}
        backgroundColor={Color.BLUE}
        borderRadius={30}
      >
        <IconButton
          size={'lg'}
          aria-label={'Subtract ' + this.type_name}
          isRound={true}
          icon={<MinusIcon />}
          onClick= {() => this.increment(false)}
        />
        <Flex direction={'column'} textAlign={'center'} alignItems={'space-around'} justifyContent={'space-around'}>
          <Text color={Color.CREME}>{this.state.value}</Text>
          <Text color={Color.CREME}>{this.type_name}</Text>
        </Flex>
        <IconButton
          size={'lg'}
          aria-label={'Add ' + this.type_name}
          isRound={true}
          icon={<AddIcon />}
          onClick = {() => this.increment(true)}
        />
      </HStack>
    )
  }
}

export default GoggleInput;