import { Container, Grid,GridItem,Menu,MenuButton,MenuList,MenuItem,Button, Text } from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';
import Color from '../Colors';
import React from 'react';

class Calendar extends React.Component {
month = "januar"
  constructor(props) {
    super(props);
    const {} = props;
    this.state = { value: 1, value2: 2,value3:3,value4:4,value0:31}
  }
  changeMonth= (month) => {
  if(month==="januar"||"august"){
    this.setState({value:1,value2:2,value3:3,value4:4,value0:31})
  }   
  if(month==="febuar"){
    this.setState({value:29,value2:30,value3:31,value4: 1,value0:28})
  }  
  if(month==="marts"){
    month ="marts";
    this.setState({value:1,value2:2,value3:3,value4: 4,value0:28})
  }  
  if(month==="april"||month==="juni"||month==="september"||month==="november"){
    this.setState({value:31,value2:1,value3:2,value4: 3,value0:30})
  }
  if(month==="maj"||month==="juli"||month==="october"||month==="december"){
    this.setState({value:1,value2:2,value3:3,value4: 4,value0:30})
  }         

  }

  render(){
    return(
      <Container  h='35vh'w='20vw'textAlign={'center'}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            måned
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => this.changeMonth("januar")}>Januar</MenuItem>
            <MenuItem onClick={() => this.changeMonth("febuar")}>februar</MenuItem>
            <MenuItem onClick={() => this.changeMonth("marts")}>Marts</MenuItem>
            <MenuItem onClick={() => this.changeMonth("april")}>April</MenuItem>
            <MenuItem onClick={() => this.changeMonth("maj")}>Maj</MenuItem>
            <MenuItem onClick={() => this.changeMonth("juni")}>Juni</MenuItem>
            <MenuItem onClick={() => this.changeMonth("juli")}>Juli</MenuItem>
            <MenuItem onClick={() => this.changeMonth("august")}>August</MenuItem>
            <MenuItem onClick={() => this.changeMonth("september")}>September</MenuItem>
            <MenuItem onClick={() => this.changeMonth("october")}>October</MenuItem>
            <MenuItem onClick={() => this.changeMonth("november")}>November</MenuItem>
            <MenuItem onClick={() => this.changeMonth("december")}>December</MenuItem>

          </MenuList>
        </Menu>
        <text> {this.month+" "+"2023"}</text>    
        <Grid
        h = '90%'
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(7, 1fr)'
        gap={0}
        color ='black'
        textAlign={'center'}  
        fontSize={'20'}
      >
        <GridItem bg= {Color.BLUE}  border='1px solid grey'color ='white' >
          man
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          tir
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          ons
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          tor
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          fre
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          lør
        </GridItem>
        <GridItem bg= {Color.BLUE} border='1px solid grey'color ='white'>
          søn
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value0-3}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value0-2}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value0-1}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value0}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value2}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value3}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+1}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'>
        <Text>{this.state.value4+2}</Text>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+3}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+4}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+5}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+6}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+7}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+8}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+9}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+10}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+11}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+12}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+13}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+14}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+15}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+16}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+17}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+18}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+19}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+20}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+21}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+22}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+23}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+24}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+25}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+26}</Text>
          </button>
        </GridItem>
        <GridItem bg = {Color.LIGHT_BROWN}border='1px solid grey'> 
          <button>
            <Text>{this.state.value4+27}</Text>
          </button>
        </GridItem>
      </Grid>
    </Container>  
    ) 
  }

}
export default Calendar;