import { Text,IconButton, HStack, Flex,Center,Spacer } from '@chakra-ui/react';
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
  // Hooks
  const [index,setIndex] = React.useState(0); // active room index
  const [bookings,setBookings] = React.useState([]); // set local held bookings for the day as {date: Date, room_ids: int[]}
  const [times,setTimes] = React.useState([]); // times for the day

  // Extract the up to three shown values whenever index or booking changes
  React.useEffect(() => {
    setTimes(bookings.sliceMid(index,1))
  }, [bookings,index])

  React.useEffect(() => {
    let byDate = {} // byDate will contain rooms grouped by available time slot
    const date = props.date ?? new Date(new Date().getFullYear(),new Date().getMonth(),0).toISOString();
    
    // get rooms available on date input date
    filterByDate(props.rooms ?? [],parseISOString(date))
      // roll up timeslots for all rooms available on a given date into a single array
      .reduce((acc,room) => { 
        const { id,timeslots } = room;
        return acc.concat(
          timeslots['free'] 
            // Parse the free room times from ISO date strings to Date objects
            .map(datestr => ({ date: parseISOString(datestr),room_id: id }))
            // filter out timeslots that are not on the selected year,month,day
            .filter(slot => slot['date'].ymdEquals(date))
        )
      },[])
      // sort in ascending order by time of day
      .sort((a,b) => a['date'] - b['date'])
      // map back to ISO date strings
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
  
  // Set index to first free timeslot whenever date changes
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
        if(props.setBooking !== undefined)
          props.setBooking(booking) // Update global booking state
      }
    }, 500)
    return () => clearTimeout(timeid)
  },[bookings,index,props])  
  
  const type_name = "time"

  return (
    <HStack
      hide={-1}
      width={'auto'}
      marginBottom={marginBottom}
      justifyContent={'space-between'}
      height={'50px'}
      minWidth={'270px'}
      backgroundColor={Color.BLUE}
      borderRadius={30}
      boxShadow={'0px 6px 8px #00000040'}
    >
      <IconButton //"got to previous available timeslot on this date" button
        size={'lg'}
        aria-label={'Previous ' + type_name}
        isRound={true}
        icon={<ArrowLeftIcon />}
        onClick={() => { if (index > 0) setIndex(index - 1) }}
      />
      <Flex
        direction={'row'}
        textAlign={'center'}
        alignItems={'space-around'}
        justifyContent={'space-around'}
        width={'100%'}
        marginRight={'50%'}
        marginLeft={'50%'}
      >
        <Center>
        {times.length > 0 ? times.map(entry => {
          const dt = parseISOString(entry['val']['date'])
          // Retrieve room_ids that are available for dt
          const { room_ids } = entry['val'];
          return (
              <Text
                key={`${dt}:${room_ids}:${index}`}
                color={Color.CREME}
                className="highlight"
                // color the selected timeslot green, color the rest in the background color.
                background={entry['index'] === index ? Color.GREEN : Color.DARK_BROWN}
                marginRight={'5%'}
                marginLeft={'5%'}
                paddingRight={'0.3rem'}
                paddingLeft={'0.3rem'}
                cursor={'pointer'}
                //select timeslot by clicking it //write the time of the timeslot on the form HH:MM
                onClick={() => setIndex(entry['index'])}
              > 
                {`${(dt.getHours()).toString().padStart(2,0)}:${dt.getMinutes().toString().padStart(2,0)}`}
              </Text>
          )
        }) : <Text color={Color.CREME}>Ingen ledige tider</Text>}
        </Center>  
      </Flex>
      <IconButton //"got to next available timeslot on this date" button
        size={'lg'}
        aria-label={'Next ' + type_name}
        isRound={true}
        icon={<ArrowRightIcon />}
        onClick={() => { if (index < bookings.length - 1) setIndex(index + 1) }}
        />
    </HStack>
  )
};

export default TimeChooser;