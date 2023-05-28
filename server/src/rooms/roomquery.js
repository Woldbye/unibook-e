const { freeTimeslots } = require('./room.js');
const { getType } = require('./../date.js');
// From https://stackoverflow.com/questions/27012854/how-to-change-iso-date-string-to-date-object
function parseISOString(s) {
  if(getType(s) === 'date') return s;
  else if(getType(s) !== 'string') throw new Error("Invalid type!!!!",s)
  
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function filterByDate(rooms,date) { // filters out rooms that are not free on the given date
  if(rooms === undefined) return [];
  if(getType(date) === 'string') date = parseISOString(date)
  if(getType(date) !== 'date') throw new Error("Invalid type!!!!",date)
  return rooms.filter(r => freeTimeslots(r,date).length > 0);
}

/**
 * @brief Converts a room_query object into an url string
 * @param {*} room_query A room_query object, which is a subset of the parameters of a room.
 * @returns A url string that can be used to query the server for rooms.
 */
function toUrl(room_query) {
  return "/rooms?" + Object
    .entries(room_query)
    .map(([param,value]) => `${param}=${value}`)
    .join("&");
} 
/**
 * Receives an url string of a room query and returns an object containing the parameters of the query.
 * @param {*} url string as constructed by toUrl(query)
 */
function fromUrl(url) {
  const objArr = url
    .split("/rooms?")[1]      //Split url at the start of the query and use the second part
    .split("&")       //Split at each new parameter
    .map(param => param.split("="))      //Split each parameter into key and value
  
  // Convert inner objects to arrays
  for(let i = 0;i < objArr.length;i++) {
    if(objArr[i][0] === 'type' || objArr[i][0] === 'id') {
      objArr[i][1] = objArr[i][1].split(",");       //Split type into array of types
    } else if(objArr[i][0] === 'ressources') {
      objArr[i][1] = objArr[i][1].split(",");       //Split type into array of types
      if(objArr[i][1].length === 1 && objArr[i][1][0] === "")
        objArr[i][1] = [];
    } else if(objArr[i][0] === 'date')
      objArr[i][1] = parseISOString(objArr[i][1]); //parse date ISO string into date object
  }
  return Object.fromEntries(objArr);
}


module.exports = {
  toUrl,fromUrl,parseISOString,filterByDate
};