/**
 * Question 3: Count the number of digits of a number
 */

// 9854: 4

function countLength(num){
    let initialNumber = num
    let length = 0
    num = Math.abs(num)
    do{
        num = Math.floor(num / 10)
        length++;
    }while(num > 0)

    console.log(`Total the length of : ${initialNumber}: `,length);
}

countLength(-978905704375034)