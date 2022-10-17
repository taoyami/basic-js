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
  //throw new NotImplementedError('Not implemented');

	if (date === undefined){
    return 'Unable to determine the time of year!';
  }

	if (date instanceof Date && date.toString === Object.getPrototypeOf(date).toString ) {
		
    let m = date.getMonth() + 1;

		if(m >= 1 && m <= 2 || m == 12) return 'winter';
		if(m >= 3 && m <= 5) return 'spring';
		if(m >= 6 && m <= 8) return 'summer';
		if(m >= 9 && m <= 11) return 'autumn';
	}
	   throw Error('Invalid date!');
}

module.exports = {
  getSeason
};
