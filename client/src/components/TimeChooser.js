import { Text,IconButton, HStack, Flex,Center } from '@chakra-ui/react';
import {ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';
import Color from '../Colors';
import { filterByDate } from '../api/roomquery';
import { } from '../util.js'
import { parseISOString } from '../date';

/**
 * @param {rooms} props An array of Room objects 
 * @param {date} props A Date object - the selected date to choose times from
 * @param {marginBottom} props marginBottom
 */
const TimeChooser = (props) => {
  const marginBottom = props.marginBottom ?? '0';
  const setBooking = props.setBooking
 
  const [index,setIndex] = React.useState(0); // active room index
  const [bookings,setBookings] = React.useState([]); // bookings for the day as {date: Date, room_ids: int[]}
  const [times,setTimes] = React.useState([]); // times for the day
  
  // Extract the up to three shown values whenever index or booking changes
  React.useEffect(() => {
    setTimes(bookings.sliceMid(index,1))
  }, [bookings,index])

  React.useEffect(() => {
    let byDate = {}
    const date = props.date ?? new Date(new Date().getFullYear(),new Date().getMonth(),0).toISOString();
    filterByDate(props.rooms ?? [],parseISOString(date))
      .reduce((acc,room) => {
        const { id,timeslots } = room;
        return acc.concat(
          timeslots['free']
            .map(datestr => ({ date: parseISOString(datestr),room_id: id }))
            .filter(slot => {
              return (slot['date'].getDate() === date.getDate()
                && slot['date'].getFullYear() === date.getFullYear()
                && slot['date'].getMonth() === date.getMonth())
            })
        )
      },[])
      .sort((a,b) => a['date'] - b['date']) // sort in ascending order by date
      .map(({ date,room_id }) => ({ date: date.toISOString(), room_id }))
      .forEach(({ date,room_id }) => {      // group by date
        if(byDate[date] === undefined) byDate[date] = [room_id];
        else byDate[date].push(room_id);
      })
      
    // Transform byDate into bookings by mapping to { date: Date, room_ids: int[] } format
    setBookings(
      Object
        .keys(byDate)
        .map(key => ({ date: key,room_ids: byDate[key] }))
    )
      
  },[props.rooms,props.date])
  
  // Set index to first time when date changes
  React.useEffect(() => { setIndex(0) }, [props.date])
  
  // Set index to 0 when bookings change
  React.useEffect(() => {
    if(index > bookings.length - 1 || index <= 0) setIndex(0)
  }, [ index,bookings.length ])

  React.useEffect(() => {
    const timeid = setTimeout(() => {
      if(bookings !== undefined &&
        Array.isArray(bookings) &&
        bookings.length > 0 &&
        'room_ids' in bookings[index] &&
        bookings[index]['room_ids'] !== undefined
      )
      {
        const booking = {
          date: bookings[index]['date'],
          room_ids: bookings[index]['room_ids']
        }
        setBooking(booking)
      }
    },500)
    return () => clearTimeout(timeid)
  },[bookings,index,setBooking,props.date])  
  
  const type_name = "time"

  return (
    <HStack
        hide={-1}
        width={'100%'}
        marginBottom={marginBottom}
        justifyContent={'space-between'}
        height={'50px'}
        backgroundColor={Color.BLUE}
        borderRadius={30}
      >
        <IconButton
          size={'lg'}
          aria-label={'Previous ' + type_name}
          isRound={true}
          icon={<ArrowLeftIcon />}
          onClick={() => {
            if(index > 0) setIndex(index - 1)
          }}
        />
        <Flex
          direction={'row'}
          textAlign={'center'}
          alignItems={'space-around'}
          justifyContent={'space-around'}
          width={'100%'}
        >
        <Center>
        {times.length > 0 ? times.map(entry => {
          const dt = parseISOString(entry['val']['date'])
          const { room_ids } = entry['val'];
          return (
              <Text
                key={`${dt}:${room_ids}:${index}`}
                color={Color.CREME}
                className="highlight"
                background={entry['index'] === index ? Color.DARK_BROWN : Color.BLUE}
                paddingRight={'10%'}
                paddingLeft={'10%'}
                cursor={'pointer'}
                onClick={() => setIndex(entry['index'])}
              >
                {`${(dt.getHours()).toString().padStart(2,0)}:${dt.getMinutes().toString().padStart(2,0)}`}
              </Text>
          )
        }) : <Text color={Color.CREME}>Ingen ledige tider</Text>}
        </Center>
        </Flex>          
      <IconButton
        size={'lg'}
        aria-label={'Next ' + type_name}
        isRound={true}
        icon={<ArrowRightIcon />}
        onClick={() => { if(index < bookings.length - 1) setIndex(index + 1) }}          
      />
      </HStack>
  )
};

export default TimeChooser;