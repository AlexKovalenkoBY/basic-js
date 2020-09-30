const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
 // throw new CustomError('Not implemented');
  
  function countCats (cats_Array) {
    /*countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3*/
    let cats = 0;
    
    let cat = '^^';
    for (let i=0;i<cats_Array.length; i++){
      for (let j=0; j < cats_Array[i].length;j++)
      { if ( cats_Array[i][j].toString()==cat.toString() ) {
        console.log(""+i+";"+j);
        cats = cats+1;

      }
    } 
    }

    return cats;

  }
  
};
