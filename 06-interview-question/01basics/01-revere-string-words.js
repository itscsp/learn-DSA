/**
 * Given a string, reverse each word in the sentence
 */

let text = "Hello World";

let arrayOfText = text.split(' ');

let result = arrayOfText.map((item) => {
    let arrayOfWord = item.split('');
    let reverseArray = arrayOfWord.reverse()

    return reverseArray.join('')
})

reverseWord = result.join(' ');

console.log('Reverse word of string:', reverseWord)