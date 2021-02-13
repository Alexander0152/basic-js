const CustomError = require("../extensions/custom-error");
var chain = [];
var result;
const chainMaker = {

  getLength() {
    return chain.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      chain.push('( )');
    }
    chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (position < 0 || position >= chain.length || !(Number.isInteger(position))){
      chain = [];                         
      throw new Error();
    }
    chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    chain.reverse();
    return this;
  },

  finishChain() {
    result = chain.join('~~');
    chain = [];
    return result;
  }
};

module.exports = chainMaker;
