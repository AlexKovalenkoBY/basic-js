const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(myDate) { ///не работает тест с фэйковой датой. надо искать причину
  //throw new CustomError('Not implemented');
  if (myDate === null || myDate === undefined) {
    return "Unable to determine the time of year!";
  }
  if (myDate instanceof Date) {
    let answer = "";

    let month = myDate.getMonth();

    if (month === 11 || month === 0 || month === 1) {
      answer = "winter";
    }
    if (month > 1 && month < 5) {
      answer = "spring";
    }
    if (month > 4 && month < 8) {
      answer = "summer";
    }
    if (month > 7 && month < 11) {
      answer = "autumn";
    }
    return answer;
  } else {return 'THROWN'};
  
};
