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

// Compare two strings
let anotherName = '    Z  Z Z    '
console.log(userName.localeCompare(anotherName)) // -1

// Replace S with Shanthappa
let newName = userName.replace("S", "Shanthappa")
console.log(newName)

// Get part of the string
console.log(newName.substring(8, 18)) // Shanthappa
console.log(newName.slice(-7, -1)) // Poojar
console.log(newName.search("Chethan")) // 0

// Return substring array
console.log(newName.split("")) // [ 'Chethan', 'Shanthappa', 'Poojary' ]
let subString = newName.split("")

// Join the array into string
console.log(subString.join("")) // Chethan Shanthappa Poojary

//Find start and end of the string.
console.log(newName.startsWith("Chethan"))
console.log(newName.endsWith("Poojary"))

// How to remove white space in string
console.log(anotherName.length) // 14
let trimStr = anotherName.trimEnd() // It remove only starting and ending white space
console.log(trimStr, trimStr.length) // 6



