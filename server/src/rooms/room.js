const { hasTag,Tag } = require('./roomtag.js');
const { parseISOString,getType } = require('./../date.js');


const Size = {
  XS: 8,
  S: 16,
  M: 20,
  L: 32,
  XL: 64,
  XLL: 128,
};

const Type = { //room types - a room can only have one at a time
  Meeting: 'Mødelokale',
  Skybox: 'Skybox',
  Auditorium: 'Auditorium',
  Classroom: 'Klasselokale',
}

function freeTimeslots(room,date,duration=0.0) { // returns the timeslots of a room that are free on the given date
  // console.log("Free timeslots received: ", duration, getType(duration))
  const reservedslots = room['timeslots']['reserved']
    .map(dkey => parseISOString(dkey));
  
  return  room['timeslots']['free']
    .filter(
      slot => {
        slot = parseISOString(slot);
        if(!slot.ymdEquals(date)) return false;
        const start = slot.subtractTime(0,0,0,0,1);
        const stop = start.addTime(0,0,0,duration,1);
        // First slot in reserved that are later than start
        // console.log("\n\tslot is ",slot,"\n\tstart is ", start, " \n\tstop", stop, " include: ", !reservedslots.some(tm => tm > start && tm < stop))
        return !reservedslots.some(tm => tm > start && tm < stop)
        // const next = reservedslots.find(tm => tm > start || tm.equals(start))
        // if (next === undefined) return true;
        // console.log("stop is ", stop, " and next", next, " ")
        // // Return free timeslots that are not reserved in respect to the duration
        // return (stop.equals(next) || stop < next)
    });
};
/** 
 * @brief Create a new Room object. 
 *        parameter values are held as strings to allow easy conversion back and forward 
 */
const create = (type, room_size, building_nr,floor,room,address,tag_flags, timeslots) => {
  return {
    id: `${building_nr}-${floor}-${room}`,
    type: `${type}`,
    building_nr: `${building_nr}`,
    floor: `${floor}`,
    room: `${room}`,
    address: address,
    size: `${room_size}`,
    timeslots: timeslots,
    ressources: {
      // Resources capitalized to ease printing and allow indexing with tag flag names
      Screen: hasTag(tag_flags,Tag.Screen) ? '1' : '0',
      Projector: hasTag(tag_flags,Tag.Projector) ? '1' : '0',
      Outlets: hasTag(tag_flags,Tag.Outlets) ? '1' : '0',
      Table_Desks: hasTag(tag_flags,Tag.Table_Desks) ? '1' : '0',
      AC: hasTag(tag_flags,Tag.AC) ? '1' : '0',
      Whiteboard: hasTag(tag_flags,Tag.Whiteboard) ? '1' : '0',
      Blackboard: hasTag(tag_flags,Tag.Blackboard) ? '1' : '0',
    }
  }
}
 
module.exports = {
  Size,
  Type,
  create,
  freeTimeslots,
};