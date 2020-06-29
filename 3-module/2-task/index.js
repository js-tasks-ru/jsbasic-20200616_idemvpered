'use strict'
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

let filtered = filterRange(arr, 4, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
