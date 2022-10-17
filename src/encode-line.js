const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let returnLine = [];
  let counter = 1;

  for (let i = 0; i < str.length; i++){
    if (str[i] === str [i + 1]){
      counter++
    }

    else {
      counter == 1 ? returnLine.push(str[i]) : returnLine.push(counter + str[i]);
      counter = 1;
    }
  }
  return returnLine.join('');
}

module.exports = {
  encodeLine
};
