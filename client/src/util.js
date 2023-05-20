/** 
 * @brief Capitalize the first letter of the given string
 * @param {string} str to capitalize 
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}