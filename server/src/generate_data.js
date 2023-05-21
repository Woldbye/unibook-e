const fs = require('fs');
const path = require('path');
const Room = require('./rooms/room.js');
const { createRandomTags } = require('./rooms/roomtag.js');


Date.prototype.addHours = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
  return new Date(
    this.getFullYear() + year,
    this.getMonth() + month,
    this.getDate() + day,
    this.getHours() + hour,
    this.getMinutes() + min,
  );
};

Date.prototype.subtract = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
  return new Date(
    this.getFullYear() - year,
    this.getMonth() - month,
    this.getDate() - day,
    this.getHours() - hour,
    this.getMinutes() - min,
  );
};


/**
 * @brief Creates an array of Date objects from start to end with duration seperating them
 * @param {*} start time of day and date that timeslots should start
 * @param {*} end time of day and date that timeslots should close 
 * @param {*} dur The seperator of each timeslot
 * @returns Array of day objects frpfrom start to end
 */
const createRange = (start,end,dur) => {
  const times = [];
  for(let tm = start;tm <= end;tm = tm.addHours(0,0,0,0,dur)) {
    if (tm.getHours() < start.getHours() || tm.getHours() >= end.getHours()) continue;
    times.push(tm);
  }
  return times;
};


/** Retrieve a random property from an object */
var randomProperty = (obj) => Object.keys(obj)[Math.floor(Math.random()*Object.keys(obj).length)];
/** Retrieve a random property-key from an object */
var randomKey = (obj) => obj[randomProperty(obj)];

/**
 * @param {*} start 
 * @param {*} end 
 * @param {*} dur 
 * @param {*} free_frac the fraction of timeslots that should be free
 */
var randomTimeslots = (start,end,dur,free_frac) => {  
  const timeslots = {
    free: [],
    reserved: [],
  }
  createRange(start,end,dur).forEach((tm,i) => {
    const isFree = Math.random() < free_frac;
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
        randomTimeslots(new Date(2022,10,1,8,0),new Date(2024,1,1,20,0),30,0.25)
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