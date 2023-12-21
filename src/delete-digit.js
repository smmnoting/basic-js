const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringsOfNumbers = n.toString();
  let biggestNumber = '';
  for (let i=0; i < stringsOfNumbers.length; i += 1) {
    let start = stringsOfNumbers.slice(0, i);
    let newString = start + stringsOfNumbers.slice(i+1);
    if (newString > biggestNumber) {
      biggestNumber = newString;
    }
  }
  return +biggestNumber;
}


module.exports = {
  deleteDigit
};
