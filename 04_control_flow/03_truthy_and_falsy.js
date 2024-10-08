/* 
Truthy or Falsy
*/

// let email = "chethan@gmail.com"

if(email){
    console.log("User email exists.")
} else {
    console.log("User email doesn't exists.")
}

/*
falsy values: 0, -0, BigInt 0n, "", null, undefined, NaN, false
*/

/*
truthy values: "0", "false", " ", [], {}, function(){}, 
*/

userData = []

if(userData.length === 0){
    console.log("User is empty.")
}

prices = {}

if(Object.keys(prices).length === 0){
    console.log("Price is empty.")
}

/*
false == 0 // true
false == '' // true
0 == '' // true
*/

// Nullish Coalescing Operator (??): null undefined

let  var1;

var1 = 5 ?? 10
var1 = null ?? 10 //10
var1 = undefined ?? 10 // 10
var1 = add() ?? defaultAdd() // 10

console.log(var1)


// Terniary Operator
// Conditon ? true : false
let user = "b"

console.log(user === "a" ? "Yes" : "No");


