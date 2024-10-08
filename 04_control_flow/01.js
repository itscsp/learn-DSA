//if

/*
    - <
    - >
    - <=
    - >=
    - ==
    - !=
    - ===
    - !==
*/

if(true){
    //code will if condition true.
}

if(2 != 3){
    console.log("Executed.")
}

//if else

if(2 != 3) {
    //code will if condition true.
} else {
    //code will if condition false.
}

/*
Scope in condition
*/

if(2 > 1){
    let power = 10;
    var life = 2
    console.log(`User power ${power} and life remaining: ${life}`)
}

// console.log(`User power ${power}`) // power is undefined.
console.log(`Life remaining: ${life}`) // life remaining: 2

// Nested if condition
const balanace = 1000

if(balanace < 500) {
    console.log("Less than 750")
} else if(balanace < 750) {
    console.log("Less than 750");
} else if(balanace < 900){
    console.log("Less than 900")
} else {
    console.log("Less than 1200")
}

// && and ||

const isValidUser = true
const isLogedin = true

if(isValidUser && isLogedin){ //if both true
    console.log("Alllow to buy course")
}

if(isValidUser || isLogedin){ // anu one true
    console.log("Alllow logged in");
}