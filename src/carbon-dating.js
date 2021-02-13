const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  var number = parseInt(sampleActivity);
  if (typeof (sampleActivity) !== 'string' || parseInt(sampleActivity) !== NaN) {
    return false;
  }

  var k = 0.693 / HALF_LIFE_PERIOD;
  var result = Math.ceil(Math.log(MODERN_ACTIVITY / number) / k);
  return result;
};
