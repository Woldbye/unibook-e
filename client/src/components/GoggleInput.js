import { Text,IconButton, HStack, Flex } from '@chakra-ui/react';
import { AddIcon,MinusIcon } from '@chakra-ui/icons';
import React from 'react';
import Color from '../Colors';

/**
 * @description Generate an input component that has a button at each side which can be used to
 * increment or decrement 'start_value' by 'step_per_click'. In the middle the component
 * shows the current value annotated by 'type_name'. 
 * @param {*} step_per_click denotes how much the input should change up or down for each click - defaults to 1.
 * @param {*} type_name the shown name in the middle of the component - defaults to empty string
 * @param {*} start_value the starting value of the input - defaults to 0. 
 */
class GoggleInput extends React.Component {
  step_per_click;
  type_name;
  max_value;

  constructor(props) {
    super(props);
    const { step_per_click, type_name, start_value, max_value } = props;
    this.state = { value: start_value ?? 0 }
    this.step_per_click = step_per_click ?? 1;
    this.type_name = type_name;
    this.max_value = max_value ?? Infinity;
  }
    
  changeValueByStep = (isInc) => {
    const new_value = isInc ? Math.min(this.state.value + this.step_per_click, this.max_value) : Math.max(this.state.value - this.step_per_click,0);
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
          onClick= {() => this.changeValueByStep(false)}
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
          onClick = {() => this.changeValueByStep(true)}
        />
      </HStack>
    )
  }
}

export default GoggleInput;