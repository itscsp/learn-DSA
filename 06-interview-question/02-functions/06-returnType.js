/**
 * Write a JavaScript functon which accepts an argument and return the type:
 * Note: There are six possible value that typeof return: object, boolean, function, number, string and undefined.
 */

function typeChecker(arg){
    return typeof arg
}

console.log(typeChecker(1))
console.log(typeChecker(true))
console.log(typeChecker([]))
console.log(typeChecker("string"))
console.log(typeChecker({}))
console.log(typeChecker(typeChecker))
