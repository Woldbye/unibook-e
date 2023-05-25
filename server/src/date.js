Date.prototype.addTime = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
  return new Date(
    this.getFullYear() + year,
    this.getMonth() + month,
    this.getDate() + day,
    this.getHours() + hour,
    this.getMinutes() + min,
  );
};

Date.prototype.subtractTime = function(year = 0,month = 0,day = 0,hour = 0,min = 0) {
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
const createDateRange = (start,end,dur) => {
  const times = [];
  for(let tm = start;tm <= end;tm = tm.addTime(0,0,0,0,dur)) {
    if (tm.getHours() < start.getHours() || tm.getHours() >= end.getHours()) continue;
    times.push(tm);
  }
  return times;
};

module.exports = {
  addTime: Date.prototype.addTime,
  subtractTime: Date.prototype.subtractTime,
  createDateRange,
}