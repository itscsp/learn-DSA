function retrieve(arr = [], n=1) {
    if(n <= arr.length){
        for(let i=0; i < n; i++){
            console.log(arr[i])
        }
    } else {
        console.log('Invalid N')
    }
}
// retrieve([1, 2, 3, 4, 5], 5)


function retrieve2(arr = [], n=1) {
    if(n <= arr.length){
        for(let i=0; i < n; i++){
            console.log(arr[arr.length - 1 - i])
        }
    } else {
        console.log('Invalid N')
    }
}
retrieve2([1, 2, 3, 4, 5], 2)