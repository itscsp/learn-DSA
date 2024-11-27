/**
 * Write a javascript function that reverse a number
 */

function reverseNumber(nums){
    if(nums > 0){
        console.log(Number(nums.toString().split('').reverse().join('')));
    }else{
        return "number should be positive"
    }
}

// reverseNumber(1234)

// Without build in function

function reverseNumberWithLogic2(nums ){
    if(nums < 1){
        return 0;
    }
 
    let lastElement = []
    let remainder = nums;
    while(remainder > 0){
        lastElement.push(remainder%10);
        remainder = Math.floor(remainder/10);
    }

    return Number(lastElement.join(''));


}

console.log(reverseNumberWithLogic2(1234))


function reverseNumberWithLogic3(nums){
   let reverse = 0;

   while(nums > 0){
    let rem = nums % 10;
    reverse = reverse * 10 + rem;
    nums = Math.floor(nums/10);
   }

   return reverse;

}

console.log(reverseNumberWithLogic3(123456789))