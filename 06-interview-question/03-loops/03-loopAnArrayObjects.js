/**
 * Loop an array of object and remove all object which don't have gender's value male
 */

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
  
// console.log(people.filter((item) => item['gender'] == "Male"))

/*
 - First count non male genders in array of object
 */

 let count = 0;
 people.forEach(function(element) {
    if(element.gender !== 'Male') count++;
 })

 console.log(count)


/*
 - Remove one element which is not male element
 */
for(let i = 0; i < count; i++){
    for(let j = 0; j < people.length; j++){

        if(people[j].gender !== 'Male'){
            people.splice(j, 1)
        }
    }
}

console.log(people)


  