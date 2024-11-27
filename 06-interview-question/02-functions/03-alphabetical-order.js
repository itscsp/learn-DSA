/**
 * Write a JavaScript function that returns a passed string with letters in alphabetical order
 * 
*/

function alphabetical_ordeer(str) {
    return str.split('').sort().join('');
}

// console.log(alphabetical_ordeer("apple"))

//split string into array

function stringSpliter(str) {
    let char = []

    for(let i = 0; i <= str.length-1; i++ ){
        char.push(str[i]);
    }

    return char;
}

//Sort element in bubble sort

function bubbleSort(element){
    for(let i = 0; i < element.length; i++){
        // console.log("Element I: ", element[i])
        // console.log("Element J: ",element[j])
        for(let j = 0; j < element.length - i - 1; j++){
            if(element[j] > element[j+1]){
                // console.log("Elements",element[j], element[j+1])
                let temp = element[j];
                element[j] = element[j+1];
                element[j+1] = temp
            }
        }
    }
    return element;
}

function stringJoiner(arr) {
    let sortedSte = '';

    for(let i = 0; i<arr.length; i++){
        sortedSte += arr[i];
    }

    return sortedSte;
}

// console.log(stringSpliter("Hello"))

console.log(stringJoiner(bubbleSort(stringSpliter("apple"))))