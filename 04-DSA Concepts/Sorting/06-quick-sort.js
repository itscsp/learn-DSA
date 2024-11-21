
// Quick Sort in JavaScript

const quickSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let left = [], right = []

    for (let i = 0; i < arr.length; i++){
        if(pivotIndex === i){
            continue;
        }

        if(arr[i] < arr[pivotIndex]){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
}

let array = [29, 10, 8, 16, 37, 14, 45, 4]
console.log(quickSort(array))

