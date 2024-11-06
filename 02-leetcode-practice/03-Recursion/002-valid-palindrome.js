/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log(s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
};

isPalindrome("A man, a plan, a canal: Panama")