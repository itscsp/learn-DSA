
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s=["h","e","l","l","o"]) {
    let left = 0
    let right = s.length - 1

    
    while(left < right){
        const temp = s[left];   // Store the left character
        s[left] = s[right];     // Assign the right character to the left
        s[right] = temp;   
        left++
        right--
    }
console.log(s)

};

reverseString()