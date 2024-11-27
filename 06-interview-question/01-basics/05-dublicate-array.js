let arr = [1, 2, 3, 5]

function dublicate(arr){
    return [...arr, ...arr]
}

function concatMethod(arr) {
    return arr.concat(arr)
}

console.log(dublicate(arr))
console.log(concatMethod(arr))

