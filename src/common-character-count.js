const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstArray = s1.split('');
  let secondArray = s2.split('');
  let counter = 0;
  firstArray.forEach((string)=>{
    const indexOfOccurance = secondArray.indexOf(string);
    if (indexOfOccurance >= 0){
      counter += 1;
      secondArray.splice(indexOfOccurance, 1);
    }
  })
  return counter;
}
getCommonCharacterCount('aabcc', 'adcaa');
module.exports = {
  getCommonCharacterCount
};
