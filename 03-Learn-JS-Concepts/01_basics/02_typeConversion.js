/**
 * Type conversion in JS
 */

let score = "33"

// console.log("'score' data type: ", typeof score);

let valueInNumber = Number(score);
// console.log("'score' data type: ", typeof valueInNumber);
// console.log("Converted value of score: ", valueInNumber);

/***
 * "33" => 33
 * "33abc" => NaN
 */


// ---------------------------------------
// Boolean Conversion
// ---------------------------------------


let isLoggedIn = "text"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log("'isLoggedIn' data type before conversion: ", typeof isLoggedIn);
// console.log("'isLoggedIn' data type after conversion: ", typeof booleanIsLoggedIn);
// console.log("Converted value of isLoggedIn: ", booleanIsLoggedIn);

/***
 * "text" => true
 * "" => false
 * true => 1, false => 0
 */