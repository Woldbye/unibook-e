import { Text,IconButton, HStack, Flex,Center } from '@chakra-ui/react';
import {ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
import Color from '../Colors';
import { filterByDate } from '../api/roomquery';
import * as Room from '../api/room';
import { } from '../util.js'
import { parseISOString } from '../date';

/**
 * @param {rooms} props An array of Room objects 
 * @param {date} props A Date object - the selected date to choose times from
 * @param {marginBottom} props marginBottom
 */
const TimeChooser = (props) => {
  const rooms = props.rooms ?? []; 
  const marginBottom = props.marginBottom ?? '0';
  const date = props.date ?? new Date();  
  
  let byDate = {}
  filterByDate(rooms,date)
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
    .forEach(({ date,room_id }) => {      // group by date
      if(byDate[date] === undefined) byDate[date] = [room_id];
      else byDate[date].push(room_id);
    })
  
  // Transform byDate into bookings by mapping to { date: Date, room_ids: int[] } format
  const bookings = Object
    .keys(byDate)
    .map(key => ({ date: key,room_ids: byDate[key] }))
    
  const [index,setIndex] = React.useState(0); // active room index
  
  const setBooking = props.setBooking ?? ((dt) => {})
  
  const times = bookings.sliceMid(index,1)

  useEffect(() => {
    const timeid = setTimeout(() => {

      if(index > times.length - 1 || index <= 0) setIndex(0)
      if(times !== undefined &&
        Array.isArray(times) &&
        times.length > 0 &&
        'val' in times[0] &&
        'room_ids' in times[0]['val'] &&
        times[0]['val']['room_ids'] !== undefined
      )
      {
        const booking = {
          date: parseISOString(times[0]['val']['date']),
          room_id: times[0]['val']['room_ids'][0]
        }
        setBooking(booking)
      }
    },500)
    return () => clearTimeout(timeid)
  },[times, index])  
  
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
          onClick={() => { if(index > 0) setIndex(index - 1) }}
        />
        <Flex
          direction={'row'}
          textAlign={'center'}
          alignItems={'space-around'}
          justifyContent={'space-around'}
          width={'100%'}
        >
        {times.length > 0 ? times.map(entry => {
          const dt = parseISOString(entry['val']['date'])
          const { room_ids } = entry['val'];
          
          return (
            <Center key={`${dt}:${room_ids}:${index}`}>
              <Text
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
            </Center>
          )
        }) : <Text color={Color.CREME}>Ingen ledige tider</Text>}
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