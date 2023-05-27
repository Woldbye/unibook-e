import { Container, Grid,GridItem,Select, Center } from '@chakra-ui/react';
import * as React from 'react';
import Color from '../Colors';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { capitalize } from '../util.js';
import { } from '../date.js'; //! Don't remove, for the prototype functions
import { filterByDate } from '../api/roomquery';
import { da_months } from '../date.js';
import DateButton from './DateButton';
import { parseISOString } from '../date.js';
/**
 * @param {rooms} props A required property that should contain room objects
 * @param {onClick} props An optional function that is called when a date is clicked
 * @returns 
 */
const Calendar = (props) => {
  const onDateClick = props.onClick;
  const rooms = props.rooms;
  const selected_date = props.selected_date ?? new Date().toISOString(); // default today
  const today = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());

  // prv is the overflowing components from previous month
  const [prv, setPrv] = React.useState([]);
  
  // cur is the components from current month
  const [cur, setCur] = React.useState([]);

  // nxt is the overflowing components from next month
  const [nxt, setNxt] = React.useState([]);
  
  React.useEffect(() => {
    const createDateButton = (key,date,onClick,isDisabled) => {
      const cname = filterByDate(rooms, date).length > 0 ? ' available' : ' unavailable';
      const isOn = parseISOString(selected_date).ymdEquals(date);
      return (
        <DateButton
          key={key}
          isDisabled={isDisabled}
          borderRadius={'0'}
          border={'1px solid grey'}
          height={'100%'}
          isOn={isOn}
          date={date}
          width={'100%'}
          onClick={onClick}
          className={cname}>
        </DateButton>
      )
    }
        
    setPrv(
      new Array(new Date(year,month,1).getDay() === 0 ? 6 : new Date(year,month,1).getDay() - 1)
        .fill(new Date(year,month,0))
        .map((d,i) => d.subtractTime(0,0,i))
        .reverse()
        .map(date => {
          return createDateButton(
            `${date.toISOString()}-${rooms.length}-${selected_date}-prv`,
            date,
            () => {
              setYear(date.getFullYear());
              setMonth(date.getMonth());
              onDateClick(date);
            },
            true
          )
        })
    );
        
    setCur(
      new Array(new Date(year,month + 1,0).getDate())
        .fill(new Date(year,month,1))
        .map((date,i) => date.addTime(0,0,i))
        .map(date => {
          return createDateButton(
            `${date.toISOString()}-${rooms.length}-${selected_date}-cur`,
            date,
            () => onDateClick(date),
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
          return createDateButton(
            `${date.toISOString()}-${rooms.length}-${selected_date}-nxt`,
            date,
            () => {
              setYear(date.getFullYear());
              setMonth(date.getMonth());
              onDateClick(date);
            },
            true,
          )
        })
    );    
  },[rooms, selected_date, month, year, onDateClick]);
  
  const dayRow = ['Man','Tir','Ons','Tor','Fre','Lør','Søn'].map(day => {
    return (
      <GridItem key={day} width={'100%'} height={'100%'} bg={Color.BLUE} border='1px solid grey' color='white'>
        {day}
      </GridItem>
    )
  });

  const da_monthselector = 
    <Center>
      <Select
        icon={<ChevronDownIcon />}
        iconColor={Color.CREME}
        cursor={'pointer'}
        variant={'outline'}
        color={Color.BLUE}
        textColor={Color.CREME}
        border={'none'}
        size={'lg'}
        fontSize={'1.3rem'}
        onChange={(e) => {
          const [m,y] = e.target.value.toLowerCase().split(' ');
          setMonth(Object.keys(da_months).indexOf(m));
          setYear(parseInt(y,10));
        }}
        value={`${capitalize(Object.keys(da_months)[month])} ${year}`}
      >
        <option hidden disabled>{`${capitalize(Object.keys(da_months)[month])} ${year}`}</option>
        {
          new Array(12).fill({}).map((_,i) => {
            const date = today.addTime(0,i);
              return (
                <option
                  style={{ color: Color.BLACK }}
                  key={`${i}-${date.getMonth()}-${date.getFullYear()}`}
                >
                {`${capitalize(Object.keys(da_months)[date.getMonth()])} ${date.getFullYear()}`}
                </option>
              )
          })
        }
      </Select>
    </Center>
  
  return (
    <Container textAlign="center" padding={'0'} paddingBottom="10%" margin={0}>
      <Grid
        templateRows='repeat(7, 1fr)'
        templateColumns='repeat(7, 1fr)'
        gap={0}
        color ='black'
        textAlign={'center'}  
        fontSize={'20'}
        height={'100%'}
        p={'0'}
        margin={'0'}
      >
        <GridItem colSpan={'7'} bg={Color.BLUE} children={da_monthselector}/>
        {dayRow}
        {prv}
        {cur}
        {nxt}
      </Grid>
    </Container>
  )
}

export default Calendar;