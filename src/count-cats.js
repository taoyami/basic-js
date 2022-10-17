const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

  function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');

    let counter = 0

    if (matrix[0]) {
      matrix.forEach((e) => {
        e.forEach(el => {
          if (el === '^^') {
            counter++
          }
        });
      })
    } else {
      return 0
    }
  
    return counter;
  }


module.exports = {
  countCats
};
