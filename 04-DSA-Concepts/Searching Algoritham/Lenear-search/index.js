const arr = [1, 0, 3, 4, 5, 6, 7, 8]

const leanerSearch = (arr, target) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return arr.indexOf(target);
        }
    }

    return -1;
}

console.log(leanerSearch(arr, 7))