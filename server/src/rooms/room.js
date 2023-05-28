const { hasTag,Tag } = require('./roomtag.js');
const { parseISOString } = require('./../date.js');

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

function freeTimeslots(room,date,duration = 0.0) {    //Returns the timeslots of a room that are free on the given date
  const date_id = date.addTime(0,0,0).toISOString().split('T')[0];
  const freeslots = room['timeslots']['free'].filter(dkey => dkey.startsWith(date_id));
  const reservedslots = room['timeslots']['reserved'].filter(dkey => dkey.startsWith(date_id));

  return freeslots.filter(
    slot => {
      const start = parseISOString(slot);
      const stop = start.addTime(0,0,0,duration);
      // First slot in reserved that are later than start
      const next = reservedslots.find(tm => tm > start)
      // Return free timeslots that are not reserved in respect to the duration
      return (stop < next)
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