/**
 * Array in JavaScript
 */

let newArray1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let newArray2 = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
let newArray3 = ["a", "b", "c", "d"]


// console.log("Array example 1: ",newArray1)
// console.log("Array example 2: ",newArray2)
// console.log("Array example 3: ",newArray2)

// Array methods
/**
 * 1. Push
 * 2. Pop
 * 3. unshift
 * 4. shift
 */

// 1. Push
newArray1.push(10); //add 10

// 2. Push
newArray1.pop(); // remove 10, this remove last emenent from array.

// console.log(newArray1);

// 3. unshift 
newArray3.unshift("1")
// console.log(newArray3); //["1", "a", "b", "c", "d"]

// 2. shift
newArray3.shift()
// console.log(newArray3); // ["a", "b", "c", "d"]


/*
Array Methods
1. includes
*/

// console.log(newArray1.includes(0));

// Slice and Splice

// Slice
console.log("Original Array Before Method:", newArray1);
console.log("Original Array Slice:", newArray1.slice(1, 4));
console.log("Original Array After Method:", newArray1); // This method will not change main array.
console.log("---------------------------------------------")
// Splice
console.log("Original Array Before Method:", newArray2);
console.log("Original Array Slice:", newArray2.splice(1, 4));
console.log("Original Array After Method:", newArray2); // This method will change main array.
