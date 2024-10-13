// How do you create an array in JavaScrit?
const arr = [1, 2, 3, 4, 5, "Five", {number: "Six"}, [7, 8, 9, 10]]

// console.log(arr) 

// How do you access the first and last element of an array?
console.log(arr[0]) // Time complexity of this operation is 0(1)
const firstElement = arr[0]
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];

console.log("First element: ", firstElement, "| Array length: ",arrLength, "| Array last element: ",lastElement)

// How do you remove the last element from an array?
const lastElementPoped = arr.pop();
console.log(arr);
console.log("Last poped element: ", lastElementPoped);


// How do you add element to end of an array?

arr.push(7) // O(1)
console.log(arr)

// How do you add an element to start of an array?
arr.unshift(0)
console.log(arr)

// How do you remove an element to start of an array?
arr.shift() // O(n)
console.log(arr)