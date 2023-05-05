const fs = require('fs');

class Database {
  constructor() {
    
  }
  
  load_rooms() {
    const fpath = path.join(__dirname,'data','rooms.json'); 
    const json = fs.readFileSync(fpath);
  } 
  
  /** Returns an array of all rooms that satisfy the given room_query */
  query(room_query) {
    
  }
  
  /** Returns true if the room with the given id has been succesfully booked */
  book_room(room_id) {
    
  }
};
