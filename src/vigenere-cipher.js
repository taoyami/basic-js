const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

	constructor(type = true) {
		this.type = type;
	}

	encrypt(text, word) { 
		if (text === undefined || word === undefined || typeof text !== "string" || typeof word !== "string") throw new Error ("Incorrect arguments!");
		text = text.toUpperCase();
		word = word.toUpperCase();
		let key = word.repeat(Math.ceil(text.length / word.length)),
			  codeA = "A".charCodeAt(0),
			  res = [];

		for (let i = 0, j = 0; i < text.length; i++, j++) {
			if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text[i])) {
				res.push(text[i]);
				j--;
			} else {
				let letterI = text.charCodeAt(i) - codeA,
					  shift = key.charCodeAt(j) - codeA;
				    res.push( String.fromCharCode( codeA + (letterI + shift) % 26 ) );
			}
		}

		return this.type ? res.join('') : res.reverse().join('');
	}

	decrypt(text, word) {
		if (text === undefined || word === undefined || typeof text !== "string" || typeof word !== "string") throw new Error ("Incorrect arguments!");
		
		text = text.toUpperCase();
		word = word.toUpperCase();
		let key = word.repeat(Math.ceil(text.length / word.length)),
			  codeA = "A".charCodeAt(0),
			  res = [];

		for (let i = 0, j = 0; i < text.length; i++, j++) {
			if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text[i])) {
				res.push(text[i]);
				j--;
			} else {
				let letterI = text.charCodeAt(i) - codeA,
					  shift = key.charCodeAt(j) - codeA;
				res.push( String.fromCharCode( codeA + (letterI - shift + 26) % 26 ) );
			}
		}

		return this.type ? res.join('') : res.reverse().join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
