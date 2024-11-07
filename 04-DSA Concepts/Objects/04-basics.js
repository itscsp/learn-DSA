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

//Keys, values, Enteries
// console.log(Object.keys(person)) // Return keys
// console.log(Object.values(person)) // return values
// console.log(Object.entries(person)) // Create array of arrays

//Loop through an object
// for ... in

for(let key in person) {
    console.log(key,":", person[key])
}

console.log(Object.keys(person))

//How to check two object is equal


let person2 = person

console.log("Two object is equal:",Object.is(person, person2))

//Manually
let isFlag = true;
for(let key in person){
    if(person[key] !== person2[key]){
        isFlag = false
    }
}

if(isFlag == )