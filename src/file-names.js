const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArray = [];
  names.forEach((name, index) => {
    const slicedArray = names.slice(0, index);
    const filterResult = slicedArray.filter((fileName) => fileName == name);
    if (filterResult.length >= 1) {
      const newElem = name + `(${filterResult.length})`;
      if (!newArray.includes(newElem)) {
        newArray.push(newElem);
      } else {
        newArray.push(newElem + '(1)');
      }
    } else {
      if (newArray.includes(name)) {
        newArray.push(name + '(1)');
      } else { newArray.push(name) ;
      }
    }
  })
  return newArray;
}

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
module.exports = {
  renameFiles
};
