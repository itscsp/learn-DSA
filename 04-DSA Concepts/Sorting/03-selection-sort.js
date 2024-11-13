// Selection Sort

let arr = [3, 1, 8, 7, 2, 20]

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i
        for(let j = i+1; j < arr.length; i++){
            if(arr[j] < arr[minIndex]){
                arr[minIndex] = arr[j]
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr
}


console.log(selectionSort(arr))