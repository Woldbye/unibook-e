const fs = require('fs');
const path = require('path');
const Room = require('./rooms/room.js');
const { createRandomTags } = require('./rooms/roomtag.js');
require('./date.js');
const { createDateRange } = require('./date.js');

/** Retrieve a random property from an object */
var randomProperty = (obj) => Object.keys(obj)[Math.floor(Math.random()*Object.keys(obj).length)];
/** Retrieve a random property-key from an object */
var randomKey = (obj) => obj[randomProperty(obj)];

/**
 * @param {*} start starting date of available timeslots
 * @param {*} end last date of available timeslots
 * @param {*} dur TODO: not implemented
 * @param {*} free_frac the fraction of timeslots that should be free
 */
var randomTimeslots = (start,end,dur,free_frac) => {  
  const timeslots = {
    free: [],
    reserved: [],
  }
  createDateRange(start,end,dur).forEach((tm,i) => {
    const isFree = Math.random() < free_frac; // if random number between 0 and 1 is less than free_frac, then the timeslot is free
    timeslots[isFree ? 'free' : 'reserved'].push(tm);
  })
  return timeslots;
}

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
    floors: 3,
    rooms_per_floor: 10,
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
  
  for(let i = 0;i < building.floors;i++) {
    for(let j = 0;j < building.rooms_per_floor;j++) {
      const room = Room.create(
        randomKey(Room.Type),
        randomKey(Room.Size),
        building.building_nr,
        i,
        j,
        building.address,
        createRandomTags(),
        randomTimeslots(new Date(2023,0,1,8,0),new Date(2025,0,1,20,0),120,0.001)
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
  //put newly generated file in data folder, add number to name if copies already exists
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