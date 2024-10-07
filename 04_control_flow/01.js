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

/*
Shortend 


