const { hasTag, Tag } = require('./roomtag.js');

const Sizes = {
  XS: 8,
  S: 16,
  M: 20,
  L: 32,
  XL: 64,
  XLL: 128,
};
const SizeArray = [8,16,20,32,64,128]

/** 
 * @brief Create a new Room object. 
 *        All parameter values are held as strings to allow easy conversion back and forward 
 */
const create = (building_nr,floor,room,address,tag_flags,room_size) => {
  return {
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
    id: `${building_nr}-${floor}-${room}`,
  }
}

module.exports = {
  Sizes,
  SizeArray,
  create,
};





