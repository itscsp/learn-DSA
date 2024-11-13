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

let unSortedArr = [3, 1, 8, 7, 2, 20]

for(let i = 0; i < unSortedArr.length; i++){
    let min = i
    for(let j = i+1; j <= unSortedArr.length-1; j++){
        if(unSortedArr[min] > unSortedArr[j]){
            min = j
        }
    }
    let temp = unSortedArr[i];
    unSortedArr[i] = unSortedArr[min]
    unSortedArr[min] = temp
}

console.log(unSortedArr)
console.log(unSortedArr.sort((a, b) => a-b)) //[ 'Apple', 'Mango', 'mango' ]
