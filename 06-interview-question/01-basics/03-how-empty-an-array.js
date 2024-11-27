/**
 * How to empty an array in JS? Don't reset to new array, don't loop to pop new array.
 */

let arr1 = [9,8,7,6,5,4, 3, 2,1]

// console.log(arr1);
// arr1 = [];
// console.log(arr1);

arr1.length = 0
console.log(arr1)
