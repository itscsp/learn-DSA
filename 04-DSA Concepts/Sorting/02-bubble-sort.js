
function bubbleSort(arr){
    let swapped;
    do{
        swapped = false

        for(let i = 0; i < arr.length-1; i++){
            console.log(arr[i])
            if(arr[i] > arr[i+1]){
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i] = temp
    
                [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true
            }
        }
    } while(swapped);
    console.log("Final Result: ",arr)

}


bubbleSort([3, 1, 8, 7, 2, 20])
