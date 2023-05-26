/** 
 * @brief Capitalize the first letter of the given string
 * @param {string} str to capitalize 
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Slice without negative indexing
// Attempts to retrieve k elements from each side of the array starting at index mid
// 
Array.prototype.sliceMid = function(mid,k) {
  if(this.length < k*2+1) return this.map((val,index) => ({val,index}));
  var ret = [{val: this[mid], index: mid}]
  for(let i = 1; ret.length < Math.min(this.length, k*2+1); ++i) {
    if(mid-i >= 0) ret.unshift({ val: this[mid - i], index: mid - i })
    if (mid+i < this.length) ret.push({ val: this[mid + i], index: mid + i });
  }
  return ret;
}