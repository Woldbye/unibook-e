
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
  const url_split = url.split("/rooms?")[1].split("&").map(param => param.split("="))
  for (let i = 0; i < url_split.length; i++) {
    if (url_split[i][0] === 'type') url_split[i][1] = url_split[i][1].split(",");
  }
  return Object.fromEntries(url_split);
}

module.exports = {
  toUrl,fromUrl
};