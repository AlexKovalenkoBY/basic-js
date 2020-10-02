/* eslint-disable no-unused-vars */
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats_Array) {
    /*countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3*/

    let cats = 0;

    let cat = "^^";

    for (let i = 0; i < cats_Array.length; i++) {
        for (let j = 0; j < cats_Array[i].length; j++) {
          
            if (cats_Array[i][j] === cat) {
                cats = cats + 1;
            }
            
        }
    }

    return cats;
};
