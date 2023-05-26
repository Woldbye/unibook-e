const { hasTag,Tag } = require('./roomtag.js');
const { } = require('./../date.js');

const Size = {
  XS: 8,
  S: 16,
  M: 20,
  L: 32,
  XL: 64,
  XLL: 128,
};

const Type = {
  Meeting: 'Mødelokale',
  Skybox: 'Skybox',
  Auditorium: 'Auditorium',
  Classroom: 'Klasselokale',
}


function freeTimeslots(room,date) {
  const date_id = date.addTime(0,0,0).toISOString().split('T')[0];
  return room['timeslots']['free'].filter(dkey => dkey.startsWith(date_id));
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
    resources: {
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





