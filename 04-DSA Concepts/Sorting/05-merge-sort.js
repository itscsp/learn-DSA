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
// mergeSort([29, 10, 8, 16, 37, 14, 45, 4])
// console.log(...mergeSort([29, 10, 8, 16, 37, 14, 45, 4]))


/**
 * Optimized solution
 */
const mergeSortInplace = (arr, low, high) => {
    if(low < high) {
        let mid = Math.floor((low + high) / 2);
        mergeSortInplace(arr, low, mid); // left side
        mergeSortInplace(arr, mid+1, high); // right side
        mergeInplace(arr, low, mid, high); // Merge
    }
}

const mergeInplace = (arr, low, mid, high) =>{
    const result = []
    let leftIndex = low,  rightIndex = mid+1;
    while (leftIndex <= mid && rightIndex <= high) {
        if(arr[leftIndex] < arr[rightIndex]) {
            result.push(arr[leftIndex]);
            leftIndex++;
        } else {
            result.push(arr[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex <= mid) {
        result.push(arr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex <= high) {
        result.push(arr[rightIndex])
        rightIndex++
    }

    for(let i = low; i<=high; i++){
        arr[i] = result[i-low];
    }
}

let arr = [29, 10, 8, 16, 37, 14, 45, 4]
mergeSortInplace(arr, 0, arr.length - 1)
console.log(arr)
