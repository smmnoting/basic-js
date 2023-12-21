const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < cols; x++) {
      let count = 0;
      // проверяю соседние ячейки на true
      for (let ny = -1; ny <= 1; ny++) {
        for (let nx = -1; nx <= 1; nx++) {
          const nyCoord = y + ny;
          const nxCoord = x + nx;
          // проверяю лежит ли ячейка в матрице
          if (nyCoord >= 0 && nyCoord < rows && nxCoord >= 0 && nxCoord < cols && (nyCoord != y || nxCoord != x)) {
            // прибавляю счетчик если есть мина в соседней ячейке
            if (matrix[nyCoord][nxCoord]) {
              count += 1;
            }
          }
        }
      }
      row.push(count);
    }
    result.push(row);
  }
  return result;
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]))

module.exports = {
  minesweeper
};
