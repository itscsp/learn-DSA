function stringPalChecker(str) {
    let reverse = str.split('').reverse().join('')

    return reverse === str
}

var isPalindrome = function(s = "A man, a plan, a canal: Panama") {
    const newStr = s.toLowerCase().replace(/^a-z0-9/g, '');

    return newStr;
};

console.log(isPalindrome())