const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let currentDepth = 1;
    let maxDepth = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth = this.calculateDepth(arr[i]);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    return maxDepth + 1;
  }
};