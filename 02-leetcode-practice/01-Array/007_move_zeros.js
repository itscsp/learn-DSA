var moveZeroes = function(nums = [0,1,0,3,12]) {
    zeroValueIndex = []
    nonZeroValueIndex = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            zeroValueIndex.push(nums[i])
        } else {
            nonZeroValueIndex.push(nums[i])
        }
    }
    nums = [...nonZeroValueIndex, ...zeroValueIndex]

    console.log(nums)
};

moveZeroes()