const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined)
    options.additionSeparator = "|";

  var repeatTimes = options.repeatTimes;
  var separator = options.separator;
  var addition = options.addition;
  var additionRepeatTimes = options.additionRepeatTimes;
  var additionSeparator = options.additionSeparator;

  var string = String(str);
  string += addition;

  for (let i = 1; i < additionRepeatTimes; i++) {
    string += additionSeparator + addition;
  }
  var repetedString = string;
  for (let i = 1; i < repeatTimes; i++) {
    string += separator + repetedString;
  }
  return string;
};
