const { freeTimeslots } = require('./room.js');
// From https://stackoverflow.com/questions/27012854/how-to-change-iso-date-string-to-date-object
function parseISOString(s) {
  if (typeof s === 'object') return s;
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function filterByDate(rooms,date) { // filters out rooms that are not free on the given date
  if(rooms === undefined) return [];
  if(typeof date !== 'string') date = parseISOString(date)
  return rooms.filter(r => freeTimeslots(r,date).length > 0);
}

/**
 * @brief Converts a room_query object into an url string
 * @param {*} room_query A room_query object, which is a subset of the parameters of a room.
 * @returns A url string that can be used to query the server for rooms.
 */
function toUrl(room_query) {
  return "/rooms?" + Object.entries(room_query).map(([param,value]) => `${param}=${value}`).join("&");
} 
/**
 * Receives an url string of a room query and returns an object containing the parameters of the query.
 * @param {*} url string as constructed by toUrl(query)
 */
function fromUrl(url) {
  // console.log(url.split("/rooms?")[1].split("&"));
  const objArr = url
    .split("/rooms?")[1] // split url at the start of the query and use the second part
    .split("&") // split at each new parameter
    .map(param => param.split("=")) // split each parameter into key and value
  // Convert inner objects to arrays
  for(let i = 0;i < objArr.length;i++) {
    if(objArr[i][0] === 'type') objArr[i][1] = objArr[i][1].split(","); //split type into array of types
    else if(objArr[i][0] === 'date')
      objArr[i][1] = parseISOString(objArr[i][1]); //parse date ISO string into date object
  }
  return Object.fromEntries(objArr);
}


module.exports = {
  toUrl,fromUrl,parseISOString,filterByDate
};