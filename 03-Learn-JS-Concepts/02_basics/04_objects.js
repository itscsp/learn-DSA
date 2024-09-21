// How to work with singleton objects

const newObject = new Object();
const oneMoreObject = {}

newObject.id = 123
newObject.name = "CSP"
newObject.isLoggedin = true


// console.log(newObject)

// How to create object inside object
const anotherObject = {
    email: "abcd@a.com",
    fullname: {
        userFullname: {
            firstname: "Chethan",
            lastname: "S Poojary",
        }
    }
}

// How to access firstname
// console.log(anotherObject.fullname.userFullname.firstname);

// How to add two object and make it one
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// How to get array of object value

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)

//Some methonds in objects

// console.log(Object.keys(newObject)); //return object keys
// console.log(Object.values(newObject)); // return object values
// console.log(Object.entries(newObject)); // return object key and value as array
// console.log(newObject.hasOwnProperty('isLoggedIn')); // check property exists or not

const course = {
    coursename: "js in learning",
    price: "999",
    courseInstructor: "ABCD"
}

// course.courseInstructor
const {courseInstructor:teacher} = course 

console.log(teacher)

