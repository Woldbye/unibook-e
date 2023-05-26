const fs = require('fs');
const path = require('path');
const { parseISOString,filterByDate } = require('../rooms/roomquery.js');
const { freeTimeslots } = require('../rooms/room.js');
const { getType } = require('./../date.js');
class RoomDatabase {
  rooms;

  constructor() {}
  
  get rooms() { return this.rooms; }
  
  /**
   * @brief Load the rooms from JSON file at the given 'path' into the database.
   * @param fpath A path to the json file containing the rooms 
   */
  load_rooms(fpath = path.join(__dirname,'../data','rooms.json')) {
    const json = fs.readFileSync(fpath);
    this.rooms = JSON.parse(json);
    for(let i = 0;i < this.rooms.length;++i) {
      // Add a flag to indicate whether the room is booked or not
      this.rooms[i]["isBooked"] = "0";
    }
  } 
  
  /** @returns the number of rooms in this database */
  size() { return this.rooms.length; }
  
  /** 
   * @brief Query the database for all rooms that satisfy the room_query.
   * @param room_query An object containing the parameters to query the database with. 
   *                   Any parameter not contained in the room_query will be defaulted to wildcard.
   * @returns Returns an array of all rooms that satisfy the given room_query.  
   */
  query(room_query) {
    // Exclude all rooms that dont have the values in the room_query
    var res = this.rooms
    // Filter rooms so they only contain timeslots for the given date
    if(room_query["date"] !== undefined) {
      const date = parseISOString(room_query["date"]);
      res = filterByDate(this.rooms,date).map(room => {
        room["timeslots"]["free"] = freeTimeslots(room,date);
        return room;
      })
    }
    
    // Filter rooms for each part of the query
    return res.filter(room => {
      return room["isBooked"] === "0" &&
        Object.entries(room_query).every(
          ([param,value]) => {
            if(param === 'size') {
              return parseInt(room[param]) >= parseInt(value);
            } else if(param === 'duration') {
              return true; // TODO: implement duration
            } else if(param === 'type') {
              return value.some(v => room['type'] === v || v === '')
            } else if(param === 'date') {
              return true;
            } else if(param === 'id' && Array.isArray(value)) {
              return value.some(v => room['id'] === v || v === '') 
            }             
            return room[param] === value;
          }
        );
    });
  }

  /** 
   * @brief Book a room with the given id.
   * @param room_id The id of the room to book
   * @param dur The duration of the booking in hours
   * @param date The date to book the room for - Date object
   * @returns True if the room with the given id has been succesfully booked, false otherwise
   * @warning not thread safe, as we are currently just emulating a database.
   */
  book(room_id, dur, date) {
    // Find available room within the given date and set it to booked

    this.rooms.find(room => room["id"] === room_id)["isBooked"] = "1";
  }
};

module.exports = new RoomDatabase();