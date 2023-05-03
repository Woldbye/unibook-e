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
};

const TagMask = 63; // 111111
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


const createRoom = (building_nr,floor,room,address,tag_flags) => {
  return {
    building_nr: building_nr,
    floor: floor,
    room: room,
    address: address,
    tag_flags: tag_flags,
    id: `${building_nr}-${floor}-${room}`,
  }
}

module.exports = {
  Tag,
  TagMask,
  createRoom,
  createRandomTags,
  hasTag,
  getTags,
};





