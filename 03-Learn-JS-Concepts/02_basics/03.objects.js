// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key") // how to access Symbols inside object as key

// How to create js objets
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How access object values in differnent case
console.log(JsUser.email)
console.log(JsUser['email'])
console.log(JsUser['full name'])
console.log(JsUser[mySym])

// How to update value
JsUser.email = "chethans@gmail.com"
console.log(JsUser.email)

// We can freeze object
// Object.freeze(JsUser)

JsUser.email = "newchethans@gmail.com" // this not edit object
console.log(JsUser.email)

//We can write function inside object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();