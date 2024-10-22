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


//QUESTION 2: How to add two array in javaScript

const newArray1 = [...arr, ...arrB]
const newArray2 = arr.concat(arrB)

// console.log(newArray1)
// console.log(newArray2)


//QUESTION 3: How to check if array are equal or not?

const isArrayEqual = (one, two) => {
    // if(one.length !== two.length) {
    //     return false;
    // }   

    // for(i = 0; i < one.length; i++){
    //     if(one[i] !== two[i]){
    //         return false
    //     }
    // }

    // return true;

    // Short method
    return one.length === two.length && one.every((ele, i) => one[i] === two[i])
}

if(isArrayEqual([1, 2, 3], [1, 2, 3])){
    console.log("Array is equal")
} else {
    console.log("Array is not equal")
}

//QUESTION 4: How to sort an array in ascending and desending order?
const unSortedArray = [1, 4, 6, 0, -1, -7, 5]

// Ascending
// unSortedArray.sort()
// console.log(unSortedArray)

// Decending
// unSortedArray.sort((a, b) => b-a)
// console.log(unSortedArray)

// QUESTION 5: How to reverse an array?
unSortedArray.reverse()
// console.log(unSortedArray)


// Map, Filter and Reduce

// Map
let mapArray = [0, 1, 2, 4, 5]
let mapArrayMultiple = mapArray.map((ele, index) => ele*ele)
// console.log(mapArrayMultiple);

// Filter
let filterArray = [0, 1, -10, 2, 20, , -2, 5, -9]
let positiveNumber = filterArray.filter((ele) => ele > 0)
// console.log(positiveNumber);

// Reducer
let reducerArray = [1, 5, 4, 3, 6, 2, 1]
let sumOfArray = reducerArray.reduce((acc, curr) =>  curr + acc, 0)
// console.log(sumOfArray)

// Flat
let nestedArray = [1, 2, 3, [4, [5, [6]], 7], 8, 9]
let flatendArray = nestedArray.flat(Infinity)
console.log(flatendArray)