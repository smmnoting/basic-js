const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) return "Unable to determine the time of year!";
  try {
    JSON.stringify(date);
  } catch {
    throw Error('Invalid date!')
  }
  if (!(date instanceof Date) || typeof date === 'object' && !date.setYear) throw Error('Invalid date!')
  const month = date.getMonth() + 1;
  if (month === 12 || month < 3) return "winter";
  else if (month < 6) return "spring";
  else if (month < 9) return "summer";
  else {
    return "autumn"
  }
}
module.exports = {
  getSeason
};
