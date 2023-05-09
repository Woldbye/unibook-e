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
const create = (type, building_nr,floor,room,address,tag_flags,room_size) => {
  return {
    id: `${building_nr}-${floor}-${room}`,
    type: `${type}`,
    building_nr: `${building_nr}`,
    floor: `${floor}`,
    room: `${room}`,
    address: address,
    size: `${room_size}`,
    hasScreen: hasTag(tag_flags,Tag.Screen) ? '1' : '0',
    hasProjector: hasTag(tag_flags,Tag.Projector) ? '1' : '0' ,
    hasOutlets: hasTag(tag_flags,Tag.Outlets) ? '1' : '0',
    hasTableDesks: hasTag(tag_flags,Tag.TableDesks) ? '1' : '0',
    hasAC: hasTag(tag_flags,Tag.AC) ? '1' : '0',
    hasWhiteBoard: hasTag(tag_flags,Tag.Whiteboard) ? '1' : '0',
    hasBlackBoard: hasTag(tag_flags,Tag.Blackboard) ? '1' : '0',
  }
}

module.exports = {
  Size,
  Type,
  create,
};





