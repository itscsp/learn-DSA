/**
 * Scopes in JS
 */

// var a = 10; //function scoped
// let b = 100; // block scoped
// const c = 1000;

// if(true){
//     var a = 0; // This will override a: function scoped
//     let b = 10;// This will not override b: block scoped

// }

// console.log("Value of a:", a);
// console.log("Value of b:", b);
// console.log("Value of c:", c);


/**
 * Scopes and clouses 
 */

function one() {
    let name = "Chethan";

    function two(){
        let website = "chethanspoojary.com";
        console.log('Your name is :', name)
    }

    // console.log(website); //This gives you issue.
    two();
}

// one()

/**
 * Interesting
 */

addOne(5) // we can access this

function addOne(value) {
    return value + 1
}

addTwo(5) // Here we can't
const addTwo = function(value) {
    return value + 2
}


