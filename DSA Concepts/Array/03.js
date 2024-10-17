/*
Array Copy In JS
*/

const arr = [1, 2, 3, 4, 'Five', {"six":6}, [7, 8, 9, 10]]

// Shallow Copy of Array
const arrB = arr;

// console.log("Original Array: ", arr)
// console.log("Shallow Copy: ", arrB)

// arrB.splice(1, 3)

// Deep copy of Array
const arrC = [...arr];
const arrD = Array.from(arr);


arrC[1] = 10;

// console.log("Original Array: ", arr)
// console.log("Deep Copy Copy: ", arrC)
// console.log("Deep Copy Copy: ", arrD)


// How to add two array in javaScript

const newArray1 = [...arr, ...arrB]
const newArray2 = arr.concat(arrB)

// console.log(newArray1)
// console.log(newArray2)

