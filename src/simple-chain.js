const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (this.chain.length > 0) {
      this.chain = this.chain + '~~' + '( ' + value + ' )';
    } else { this.chain = this.chain + '( ' + value + ' )' };
    return this;
  },
  removeLink(position) {

    const arrayChain = this.chain.split('~~');
    if (position > 0 && position <= arrayChain.length) {
      arrayChain.splice(position - 1, 1);
      this.chain = arrayChain.join('~~');
      return this;
    } else {
      this.chain = '';
      throw Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    const arrayChain = this.chain.split('~~');
    this.chain = arrayChain.reverse().join('~~');
    return this;
  },
  finishChain() {
    const finalChain = this.chain;
    this.chain = '';
    return finalChain;
  }
};

module.exports = {
  chainMaker
};

