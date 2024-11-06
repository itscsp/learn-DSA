/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringArray = s.trimEnd().split(" ")
    return stringArray[stringArray.length-1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))

var lengthOfLastWord1 = function(s) {
    let length = 0;
    let inWord = false;
    
    // Traverse the string in reverse
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        
        if (char === ' ' && inWord) {
            // If we encounter a space after starting a word, break out
            break;
        } else if (char !== ' ') {
            // If the character is not a space, we're in a word
            inWord = true;
            length++;
        }
    }
    
    return length;
};

// Test the function
console.log(lengthOfLastWord1("   fly me   to   the moon  "));  // Output: 4

