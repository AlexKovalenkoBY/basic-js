const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  throw new CustomError('Not implemented');
  function getSeason (date) {
    let answer = "";
    let month = date.getMonth();
    if ((month === 11) || (month === 0) || (month === 1) ) {answer = "winter"};
    if ((month >1) && (month < 6 )  ) {answer = "spring"};
    if ((month >5) && (month < 9 )  ) {answer = "summer"};
    if ((month >8) && (month < 12 )  ) {answer = "autumn"};
    return answer;

  }
};
