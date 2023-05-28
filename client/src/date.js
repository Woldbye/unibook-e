import {getType} from './util.js';

Date.prototype.addTime = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
  return new Date(
    this.getFullYear() + year,
    this.getMonth() + month,
    this.getDate() + day,
    this.getHours() + hour,
    this.getMinutes() + min,
  );
};

// Year month and day equals
Date.prototype.ymdEquals = function(date){
  return this.getFullYear() === date.getFullYear() && this.getMonth() === date.getMonth() && this.getDate() === date.getDate();
}

// Date.prototype.equals = function(date) {
//   const res = this.ymdEquals(date) && this.getHours() === date.getHours() && this.getMinutes() === date.getMinutes();
//   console.log("Result of comparison of ", this, date, res)
//   return res
// }

Date.prototype.toClockString = function() {
  return `${this.getHours() < 10 ? '0' : ''}${this.getHours()}:${this.getMinutes() < 10 ? '0' : ''}${this.getMinutes()}`;
}

// From https://stackoverflow.com/questions/27012854/how-to-change-iso-date-string-to-date-object
export function parseISOString(s) {
  if(getType(s) === 'date') return s;
  else if(getType(s) !== 'string') throw new Error("Invalid type!!!!",s)
  
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

Date.prototype.subtractTime = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
  return new Date(
    this.getFullYear() - year,
    this.getMonth() - month,
    this.getDate() - day,
    this.getHours() - hour,
    this.getMinutes() - min,
  );
};

export const da_months = {
  januar: 31,
  februar: 28,
  marts: 31,
  april: 30,
  maj: 31,
  juni: 30,
  juli: 31,
  august: 31,
  september: 30,
  oktober: 31,
  november: 30,
  december: 31
}

/**
 * @brief Creates an array of Date objects from start to end with duration seperating them
 * @param {*} start time of day and date that timeslots should start
 * @param {*} end time of day and date that timeslots should close 
 * @param {*} dur The seperator of each timeslot
 * @returns Array of day objects frpfrom start to end
 */
export const createDateRange = (start,end,dur) => {
  const times = [];
  for(let tm = start;tm <= end;tm = tm.addTime(0,0,0,0,dur)) {
    if (tm.getHours() < start.getHours() || tm.getHours() >= end.getHours()) continue;
    times.push(tm);
  }
  return times;
};

