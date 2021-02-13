const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var count = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "^^") {
        count++;
      }
    }
  }
  return count;
};
