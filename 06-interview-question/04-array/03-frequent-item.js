function freq(arr){
    let freqValue = {}

    for(let i =0; i < arr.length; i++){
        if(freqValue[arr[i]]){
            freqValue[arr[i]]++;
        } else {
            freqValue[arr[i]] = 1
        }
        
    }
    console.log(freqValue)
    let freqItem = 0
    for (const key in freqValue) {
        if(freqValue[key] > freqItem){
            freqItem = key
        }
    }
    return freqItem;
}

console.log(freq([10, 2, 3, 10, 4, 6, 7, 10]))