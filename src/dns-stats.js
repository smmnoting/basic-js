const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let string = '';
  domains.forEach((domain) => {
    const arrayOfStrings = domain.split('.').reverse();
    for (let i=0; i < arrayOfStrings.length; i += 1){
      string += '.' + arrayOfStrings[i];
      if (!result[string]) {
        result[string] = 1;
      } else {
        result[string] += 1;
      }
    }
    string = '';
  })
  return result;
}
console.log(getDNSStats(['epam.com', 'info.epam.com']))

module.exports = {
  getDNSStats
};
