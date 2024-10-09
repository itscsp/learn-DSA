

/**
 * Question 2: Generate Fibonacci Number
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */

let fibonacciNumber = [];

function printFibonacci(number){

    if(number < 2) {
        return
    }

    for(let i = 0; i < number; i++){
        if(i == 0){
            fibonacciNumber.push(i)
        } else if(i == 1) {
            fibonacciNumber.push(1, 1)
        } else {
            fibonacciNumber.push(fibonacciNumber[(i-1)] + fibonacciNumber[(i)])
        }
    }

    console.log(...fibonacciNumber);
}

printFibonacci(10)

/**
 * Find last Fibonacci Number
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */


function findLastFib(number){

    if(number < 2) {
        return
    }

    
    let prev = 0, cur = 1, next

    for(let i = 2; i <= number; i++){
        next = prev + cur;
        prev = cur
        cur = next;
    }
    console.log(`Last Fibonacci of number ${number}: `,next)

}

findLastFib(10)
