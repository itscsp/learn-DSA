/**
 * Write a JavaScript function to get the number of accurences of each letter in specificed string
 */

function findAccurrences(string){
    let trimedSting = string.trim();
    let letterCounter = {};

    for(let i=0; i<trimedSting.length; i++){
        if(trimedSting[i] != " "){
            if(letterCounter[trimedSting[i]]){
                letterCounter[trimedSting[i]] = letterCounter[trimedSting[i]]+1; 
            } else {
                letterCounter[trimedSting[i]] = 1;
            }
        }
    }
       
    console.log(letterCounter)
}


findAccurrences("    abcabc dadfds sdf ")