const arr = [11, 44, 55, 67, 87, 89, 90, 100]

function binarySearch(items, target) {
    let start = 0;
    let end = items.length - 1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);    

        if(items[mid] === target){
            console.log("Mid if items:",mid)
            return mid;
        } else if(items[mid] > target){
            console.log("Mid if items[mid] > target:",mid)
            end = mid-1
        } else {
            console.log("Mid if items[mid] < target:",mid)
            console.log(mid)
            start = mid + 1
        }
    } 

    return -1;

}

// console.log(arr[binarySearch(arr, 90)])

const BinarySearchRecur = (arr, target) => {
    return binarySearchUsingRecur(arr, target, 0, arr.length);
}

function binarySearchUsingRecur(items, target, start, end) {
    if(start > end)
        return -1

    let mid = Math.floor((start+end)/2);

    if(items[mid] === target){
        return mid;
    } else if(arr[mid] > target) {
        return binarySearchUsingRecur(arr, target, start, mid-1);
    } else {
        return binarySearchUsingRecur(arr, target, mid+1,end);
    }
}


console.log(arr[BinarySearchRecur(arr, 11)])
