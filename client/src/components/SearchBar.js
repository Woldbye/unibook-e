import * as React from 'react'
import {
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import Color from '../Colors';
import {
  Search2Icon,
} from '@chakra-ui/icons';

const SearchBar = (props) => {
  var { onChange, marginTop } = props; // on enter keypress callback
  onChange = onChange ?? ((x) => { }); // default to empty function 
  
  const [value, setValue] = React.useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <InputGroup size='md' marginTop={marginTop} color={Color.CREME} backgroundColor={Color.BLUE}>
      <InputLeftElement width='2.5rem'><Search2Icon/></InputLeftElement>
      <Input
        value={value}
        onChange={handleChange}
        pr='4.5rem'
        color={Color.CREME}
        placeholder='Søg efter navn på lokale'
      />
    </InputGroup>
  )
}

export default SearchBar;