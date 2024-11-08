/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    let bracketsMap = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }

    for(let char of s){
        console.log(char)

        if(bracketsMap[char]){
            let topElement = stack.pop()

            if(topElement !== bracketsMap[char]){
                return false
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0;
};