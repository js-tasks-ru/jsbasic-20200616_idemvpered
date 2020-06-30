
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

function filterRange(arr, a, b) {
  return arr.filter(value => {
    if (a < b && value >= a && value <= b) { 
      return value
    }
    if (a > b && value <= a && value >= b) { 
      return value
    }
    return false
  });
}
let arr = [5, 3, 8, 1];


