/**
 * Write a JavaScript program to shuffle an array
 */

function shuffleArray(arr){

    for(let i =0; i< arr.length; i++){
        let randomNumber = Math.floor(Math.random() * arr.length)
        let temp = arr[arr.length-1];
        arr[arr.length-1] = arr[randomNumber];
        arr[randomNumber] = temp;
    }
    return arr;
}

console.log(shuffleArray([0,1,2,3,4,5,6,7,8,9]));
console.log(shuffleArray([0,1,2,3,4,5,6,7,8,9]));
console.log(shuffleArray([0,1,2,3,4,5,6,7,8,9]));
console.log(shuffleArray([0,1,2,3,4,5,6,7,8,9]));
