/**
 * All the available tags for the rooms as enums, the tags are represented as bits in a number
 * to allow for a single number to represent multiple tags.
 */
var Tag = {
  None: 0,
  Screen: 1,
  Projector: 2,
  Outlets: 4,
  TableDesks: 8,
  AC: 16,
  Whiteboard: 32,
} 
const TagMask = 63; // 111111
const makeRandomTags = () => Math.floor(Math.random() * TagMask);

const Room = (building_nr,floor,room,address,tag_flags) => {
  return {
    building_nr: building_nr,
    floor: floor,
    room: room,
    address: address,
    tag_flags: tag_flags,
    id: `${building_nr}-${String.fromCharCode(('A'.charCodeAt(0)+floor))}-${room}`,
  };
};

const addresses = [
  {
    // ITU
    street: 'Rued Langgaards Vej 7',
    city: 'København',
    zip: '2300'
  },
  {
    // DIKU
    street: 'Universitetsparken 5',
    city: 'København',
    zip: '2100'
  }
];

const buildings = [
  {
    building_nr: 1,
    address: addresses[0],
    floors: 5,
    rooms_per_floor: 20,
  },
  {
    building_nr: 2,
    address: addresses[1],
    floors: 8,
    rooms_per_floor: 30,
  },
];

/**
 * Generates a list of rooms such that each room in the building is 
 * represented and unique
 * @param {Building} building a building object to fully populate 
 * @returns {Room[]} a list of rooms
 */
function populate_building(building) {
  let rooms = [];
  for (let i = 0; i < building.floors; i++) {
    for(let j = 0;j < building.rooms_per_floor;j++) {
      const room = Room(building.building_nr,i,j,building.address,makeRandomTags());
      rooms.push(room);
    }
  }
  return rooms;
}

const Rooms = [
  ...populate_building(buildings[0]),
  ...populate_building(buildings[1]),
];

const fs = require('fs');
function write_rooms_to_file(file_dest) {
  // write the rooms to a file in json format
  fs.writeFile(file_dest,JSON.stringify(Rooms,null,2),(err) => {
    if(err) throw err;
    console.log('The file has been saved!');
  });
}

module.exports = write_rooms_to_file;