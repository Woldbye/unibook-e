
/**
 * @brief Converts a room_query object into an url string
 * @param {*} room_query A room_query object, which is a subset of the parameters of a room.
 * @returns A url string that can be used to query the server for rooms.
 */
function toUrl(room_query) {
  return Object.entries(room_query).map(([param,value]) => `${param}=${value}`).join("&");
} 


/**
 * Receives an url string of a room query and returns an object containing the parameters of the query.
 * @param {*} url string as constructed by toUrl(query)
 */
function fromUrl(url) {
  return Object.fromEntries(url.split("&").map(param => param.split("=")));
}

module.exports = {
  toUrl,fromUrl
};