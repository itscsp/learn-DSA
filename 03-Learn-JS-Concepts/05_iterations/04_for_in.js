// How to loop object

const myObject = {
    js: "JavaScript",
    cpp: 'C++',
    rb: "Ruby",
    php: "Hypertext preprocessor"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

/*
Can we use for in for array
*/

let sampleArray = [1, 2, 3]

for (const key in sampleArray) {
    console.log(sampleArray[key])
}