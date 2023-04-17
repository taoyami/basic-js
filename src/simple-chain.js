const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

	arr: [],

	getLength() {
		return this.arr.length;
	},
	addLink(v) {
		this.arr.push(String(v));
		return this;
	},
	removeLink(p) {
		if (typeof p === 'number' && p % 1 === 0 && p > 0 && p <= this.arr.length){
			this.arr.splice( (p-1), 1 );
			return this;
		}
		this.arr.length = 0;
		throw Error("You can't remove incorrect link!");
	},
	reverseChain() {
		this.arr = this.arr.reverse();
		return this;
	},
	finishChain() {
		let chain = "( "+this.arr.join(' )~~( ')+" )";
		this.arr.length = 0;
		return chain;
	}
};

module.exports = {
  chainMaker
};
