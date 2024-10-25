const arr = [1, 2, 3, 4, 5, "Five", {number: "Six"}, [7, 8, 9, 10]]

// How do you loop through an arrya in JavaScript?
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]) // 1, 2, 3, 4, 5
}

arr.forEach((item, index) => {
    console.log(item, arr[index]) // 1 1, 2 2, 3 3, 4 4
})

for(let x of arr){
    console.log(x) // 1, 2, 3, 4, 5, Five, { number: 'Six'}, [7, 8, 9, 10]
}

// Question 1: How do you check if an element exists in an array?

let element = "Five";

const findElement = (arr, element) => {
    for(let x of arr) {
        if(x === element) {
            return true;
        }
    }
    return false;
}

console.log(findElement(arr, element)); // true
console.log(findElement(arr, 'H')); // false

// JS in built functions
console.log(arr.includes(element)) // true

// Question 1: How do you check if an element exists in an array and return it's index?

function findElementIndex(array, element) {

    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return i
        }
    }

    return false;
}

console.log(findElementIndex(arr, element)) // 5

// JS build in function
console.log(arr.indexOf(element)) // 5

console.log(findElementIndex(arr, 100)) // false


// How to delete, add & update element from specific index

console.log("Array:", arr);
// Delete
arr.splice(1, 3) // this will delete from arr[1] to arr[3]
console.log("Updated Array After Delete:", arr);
// ADD
arr.splice(1, 0, 9, 8, 7, 6)
console.log("Updated Array After Add:", arr);

// UPDATE
arr.splice(1, 3, 99, 88, 66)
console.log("Updated Array After Update:", arr);


// Splice vs slice
let subArr = arr.slice(1, 4) // 4th index excluded
console.log("Slice",subArr)