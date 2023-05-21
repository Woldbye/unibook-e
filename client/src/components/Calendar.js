import { Container, Grid,GridItem,Menu,MenuButton,MenuList,MenuItem,Button,Select,Stack, Center } from '@chakra-ui/react';
import * as React from 'react';
import ToggleButton from './ToggleButton';
import Color from '../Colors';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { capitalize } from '../util.js';
import { Formik } from 'formik';

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
  
  const MonthSelector = () => {
    return (
      <Center>
        <Select
          icon={<ChevronDownIcon />}
          iconColor={Color.CREME}
          variant={'outline'}
          colorScheme='orange'
          color={Color.BLUE}
          textColor={Color.CREME}
          border={'none'}
          size={'lg'}
          fontSize={'1.3rem'}
          width={'100vw'}
          onChange={(e) => {
            const [m,y] = e.target.value.toLowerCase().split(' ');
            setMonth(Object.keys(months).indexOf(m));
            setYear(parseInt(y, 10));
          }}
        >
          <option selected hidden disabled>{`${capitalize(Object.keys(months)[month])} ${year}`}</option>
          {
            [
              // Previous 6 months
              ...new Array(6).fill({}).map((_,i) => {
                const m = ((today.getMonth() + 12) - 6 + i) % 12;
                const y = ((today.getMonth() + 12) - 6 + i) % 12 > 5 ? today.getFullYear() - 1 : today.getFullYear();
                return { month: m, year: y }
              }),
              { month: today.getMonth(), year: today.getFullYear() },
              // Next 6 months
              ...new Array(6).fill({}).map((_,i) => {
                const m = (today.getMonth() + i + 1) % 12;
                const y = (today.getMonth() + i + 1) > 11 ? today.getFullYear() + 1 : today.getFullYear();
                return { month: m ,year: y }
              }),
            ]
            .map((my,i) => {
              return (
                <option
                  style={{ color: Color.BLACK }}
                  selected={my['month'] === month && my['year'] === year}
                  key={`${i}-${my['month']}-${my['year']}`}
                >
                {`${capitalize(Object.keys(months)[my['month']])} ${my['year']}`}
                </option>
              )
            })
          }
        </Select>
      </Center>
    )
  }

  const createToggleButton = (key,day,disable) => {
    const cname = (month === today.getMonth() && year === today.getFullYear() && day === today.getDate() ? 'date-button-today' : 'date-button')
    console.log("className", cname)
    return (
      <ToggleButton
        key={key}
        isDisabled={disable}
        borderRadius={'0'}
        border={'1px solid grey'}
        height={'50px'}
        width={'50px'}
        className={cname}>
      {day}
      </ToggleButton>
    )
  }

  return (
    <Container textAlign={'center'} paddingBottom={'300px'}>
      <Grid
        paddingTop={'2%'}
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
        <GridItem colSpan={'7'} bg={Color.BLUE}>
          <MonthSelector/>
        </GridItem>
        {['Man','Tir','Ons','Tor','Fre','Lør','Søn'].map(day => { 
          return (
            <GridItem key={day} width={'50px'} height={'32px'} bg={Color.BLUE} border='1px solid grey'color ='white'>
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