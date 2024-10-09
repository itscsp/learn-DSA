

/**
 * Question 3: Find missing number
 * Example: [3, 0, 1]
 */

function findMissing(number){
    let numberTotal = 0
    let total = 0
    // Find big number in given seris
    let max = number[0]

    number.forEach((element, index) => {
        if(element > max){
            max = element
        }
        numberTotal = numberTotal + element;
    });

    total = max*(max+1)/2

    console.log("Missing: ", total - numberTotal);

}

findMissing([0, 1, 2,3,4,6,7, 8, 9])

//Optimized solution

function findMissing2(nums) {
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
    }

    return nums.length*(nums.length+1) /2 - sum;
}

console.log(findMissing2([0, 1, 2,3,4,6,7, 8, 9]));