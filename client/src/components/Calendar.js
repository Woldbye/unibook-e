import { Container, Grid,GridItem,Menu,MenuButton,MenuList,MenuItem,Button, Text } from '@chakra-ui/react';
import * as React from 'react';
import ToggleButton from './ToggleButton';
import Color from '../Colors';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { capitalize } from '../util.js';

const months = {
  januar: 31,
  februar: 28,
  marts: 31,
  april: 30,
  maj: 31,
  juni: 30,
  juli: 31,
  august: 31,
  september: 30,
  oktober: 31,
  november: 30,
  december: 31
}

const createToggleButton = (key, val, disable) => {
  return (
    <ToggleButton key={key} isDisabled={disable} borderRadius={'0'} border={'1px solid grey'} height={'50px'} width={'50px'} className={'date-button'}>
      {val}
    </ToggleButton>
  )
}

const Calendar = () => {
  const today = new Date();
  const [month, setMonth] = React.useState([today.getMonth()]);
  const [year, setYear] = React.useState([today.getFullYear()]);

  // prv is the overflowing components from previous month
  const [prv, setPrv] = React.useState([]);
  
  // cur is the components from current month
  const [cur, setCur] = React.useState([]);

  // nxt is the overflowing components from next month
  const [nxt, setNxt] = React.useState([]);
  
  React.useEffect(() => {
    // first and last week day of month
    const start_weekday = new Date(year, month, 0).getDay(); 
    const end_weekday = new Date(year, month, Object.values(months)[month] - 1).getDay();

    const prv_start_day = (month ? Object.values(months)[month - 1] : months['december']) - start_weekday;

    console.log("prv start day", prv_start_day, " start_weekday", start_weekday)
    const prv_days = new Array(start_weekday).fill(prv_start_day).map((d, i) => d+i+1);
    setPrv(prv_days);

    console.log(Object.values(months)[month]);
    const cur_days = new Array(Object.values(months)[month]).fill(0).map((_, i) => i+1);
    setCur(cur_days);
    
    const nxt_days = new Array(6-end_weekday).fill(0).map((_, i) => i+1);
    setNxt(nxt_days);
  }, [month, year]);
  
  return (
    <Container textAlign={'center'} paddingBottom={'260px'}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
        {capitalize(Object.keys(months)[month])}
        </MenuButton>
        <MenuList>
        {Object.keys(months).map((m, i) => <MenuItem key={`${i}-${m}`} onClick={(e) => {setMonth(i)}}>{capitalize(m)}</MenuItem>)}
        </MenuList>
      </Menu>
      <Grid
        marginLeft={'18%'}
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(7, 1fr)'
        gap={0}
        color ='black'
        textAlign={'center'}  
        fontSize={'20'}
        width={'50px'}
        height={'32px'}
      >
        {['man','tir','ons','tor','fre','lør','søn'].map(day => { 
          return (
            <GridItem key={day} width={'50px'} height={'32px'} bg= {Color.BLUE} border='1px solid grey'color ='white'>
            {day}
            </GridItem>
          )
        })}
        {prv.map(d => createToggleButton(`${d}-prv`, d, true))}
        {cur.map(d => createToggleButton(`${d}-cur`, d, false))}
        {nxt.map(d => createToggleButton(`${d}-nxt`, d, true))}
      </Grid>
    </Container>
  )
}

export default Calendar;