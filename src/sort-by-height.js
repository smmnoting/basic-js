const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayOfIndex = [];
  let arrayWithioutOne = [];
  arr.forEach((num, index) => {
    if (num === -1) {
      arrayOfIndex.push(index);
    } else {
      arrayWithioutOne.push(num)
    }
  })
  function compareNumbers(a, b) {
    return a - b;
  }
  arrayWithioutOne = arrayWithioutOne.sort(compareNumbers);
  arrayOfIndex.forEach((ind) => {
    arrayWithioutOne.splice(ind, 0, -1)
  })
  return arrayWithioutOne;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]))

module.exports = {
  sortByHeight
};
