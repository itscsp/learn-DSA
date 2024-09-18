const marvel_heros = ["Thor", "Iron Man", "Spiderman"]
const dc_heros = ["Super man", "bathman", "flash"]

//This is not best pratice to merge array

// marvel_heros.push(dc_heros); // [ 'Thor', 'Iron Man',  'Spiderman', [ 'Super man', 'bathman', 'flash' ]
// console.log(marvel_heros);

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Spred Operator in Array
// const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros);

// Flat method in array
const number_array = [1, 2, 3, 4, [5, 6], [7, [8, 9], 10] ]
const number_array2 = number_array.flat(Infinity)
// console.log('Multi Array:', number_array);
// console.log('Falt Array:', number_array2);

// Checking is array
// console.log("Is array: ",Array.isArray("Me"));

// Creating array from string
console.log("String to Array: ", Array.from("Iam array"));
console.log(Array.from({name: "Chethan"})); // this will create an empty array


// Creating array using "of"
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("Creating array using 'to' : ", Array.of(score1, score2, score3));

