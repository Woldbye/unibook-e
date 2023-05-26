import { parseISOString } from '../date.js';
import * as Room from './room.js';
import { getType } from '../util.js';
/**
 * @brief Converts a room_query object into an url string
 * @param {*} room_query A room_query object, which is a subset of the parameters of a room.
 * @returns A url string that can be used to query the server for rooms.
 */
export function toUrl(room_query) {
  const url = Object
    .entries(room_query)
    .map(([param,value]) => {
      if(param === 'type' && typeof value === 'object') {
        return `${param}=${Object.values(value)}`
      } else if(param === 'date' && typeof value === 'object') {
        return `${param}=${value.toISOString()}`
      } else {
        return `${param}=${value}`
      }
    })
    .join("&");
  return url;
}

export function queryToStringIfDate(rquery) {
  rquery = fromUrl(rquery)
  var lines = "";
  if('date' in rquery) {
    lines += "Reserverer lokale ";
    if('rid' in rquery) {
      lines += rquery['rid'] + " ";
    }
    lines += "til ";
    var date = parseISOString(rquery['date'])
    const clock = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    lines += `kl. ${clock} d. ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} `;
    if (rquery['duration'] !== undefined)
      lines += " i " + rquery['duration'] + " timer ";
  }

  return lines;
}

export function filterByDate(rooms,date) {
  return rooms.filter(r => Room.freeTimeslots(r,date).length > 0);
}

/**
 * @brief Query the backend for rooms that satisfy room_query 
 * @param {*} room_query_url A room_query url string, which is a subset of the parameters of a room.
 * @returns Return an array of rooms that satisfy room_query formated as jsons
 */
export async function getRooms(room_query_url) {
  room_query_url = typeof room_query_url === 'object' ? toUrl(room_query_url) : room_query_url;
  const url = `http://localhost:5000/rooms?${room_query_url}`; // URL for overview of all rooms
  return fetch(url)
    .then(res => res.json())
    .then(res => Array.isArray(res) ? res : [res]);
} 

/**
 * Receives an url string of a room query and returns an object containing the parameters of the query.
 * @param {*} url string as constructed by toUrl(query)
 */
export function fromUrl(url) {
  if (getType(url) !== 'string') url = toUrl(url)
  const objArr = url.split("&").map(param => param.split("="))
  // Convert inner objects to arrays
  for(let i = 0;i < objArr.length;i++) {
    if(objArr[i][0] === 'type' || objArr[i][0] === 'id')
      objArr[i][1] = objArr[i][1].split(","); // RETURNS AN ARRAY
    else if(objArr[i][0] === 'date')
      objArr[i][1] = parseISOString(objArr[i][1]);
  }
  return Object.fromEntries(objArr);
}
