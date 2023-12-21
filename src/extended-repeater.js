const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let array = '';
  const {
    addition = '',
    repeatTimes = 1,
    additionRepeatTimes = 1,
    separator = '+',
    additionSeparator = '|'
  } = options;

  // (str + ( (add+addSep) * addRepeat ) +sep)* repeatTimes 
  stringStr = String(str)
  stringAddition = String(options.addition);
  for (let i = 0; i < repeatTimes; i++) {
    array += stringStr;
    for (let i = 0; i < additionRepeatTimes; i++) {
      array += addition;
      if (i < additionRepeatTimes-1){
        array += additionSeparator;
      }
    }
    if (i < repeatTimes -1){
      array += separator;
    }
  }
  return array
}

console.log(repeater('аГуСиК ', { repeatTimes: 3, separator: '♥♥♥  ', addition: ' пОкАкУнЬкАл ', additionRepeatTimes: 5, additionSeparator: '( ͡° ͜ʖ ͡°)' }));

module.exports = {
  repeater
};
