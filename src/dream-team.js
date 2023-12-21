const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';
  if (Array.isArray(members)){
    members.forEach((member)=>{
      if (typeof member == 'string'){
        member = member.trim();
        result += member.charAt(0)
    }    
  })
}
  if (result === ''){
    return false;
  }else {
    result = result.toUpperCase();
    let resultArray = result.split('');
    resultArray = resultArray.sort();
    result = resultArray.join('');
    return result;
  }
}

createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
])

module.exports = {
  createDreamTeam
};
