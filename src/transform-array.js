const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error('\'arr\' parameter must be an instance of the Array!');
  }
  const comands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]
  let finalArray = [];
  let copyArray = [...arr];

  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] == '--discard-next' && i != copyArray.length - 1 && !comands.includes(copyArray[i + 1])) {
      copyArray.splice(i + 1, 1);
    }
    else if (copyArray[i] == '--discard-prev' && i != 0 && !comands.includes(copyArray[i - 1])) {
      finalArray.pop();
    }
    else if (copyArray[i] == '--double-next' && i != copyArray.length - 1 && !comands.includes(copyArray[i + 1])) {
      const nextElem = copyArray[i + 1];
      finalArray.push(nextElem, nextElem);
      i++;
    }
    else if (copyArray[i] == '--double-prev' && i != 0 && !comands.includes(copyArray[i - 1])) {
      const prevElem = copyArray[i - 1];
      finalArray.push(prevElem);
    } else {
      if (!comands.includes(copyArray[i])) {
        finalArray.push(copyArray[i]);
      }
    }

  }

  return finalArray;
}


module.exports = {
  transform
};
