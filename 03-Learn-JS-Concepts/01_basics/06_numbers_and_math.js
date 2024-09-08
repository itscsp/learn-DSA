/**
 * Numbers in JavaScript
 */

// 2 ways to define js 
let number1 = 1000000
let number2 = new Number(number1)

// console.log(number1);
// console.log(number2);

// console.log(number2.toFixed(2))

let afterFixed = number2.toFixed(2);
// console.log(number2.toLocaleString("en-IN")+".00")


/**
 * Math in JavaScript
 */

// console.log(Math)
// console.log("abs in js:",Math.abs(-100)) //conver negative value into positive
// console.log("round in js:",Math.round(100.6)) // Round into in js
// console.log("Ceil in js:",Math.ceil(100.2)) // Round into in js
// console.log("Floor in js:",Math.floor(100.6)) // Round into in js


// console.log("Rondom Values in JS:", Math.floor((Math.random() * 10 + 1)))

// Get randon value from min to max
const min = 50;
const max = 100;

let randomValue = Math.random() * (max - min + 1) + min

console.log(Math.floor(randomValue))

