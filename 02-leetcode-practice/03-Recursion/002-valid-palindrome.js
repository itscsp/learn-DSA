/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    if(filteredString.length <= 1){
        return true;
    }
    if(filteredString[0] !== filteredString[filteredString.length-1]){
        return false
    }
    return isPalindrome(filteredString.slice(1,-1))
    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))