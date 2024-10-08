// For of
/**
 * For of loop are arrya specific loops
 */

// syntax

// for (const iterator of object) {
    
// }

// const newArray = [10, 11, 22,33, 44,55,66,77,88,99]

// for(const number of newArray){
//     console.log(number);
// }

const greetings = "Hello World!";

for (const char of greetings) {
    if(char == " "){
        continue;
    }
    console.log(`Each char in "${char}"`);
}

// Map

const map = new Map();