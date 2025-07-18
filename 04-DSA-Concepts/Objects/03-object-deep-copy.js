function deepCopy(obj) {
    if(obj == null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for(const key in obj) {
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

const person = {
    name: "Chethan",
    "full name": "Chethan S Poojary",
    age: 24,
    skill: ["JavaScript", "PHP", "Python"],
    project: {
        "portfolio": "https://chethanspoojary.com/"
    },
    code: function() {
        return "Start coding"
    },
    walk: () =>{
        return "start walking"
    }
}

const deepCopyofPerson = deepCopy(person)
person.project.portfolio = "Helllo";
console.log(deepCopyofPerson)

