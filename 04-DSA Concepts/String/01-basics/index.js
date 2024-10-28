/**
 String in javascript
 */
let userName = "Chethan S Poojary"

/* length of string*/
// console.log(userName.length)

/* Access string element */
// console.log(userName.charAt('8')) //S
// console.log(userName[2])
// console.log(userName.charCodeAt(8)) // 83 (ASCII)

// console.log(userName.includes('S')) // true
// console.log(userName.indexOf("S")) // 8

/**
 * How to find last index
 */

console.log(userName.lastIndexOf('P')) // 

/**
 * Get value include without inbuilt function
 */

for(let i = 0; i < userName.length; i++) {
    // console.log(userName[i])
    if(userName[i] == 'y'){
        console.log('true');
    } else{
        if(i >= userName.length-1){
            console.log('false');
        }
    }
}


const str = "Hello, world! world!";
console.log(str.indexOf("world")); // 6 (first occurrence)
console.log(str.lastIndexOf("world")); // 13 (last occurrence)