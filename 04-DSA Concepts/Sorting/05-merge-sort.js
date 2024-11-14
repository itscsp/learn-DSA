/**
 * Steps
 * 1. First divide arr with mid value using recursion untill length < 2
 * 2. Then merge them by comparing left and right
 */

const mergeSort = (arr) => {
    if(arr.length < 2){
        return arr
    }
    console.log(arr.length)
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)


}

let merge = (left, right) => {
    console.log('Left:',left)
    console.log('Right:',right)

    let result = []
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    while(leftIndex < left.length){
        result.push(left[leftIndex])
        leftIndex++;
    }


    while(rightIndex < right.length){
        result.push(right[rightIndex])
        rightIndex++;
    }

    return result;
}
mergeSort([29, 10, 8, 16, 37, 14, 45, 4])
// console.log(...mergeSort([29, 10, 8, 16, 37, 14, 45, 4]))