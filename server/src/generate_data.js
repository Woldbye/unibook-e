const fs = require('fs');
const path = require('path');
const Room = require('../../shared/room.js');
const { createRandomTags } = require('../../shared/roomtag.js');

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
 * @brief Generates a list of rooms such that each room in the building is 
 *        represented and unique
 * @param {*} building a building object to fully populate 
 * @returns {Room[]} a list of rooms
 */
function populate_building(building) {
  let rooms = [];
  for (let i = 0; i < building.floors; i++) {
    for(let j = 0;j < building.rooms_per_floor;j++) {
      const room = Room.create(
        building.building_nr,
        i,
        j,
        building.address,
        createRandomTags(),
        Room.SizeArray[Math.floor(Math.random() * Room.SizeArray.length)]
      );
      rooms.push(room);
    }
  }
  return rooms;
}

const Rooms = [
  ...populate_building(buildings[0]),
  ...populate_building(buildings[1]),
];

/** fname without .json extension */
function write_rooms_to_file(fname) {
  const json = JSON.stringify(Rooms,null,2);
  
  var fpath = path.join(__dirname,'data',`${fname}.json`);
  for(let i = 1; fs.existsSync(fpath);++i) {
    fpath = path.join(__dirname,'data',`${fname}_${i}.json`);
  }
  console.log("Writing to file: ",fpath);
  
  // write the rooms to a file in json format
  fs.writeFileSync(fpath,json); 
  return json;
}

write_rooms_to_file('rooms')