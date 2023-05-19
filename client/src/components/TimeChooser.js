import { Text,IconButton, HStack, Flex } from '@chakra-ui/react';
import {ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';
import Color from '../Colors';

/**
 * @description Generate a timer
 * @param {*} max the maximum value of the input - defaults to ∞.
 * @param {*} min the minimum value of the input - defaults to 0.
 */
class TimeChooser extends React.Component {
  
  max =24;
  min=8;

  constructor(props) {
    super(props);
    const {} = props;
    this.state = { value: 8 , value2: 0, secondValue: 7, secondValue2: 3, thirdValue:7,thirdValue2:0}
  }
    
  changeValueByStep = (isInc) => {
    
    if(this.state.value2 === 0){
      const new_value = isInc ? Math.min(this.state.value, this.max) : Math.max( this.state.value-1, this.min);
      if(isInc&&this.state.value!=this.max){
        this.setState({thirdValue: this.state.secondValue,secondValue:this.state.value})}
      if(isInc ===false&&this.state.value!=this.min){this.setState({secondValue:this.state.thirdValue, thirdValue:this.state.thirdValue-1})}
      this.setState({value:new_value});
        const new_value2 = (3); 
      if(isInc&&this.state.value!==this.max){
        this.setState({thirdValue2: this.state.secondValue2,secondValue2:this.state.value2})}
        if(isInc ===false&&this.state.value!==this.min){this.setState({secondValue2:this.state.thirdValue2,thirdValue2:3})}
      this.setState({ value2: new_value2 });
    }
    if(this.state.value2 === 3){
      const new_value = isInc ? Math.min(this.state.value+1, this.max) : Math.max( this.state.value, this.min);
      if(isInc&&this.state.value!==this.max){
        this.setState({thirdValue: this.state.secondValue,secondValue:this.state.value})}
        if(isInc ===false){this.setState({secondValue:this.state.thirdValue})}
      this.setState({value:new_value});
        const new_value2 = ( 0);
      if(isInc&&this.state.value!==this.max){
        this.setState({thirdValue2: this.state.secondValue2,secondValue2:this.state.value2})}
        if(isInc ===false){this.setState({secondValue2:this.state.thirdValue2,thirdValue2:0})}
      this.setState({ value2: new_value2 })
    }
    
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
          icon={<ArrowLeftIcon />}
          onClick= {() => this.changeValueByStep(false)}
        />
          <Flex direction={'row'}textAlign={'center'} alignItems={'space-around'} justifyContent={'space-around'}>
          <Text color={Color.CREME} marginRight={5}>{this.state.thirdValue+":"+this.state.thirdValue2+0}</Text>
          <Text color={Color.CREME}marginRight={5}>{this.state.secondValue+":"+this.state.secondValue2+0}</Text>
          <Text color={Color.CREME}>{this.state.value+":"+this.state.value2+0}</Text>
          </Flex>
        <IconButton
          size={'lg'}
          aria-label={'Add ' + this.type_name}
          isRound={true}
          icon={<ArrowRightIcon />}
          onClick = {() => this.changeValueByStep(true)}
        />
      </HStack>
    )
  }
}

export default TimeChooser;