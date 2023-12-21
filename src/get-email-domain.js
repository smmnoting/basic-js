const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = email.split('@');
  let final = result[result.length-1].toString();
  return final;
}
console.log(getEmailDomain('prettyandsimple@example.com'))
module.exports = {
  getEmailDomain
};
