/**
 * Question 1: sum of all natural numbers from 1 to n
 */

// sum of 1 to 5: 15

function sumOfNaturalNumber(num) {
    // let sum  = 0
    // for(let i = 1; i <= num; i++){
    //     sum = sum + i;
    // }
    console.log(`Sum of all natural numbers from 1 to ${num}:`, num*(num+1)/2);
}

sumOfNaturalNumber(5);