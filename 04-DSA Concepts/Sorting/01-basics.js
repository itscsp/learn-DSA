//Sorting in JS

let arr = [-7,-2,100, 5]

console.log(arr.sort()) // [-2, -7, 100, 5]
/* How it is possible: 
    This convert number into string an sort them*/
console.log(arr.sort((a, b) => a-b)) // [-2, -7, 5, 100]


//Sort an array of string
const strArr = ['Mango', 'Apple', 'mango']
console.log(strArr.sort()) //[ 'Apple', 'Mango', 'mango' ]

// Inbuilt function 
// arr.sort()