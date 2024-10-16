/*
Array Copy In JS
*/

const arr = [1, 2, 3, 4, 'Five', {"six":6}, [7, 8, 9, 10]]

// Shallow Copy of Array
const arrB = [...arr];

console.log("Original Array: ", arr)
console.log("Shallow Copy: ", arrB)

arrB.splice(1, 3)