/**
 * In JavaScript there two type of data types
 * 1. Primitive
 * 2. Non-Primitive
 */

//# Primitive datatypes
/**
 * 7 Types
 * - String
 * - Number
 * - Boolean
 * - null
 * - undefined
 * - Symbols (Make the value unique)
 * - BigInt
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("101")
const id2 = Symbol("102")

console.log(id === id2)


// # Reference or Non-Primitive Type
/**
 * Array
 * Objects
 * Functions
 */

const heros = ["Shakthiman", "naagaraj", "doga"];
console.log("Heros array:", heros)

const  user = {
    name:"Chethan",
    age: 18
}
console.log("User object:", user)

const functionLearn = function(){
    return "I am function"
}

console.log("functionLearn:", functionLearn())