var removeElement = function(nums=[3, 2, 3, 2], val=3) {
    let k = 0

    for(let i = 0; i < nums.length;i++){

        if(nums[i] != val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
  
};

removeElement()