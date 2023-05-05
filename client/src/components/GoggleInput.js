import { Text,IconButton, HStack, VStack, } from '@chakra-ui/react';
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
  value = 0;

  constructor(props, { step_per_click = 1, type_name = "EMPTY", start_value = 0 }) {
    super(props);
    this.step_per_click = step_per_click;
    this.type_name = type_name;
    this.value = start_value;
  }
    
  onClick = (isInc) => {
    this.value = isInc ? this.value + this.step_per_click : Math.max(this.value - this.step_per_click, 0);
  };

  render() {
    return (
      <HStack
        hide={-1}
        height={'50px'}
        backgroundColor={Color.BLUE}
        borderRadius={30}
      >
        <IconButton
          size={'lg'}
          aria-label={'Subtract ' + this.type_name}
          isRound={true}
          icon={<MinusIcon />}
          onClick= {() => this.onClick(false)}
        />,
        <VStack>
          <Text margin={'0px'} color={Color.CREME} align={'bottom'}>{this.value}</Text>,
          <Text margin={'0px'} color={Color.CREME} align={'top'}>{this.type_name}</Text>
        </VStack>
        <IconButton
          size={'lg'}
          aria-label={'Add ' + this.type_name}
          isRound={true}
          icon={<AddIcon />}
          onClick = {() => this.onClick(true)}
        />
      </HStack>
    )
  }
}

export default GoggleInput;