const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  function checkIfNotControl(element) {
    if (element === '--discard-next' || element === '--discard-prev' || element === '--double-next' || element === '--double-prev') {
      return false;
    }
    else return true;
  };
  function checkIfExist(element) {
    if (element === undefined) {
      return false;
    }
    else return true;
  };

  if (!(Array.isArray(arr))) {
    throw new Error();
  }
  var result = [];
  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        while (true) {
          let j = 1;
          if(!checkIfExist(arr[i + j])) break;
          if (!(checkIfNotControl(arr[i + j]))) {
            j++;
            continue;
          }
          i++;
          break;
        }
        continue;

      case '--discard-prev':
        while (true) {
          let j = -1;
          if(!checkIfExist(arr[i + j]) || arr[i - 2] =='--discard-next') break;
          result.pop();
          break;
        }
        continue;

      case '--double-next':
        if(!checkIfExist(arr[i + 1])) break;
        if (checkIfNotControl(arr[i + 1])) {
          result.push(arr[i + 1]);
          result.push(arr[i + 1]);
          i++;
          break;
        }
        while (true) {
          let j = 1;
          if(!checkIfExist(arr[i + j])) break;
          if (!(checkIfNotControl(arr[i + j]))) {
            j++;
            continue;
          }
          result.push(arr[i + j]);
          result.push(arr[i + j]);
          i += j;
          break;
        }
        continue;

        case '--double-prev':
          while (true) {
            let j = -1;
            if (!checkIfExist(arr[i + j]) || arr[i - 2] == '--discard-next') break;
            result.push(result[result.length - 1]);
            break;
          }
          continue;

      default:
        result.push(arr[i]);
    }
  }
  return result;
};

