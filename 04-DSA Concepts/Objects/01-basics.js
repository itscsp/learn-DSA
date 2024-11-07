// Object in javascript
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


// How to acces object in js
// console.log(person.name)
// console.log(person["name"])
// console.log(person["full name"])

// How to add, delete, update key

//Find the key on object
console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("name2"))

//How to update value
person.name = "Chethan S Poojary"

//How to add new property

person.location = "Mangalore"

console.log(person.location)

//How to delete the value
delete(person.location)
console.log(person)

