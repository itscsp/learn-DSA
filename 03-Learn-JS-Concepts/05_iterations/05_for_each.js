// For Each Loop

let sampleArray = [
    {id: 101, name:"Chethan", age: 24},
    {id: 102, name:"Bobu", age: 34},
    {id: 103, name:"Kinni", age: 54},
    {id: 104, name:"appe", age: 21},
    {id: 105, name:"chiku", age: 6},
]


sampleArray.forEach(GetArrayElement) // Using function reference

function GetArrayElement(item) {
    console.log(item?.name)
}

sampleArray.forEach((item)=> console.log(item?.age)) // Using array function

sampleArray.forEach((item, index, arr)=>{
    console.log(`Item: ${item.name}`) // Print Items of array
    console.log(`Index: ${index}`) // Print index of array like 0, 1, 2, ...
    console.log(`Arr: ${arr}`) // Print complete array
})
