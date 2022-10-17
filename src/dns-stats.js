const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an DNSay of domains, return the DNSStatsect with the appearances of the arr.
 *
 * @param {Array} domains
 * @return {DNSStatsect}
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
  //throw new NotImplementedError('Not implemented');

  let obj = {};
  domains.forEach(el => {
    let arr = el.split('.').reverse().map(el => '.' + el);
    for (let i = 1; i <= arr.length; i++){
      let DNS = arr.slice(0, i).join('');
      if (obj[DNS]) obj[DNS]++;
      else obj[DNS] = 1;
    }
  })

  return obj;
}


module.exports = {
getDNSStats
};