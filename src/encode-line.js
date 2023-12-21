const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let char = '';
  let result = '';
  for (let i = 0; i < str.length; i ++) {
    char = str.charAt(i);
    if (char == str.charAt(i+1)){
      counter += 1
    } else {
      if (counter > 1){
        result += counter + char;
      } else {
        result += char
      }
      counter = 1;
    }
    
  }
  return result;
}
console.log(encodeLine('asdaaass'));

module.exports = {
  encodeLine
};
