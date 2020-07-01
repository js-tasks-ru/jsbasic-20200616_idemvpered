/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '25,-1,-234,4,   1000';

function getMinMax(str) {
  var prices    = str.match(/[+-]?([0-9]*[.])?[0-9]+/g).sort(function(a,b) {
      return a - b
    })
    return {min:parseFloat(prices[0]), max:parseFloat(prices[prices.length - 1 ])}
}

//console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }