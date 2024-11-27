/**
 * Write a JavaScript function that accept a string as a parameter and convert the first letter of each word of the string in upper case
 */

let str = 'each word of the string in upper case' 

function firstLetterCaseConverter(str){
    let convertedSentense = ''
    let split = str.split(' ');

    for(let i = 0; i < split.length; i++){
        convertedSentense += split[i][0].toUpperCase() + split[i].slice(1).toLowerCase() + ' ';
    }

    return convertedSentense
}

console.log(firstLetterCaseConverter(str))