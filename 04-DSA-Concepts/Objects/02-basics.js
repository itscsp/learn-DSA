// Shallow and deep copy of object
const person = {
    name: "Chethan",
    "full name": "Chethan S Poojary",
    age: 24,
    skill: ["JavaScript", "PHP", "Python"],
    project: {
        "portfolio": "https://chethanspoojary.com/"
    },
    code: function() {
        return "Start coding"
    },
    walk: () =>{
        return "start walking"
    }
}

// Shallow copy
const person2 = person

// Deep copy
const person3 = Object.assign({}, person)
/**Note: this will not do nested deep copy */

// Objects Methods

// Freeze and seal method of Object

//Freeze: Lock the object
/** In freeze we can't add, delere and update */
Object.freeze(person3)
person3.location = "Kudla"
console.log(person3)// We will not get location in person3.Becouse we freeze the value

//How to check person is frozen
console.log(Object.isFrozen(person3)) // true

// Seal
/** In seal method i can't do add and delete but can update the value */

Object.seal(person)
person.name = "Chethan S Poojary"
console.log(person)// We will not get location in person3.Becouse we freeze the value
console.log(Object.isSealed(person)) // true


