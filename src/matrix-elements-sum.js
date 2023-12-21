const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summary = 0;
  let indexArray = [];
  matrix.forEach((array, index) => {
    array.forEach((num, index) => {
      if (num != 0) {
        if (!indexArray.includes(index)) {
          summary += num;
        }
      } else {
        indexArray.push(index);
      }
    })
  })
  return summary;
}


module.exports = {
  getMatrixElementsSum
};
