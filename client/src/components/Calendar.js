import { Container, Grid,GridItem,Select, Center } from '@chakra-ui/react';
import * as React from 'react';
import ToggleButton from './ToggleButton';
import Color from '../Colors';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { capitalize } from '../util.js';
import { Formik } from 'formik';
import { } from '../date.js'
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

/**
 * 
 * @param {getFree} props A function that returns the free rooms for a given date
 * @param {onClick} props A function that is called when a date is clicked
 * @returns 
 */
const Calendar = (props) => {
  const onDateClick = props.onClick;
  const rooms = props.rooms;
  const today = new Date();
  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());

  // prv is the overflowing components from previous month
  const [prv, setPrv] = React.useState([]);
  
  // cur is the components from current month
  const [cur, setCur] = React.useState([]);

  // nxt is the overflowing components from next month
  const [nxt, setNxt] = React.useState([]);
  
  React.useEffect(() => {
    const createToggleButton = (key,y,m,d,disable) => {
      // month zero indexed so we +1
      const date_id = (new Date(y,m,d).toISOString()).split('T')[0];

      // All free rooms for the given date
      const free_rooms = rooms.filter(r => {
        const available = r['timeslots']['free'].find(dkey => dkey.startsWith(date_id))
        return available !== undefined
      })
      var cname = "date-button";
      if(y === today.getFullYear() && m === today.getMonth() && d === today.getDate()) {
        cname += '-today';
      }
      cname += (free_rooms.length > 0) ? ' available' : ' unavailable';

      return (
        <ToggleButton
          key={key}
          isDisabled={disable}
          borderRadius={'0'}
          border={'1px solid grey'}
          height={'50px'}
          width={'50px'}
          onClick={(isOn) => { if(isOn) { onDateClick(new Date(y,m,d)) } }}
          children={d}
          className={cname}>
        </ToggleButton>
      )
    }
        
    setPrv(
      new Array(new Date(year,month,1).getDay() === 0 ? 6 : new Date(year,month,1).getDay() - 1)
        .fill(new Date(year,month,0))
        .map((d,i) => d.subtractTime(0,0,i))
        .reverse()
        .map(date => {
          return createToggleButton(
            `${date.getDate()}-${date.getFullYear()}-${date.getMonth()}-${rooms.length}-prv`,
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            true
          )
        })
    );
        
    setCur(
      new Array(new Date(year,month + 1,0).getDate())
        .fill(new Date(year,month,1))
        .map((date,i) => date.addTime(0,0,i))
        .map(date => {
          return createToggleButton(
            `${date.toISOString()}-${rooms.length}-cur`,
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            false)
        }
        )
    );
            
    const end_weekday = new Date(year,month + 1,0).getDay();
    setNxt(
      new Array(7 - (end_weekday === 0 ? 7 : end_weekday))
        .fill(new Date(year,month +1,1))
        .map((date,i) => date.addTime(0,0,i))
        .map(date => {
          return createToggleButton(
            `${date.toISOString()}-${rooms.length}-nxt`,
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            true
          )
        })
    );    
  },[rooms, month, year]);
  
  const dayRow = ['Man','Tir','Ons','Tor','Fre','Lør','Søn'].map(day => {
    return (
      <GridItem key={day} width={'50px'} height={'32px'} bg={Color.BLUE} border='1px solid grey' color='white'>
        {day}
      </GridItem>
    )
  });

  const MonthSelector = 
    <Center>
      <Select
        icon={<ChevronDownIcon />}
        iconColor={Color.CREME}
        variant={'outline'}
        color={Color.BLUE}
        textColor={Color.CREME}
        border={'none'}
        size={'lg'}
        fontSize={'1.3rem'}
        width={'100vw'}
        onChange={(e) => {
          const [m,y] = e.target.value.toLowerCase().split(' ');
          setMonth(Object.keys(months).indexOf(m));
          setYear(parseInt(y,10));
        }}
        value={`${capitalize(Object.keys(months)[month])} ${year}`}
      >
        <option hidden disabled>{`${capitalize(Object.keys(months)[month])} ${year}`}</option>
        {
          new Array(12).fill({}).map((_,i) => {
            const date = today.addTime(0,i);
              return (
                <option
                  style={{ color: Color.BLACK }}
                  key={`${i}-${date.getMonth()}-${date.getFullYear()}`}
                >
                {`${capitalize(Object.keys(months)[date.getMonth()])} ${date.getFullYear()}`}
                </option>
              )
          })
        }
      </Select>
    </Center>
  
  return (
    <Container textAlign={'center'} paddingBottom={'65%'}>
      <Grid
        marginLeft={'15%'}
        templateRows='repeat(7, 1fr)'
        templateColumns='repeat(7, 1fr)'
        gap={0}
        color ='black'
        textAlign={'center'}  
        fontSize={'20'}
        width={'50px'}
        height={'32px'}
      >
        <GridItem colSpan={'7'} bg={Color.BLUE} children={MonthSelector}/>
        {dayRow}
        {prv}
        {cur}
        {nxt}
      </Grid>
    </Container>
  )
}

export default Calendar;