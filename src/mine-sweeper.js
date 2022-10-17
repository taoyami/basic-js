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
  //throw new NotImplementedError('Not implemented');
  
  let setupMatrix = [];
  let arrangementMines = (i, k) => {
    let num = 0;
    for (let l = i - 1; l <= i + 1; l++){
      if (l < 0 || l >= matrix.length) continue;
      for (let n = k - 1; n <= k + 1; n++){
        if (n < 0 || n >= matrix[0].length) continue;
        if (l !== i || n !== k) {
          if (matrix[l][n]) {
            num++;
          }
        }
      }
    }
    return num;
  }
  for (let i = 0; i < matrix.length; i++){
      setupMatrix[i] = new Array();
         for (let k = 0; k < matrix[i].length; k++){
           setupMatrix[i].push(arrangementMines(i, k))
         }
       }
  return setupMatrix
}

module.exports = {
  minesweeper
};
