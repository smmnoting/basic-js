const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, counter = 1) {

    if (!arr.some((element) => {
      return Array.isArray(element);
    })) {
      return counter;
    }

    arr = arr.flat();
    counter += 1;
    return this.calculateDepth(arr, counter)
  }
}

const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
console.log(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));

module.exports = {
  DepthCalculator
};
