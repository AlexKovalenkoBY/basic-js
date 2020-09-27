const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  function createDreamTeam (teamList) {
    let teamName = "";
    for ( let i=0; i<teamList.length; i++ ){
      teamName.push(teamList[i][1].toUppercase());
    }
    return teamName.sort();
  }
};
