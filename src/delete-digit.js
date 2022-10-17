const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  n = n.toString().split('');

  for (i = 0; i < n.length; i++) {
    if (n[i] == n[i + 1]) continue;
    if (n[i] > n[i + 1]) {
      n.splice(i + 1, 1);
      return +n.join('');
    }
    else {
      n.splice(i, 1);
      return +n.join('');
    }
  }
}

module.exports = {
  deleteDigit,
};
