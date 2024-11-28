/**
 * In an array of numbers and strings, only add those memmbers which are not string
 */

let stringNumber = ['safsadf', 6, 'asdasaf', 6, 'awqer',6, 'asfsdfa', 6]
let sumOfNumber = 0
stringNumber.forEach(element => {
    if(typeof(element) == 'number'){
        sumOfNumber = sumOfNumber+element
    }
})

console.log(sumOfNumber)