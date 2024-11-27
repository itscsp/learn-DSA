function stringPalChecker(str) {
    let reverse = str.split('').reverse().join('')

    return reverse === str
}

console.log(stringPalChecker('lool'))