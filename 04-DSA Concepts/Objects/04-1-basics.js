// Question 1: find the all player count
const data = {
    id:1,
    name: ['P1', 'P2'],
    next: {
        id:2,
        name: ['P3'],
        next: {
            id:3,
            name: ['P3', 'P4', 'P5'],
            next: {
                id:4,
                name: ['P1', 'P2', 'P4'],
                next: {
                    id:5,
                    name: ['P2', 'P3', 'P5'],
                    next: null
                }
            }
        }
    }
}

let playerCounter = {}

function looper(obj){
    if(obj == null){
        return playerCounter;
    }

    
    for(let i =0; i < obj.name.length; i++){
        if(playerCounter.hasOwnProperty(obj.name[i])){
            playerCounter[obj.name[i]] += 1; 
        } else {
            playerCounter[obj.name[i]] = 1; 
        }
    }
    
    looper(obj.next)
}

looper(data)
console.log(playerCounter)