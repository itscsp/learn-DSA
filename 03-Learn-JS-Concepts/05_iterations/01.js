// For loop

// let numArray = [10, 11, 22,33, 44,55,66,77,88,99]
// let newObj = new Object()

// for (let i = 0; i < numArray.length; i++) {
//     newObj = {...newObj, [i] : numArray[i]}
// }

// console.log(newObj);

// Print table from 1 to 10

for(let i = 1; i <= 10; i++){
    console.log(`\nTable ${i}`)
    console.log(`-----------------`)

    for(let j = 1; j <= 10; j++){
        console.log(i + ' * ' + j + " = " + i*j)
    }
    console.log(`-----------------`)
}

// For Each

// numArray.forEach((element, index) => {
//     newObj[index] = element + 10;
// });

// console.log(newObj);
