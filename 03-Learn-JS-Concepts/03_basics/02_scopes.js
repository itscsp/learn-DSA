/**
 * Scopes in JS
 */

var a = 10; //function scoped
let b = 100; // block scoped
const c = 1000;

if(true){
    var a = 0; // This will override a: function scoped
    let b = 10;// This will not override b: block scoped

}

console.log("Value of a:", a);
console.log("Value of b:", b);
console.log("Value of c:", c);


