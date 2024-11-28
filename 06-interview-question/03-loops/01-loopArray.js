/**
 * Loop an array and add all memebers of it
 */

let arrayElement = [9,8,7,6,5,4,3,2,1]
let sumOfArray = 0
arrayElement.map(item => {
    sumOfArray = sumOfArray + item;
})

console.log(sumOfArray)