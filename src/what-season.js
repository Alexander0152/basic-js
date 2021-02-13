const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  
  try {
    Date.prototype.getMonth.call(date);
  } catch (e) {
    throw new Error();
  }
  var month = date.getMonth();

  if (month <= 1 || month == 11) {
    return "winter";
  }
  else if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  else return "autumn";
};
