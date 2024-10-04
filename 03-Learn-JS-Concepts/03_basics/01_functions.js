/**
 * Functions in JS
 */

// Function Definition
function iamfunction() {
    console.log("I am function")
}


function awesomeFunction(coolThings) {
    // ..
    return coolThings;
   }

   
// iamfunction() //function reference
const returnValue = awesomeFunction("I am feelinng amazing.") // function callZ
// console.log(returnValue)


/* Rest Operator */

function calculateCartPrice([a,...num]){
        console.log(a)
        console.log(...num)

}

calculateCartPrice([100, 200, 300])

/* Handle Object */
let user = {
    name: "Chethan",
    role: "Admin"
}
getUser(user);
function getUser(userData = {}){
    console.log(`User name is ${userData.name} and his role ${userData.role}`)
}

/** Handle Array */
let userArray = ['Chethan', 'Test']
getArrayUser(userArray);
function getArrayUser(userData = []){
    console.log(`Users: ${userData.join(', ')}`)
}
