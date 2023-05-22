import { Text,IconButton, HStack, Flex } from '@chakra-ui/react';
import {ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons';
import React from 'react';
import Color from '../Colors';
import { filterByDate } from '../api/roomquery';
import * as Room from '../api/room';

const TimeChooser = (props) => {
  const { rooms,date } = props;
  
  const [ index,setIndex] = React.useState(0); // active room index
  const bookings = rooms
    .map(room => ({ room_id: room.id,timeslots: Room.freeTimeslots(room,date) }))
    .filter(room => room.timeslots.length > 0)
    .fold((acc,{ id,timeslots }) => {
      return acc.concat(timeslots.map(datestr => ({ date: Date.parse(datestr),room_id: id })))
    })
    .sort((a,b) => a.date < b.date) // sort in ascending order by date
  
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
          onClick= {() => index < bookings.length - 1 ? setIndex(index + 1) : setIndex(0)}
        />
          <Flex direction={'row'}textAlign={'center'} alignItems={'space-around'} justifyContent={'space-around'}>
          {bookings
            .slice(index > 0 ? index - 1 : index,index + 2)
            .map(({date,room_id},i) => {
              <Text
                key={`${date.toISOString()}:${room_id}`}
                color={Color.CREME}
                marginRight={5}
                onClick={() => setIndex(index > 0 ? index + i - 1 : index + i)}
              >
                {`${date.getHours()}:${date.getMinutes()}`}
              </Text>
            })
          }
          </Flex>          
        <IconButton
          size={'lg'}
          aria-label={'Add ' + this.type_name}
          isRound={true}
          icon={<ArrowRightIcon />}
          onClick = {() => index >= 0 && bookings.length > 0 ? setIndex(index + 1) : setIndex(0)}
        />
      </HStack>
  )
};

export default TimeChooser;