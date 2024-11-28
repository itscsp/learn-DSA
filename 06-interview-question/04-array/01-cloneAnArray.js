// function cloneArr(arr) {
//     return [...arr]
// }

let arr = [1, 2, 3, 4, 5]

// let newArr = cloneArr([1, 2, 3, 4]);
let newArr = JSON.parse(JSON.stringify(arr))
console.log(newArr)


const people = [
    { name: "John", gender: "Male" },
    { name: "Alice", gender: "Female" },
    { name: "Michael", gender: "Male" },
    { name: "Sophia", gender: "Female" },
    { name: "David", gender: "Male" },
    { name: "Emma", gender: "Female" },
    { name: "Daniel", gender: "Male" },
    { name: "Olivia", gender: "Female" },
    { name: "James", gender: "Male" },
    { name: "Isabella", gender: "Female" },
  ];
  
  let newPeople = JSON.parse(JSON.stringify(people))
  newPeople[1].name = "abcd"

  console.log(people)
  console.log(newPeople)
