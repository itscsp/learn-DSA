

/**
 * Question 3: Find missing number
 * Example: [3, 0, 1]
 */

function findMissing(number){
    let numberTotal = 0
    let total = 1
    
    number.forEach((element, index) => {
        numberTotal +=element; 
        total = total + index
        console.log(index)
    });

    // for(let i = 0; i < number.length; i++){
    //     console.log(number[i] + number[i+1])

    // }
    console.log(numberTotal);
    console.log(total);

}

findMissing([3, 0, 4, 1, 5])