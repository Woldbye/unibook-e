const { hasTag, Tag } = require('./roomtag.js');

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

/** 
 * @brief Create a new Room object. 
 *        All parameter values are held as strings to allow easy conversion back and forward 
 */
const create = (type, room_size, building_nr,floor,room,address,tag_flags) => {
  return {
    id: `${building_nr}-${floor}-${room}`,
    type: `${type}`,
    building_nr: `${building_nr}`,
    floor: `${floor}`,
    room: `${room}`,
    address: address,
    size: `${room_size}`,
    resources: {
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
};





