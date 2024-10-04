/**
 * Question 2: sum of digits if a number
 */

// 9854: 9+8+5+4 = 26

let totalSum = 0

function sumOfDigits(n){
    if(n < 1){
        console.log("Enter number more than 1!")
        return;
    } 

    let getRemainder = n%10; // Example: 981%10 = 1
    let getquotient = n/10; // Example: 981/10 = 98.1
    
    totalSum = totalSum + getRemainder;

    let quotient = Math.floor(getquotient)

    if(quotient > 0){
        sumOfDigits(quotient.toFixed(0));
    } else {
        console.log(`Sum of digits:`, totalSum)
    }
}

sumOfDigits(9854)

/* Optimized Solution */


function sumOfDigitsSolution2(num){
    let sum = 0

    while (num > 0){
        sum += num%10;
        num = Math.floor(num / 10)
    }

    console.log(`Sum of digits:`, sum);
}

sumOfDigitsSolution2(9854)