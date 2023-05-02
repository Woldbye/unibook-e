/**
 * All the available tags for the rooms as enums, the tags are represented as bits in a number
 * to allow for a single number to represent multiple tags.
 */
export var Tag = {
  None: 0,
  Screen: 1,
  Projector: 2,
  Outlets: 4,
  TableDesks: 8,
  AC: 16,
  Whiteboard: 32,
} 
export const TagMask = 63; // 111111
/**
 * Evaluate whether a tag flag has a specific tag
 * @param {number} tag_flags 
 * @param {Tag} tag 
 * @returns true if the tag_flags has the tag
 */
export const hasTag = (tag_flags,tag) => (tag_flags & tag) > 0;

/**
 * Returns an ordered list of tags that is contained withinn the tag_flags
 * The list is ordered in ascending order by the Tag enum
 * @param {number} tag_flags 
 * @returns An ordered list of tags
 */
export const getTags = (tag_flags) => {
  let flags = tag_flags;
  let tags = [];
  while(flags > 0) {
    let tag = flags & -flags;   // Find the first tag in the flag 
    tags.push(flags & -flags);  // Add the first tag to the list
    flags -= tag;               // Remove the first tag from the flag
  }
  return tags;
}

export const RandomTags = () => Math.random() * TagMask;

export default Room = (building_nr,floor,room,address,tag_flags) => {
  return {
    building_nr: building_nr,
    floor: floor,
    room: room,
    address: address,
    tag_flags: tag_flags,
    id: `${building_nr}-${floor}-${room}`,
  }
}




