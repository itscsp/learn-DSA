function union(arr1, arr2){
    console.log(new Set(arr1.concat(arr2)))
    return [...new Set(arr1.concat(arr2))]
}

console.log(union([2, 9, 3, 4,5, 7, 6, 1, 8], [2, 1, 9, 3, 4,7, 5, 8, 6]));