
/**
 * Question 3: Find is number palindrome or not.
 */

function isPalidrome(value){
    let actualValue = value;

    //Find reverse of value
    /**
     * - 121/10 = 1
     * - Add this to reverse number
     */

    let reverseValue = 0;

    while(value > 0){
        let getRemainder = value % 10;
        reverseValue = reverseValue * 10 + getRemainder ;
        value = Math.floor(value / 10);
    }

    // Compare reversed value with actual value

    if(actualValue === reverseValue){
        console.log(`"${actualValue}" is palindrome number`)
    }else {
        console.log(`"${actualValue}" is not palindrome number`)

    }
}

isPalidrome(121)
isPalidrome(-121)
isPalidrome(132)
