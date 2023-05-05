/**
 * All the available tags for the rooms as enums, the tags are represented as bits in a number
 * to allow for a single number to represent multiple tags.
 */
const Tag = {
  None: 0,
  Screen: 1,
  Projector: 2,
  Outlets: 4,
  TableDesks: 8,
  AC: 16,
  Whiteboard: 32,
  Blackboard: 64,
};

const RoomSizes = {
  XS: 8,
  S: 16,
  M: 20,
  L: 32,
  XL: 64,
  XLL: 128,
};
const RoomSizeArray = [
  8, 16, 20, 32, 64, 128
]

const NrOfRoomSizes = 6; 
const NrOfTags = 7;
const TagMask = (1 << NrOfTags) - 1; // 2^(Tag size) - 1 
const createRandomTags = () => Math.floor(Math.random() * TagMask);

/**
 * Evaluate whether a tag flag has a specific tag
 * @param {number} tag_flags 
 * @param {Tag} tag 
 * @returns true if the tag_flags has the tag
 */
const hasTag = (tag_flags,tag) => (tag_flags & tag) > 0;

/**
 * Returns an ordered list of tags that is contained withinn the tag_flags
 * The list is ordered in ascending order by the Tag enum
 * @param {number} tag_flags 
 * @returns An ordered list of tags
 */
const getTags = (tag_flags) => {
  let flags = tag_flags;
  let tags = [];
  while(flags > 0) {
    const tag = flags & -flags; // Find the first tag in the flag 
    tags.push(tag);             // Add the first tag to the list
    flags -= tag;               // Remove the first tag from the flag
  }
  return tags;
}


const createRoom = (building_nr,floor,room,address,tag_flags,room_size) => {
  return {
    building_nr: building_nr,
    floor: floor,
    room: room,
    address: address,
    size: room_size,
    hasScreen: hasTag(tag_flags,Tag.Screen),
    hasProjector: hasTag(tag_flags,Tag.Projector),
    hasOutlets: hasTag(tag_flags,Tag.Outlets),
    hasTableDesks: hasTag(tag_flags,Tag.TableDesks),
    hasAC: hasTag(tag_flags,Tag.AC),
    hasWhiteBoard: hasTag(tag_flags,Tag.Whiteboard),
    hasBlackBoard: hasTag(tag_flags,Tag.Blackboard),
    id: `${building_nr}-${floor}-${room}`,
  }
}

module.exports = {
  Tag,
  TagMask,
  RoomSizes,
  RoomSizeArray,
  NrOfRoomSizes,
  createRoom,
  createRandomTags,
  hasTag,
  getTags,
};





