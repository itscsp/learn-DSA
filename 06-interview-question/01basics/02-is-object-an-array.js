/**
 * How to check if an object is an array or not.
 */

function checkArray(object){
    if(Array.isArray(object)){
        return true;
    }else {
        return false
    }
}

let data1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let data2 = {number1:1, number2:2, number3:3};

// console.log(checkArray(data1))
// console.log(checkArray(data2))


//Without  build in function

function isArray(arg){
    
    if(typeof arg === 'object' && arg != null && 'length' in arg){


        for(let key in arg){
            if(isNaN(Number(key)) && arg.hasOwnProperty(key)){
                return false
            }
        }

        return true;
    } else {
        return false
    }
}


console.log(isArray(data1));
console.log(isArray(data2));




