
// function factorial(n) {
//     if(n == 0){
//         return 1;
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(8))



function sumOfArray(arr){
    if(arr.length === 0){
        return 0;
    }

    return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1))
}

console.log(sumOfArray([12, 45, 67, 89, 23]))


// Find fibonaci series


