var findMaxConsecutiveOnes = function(nums) {
    let oneCounter =  0
    let previousOneCounter =  0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            oneCounter +=1;
            if(oneCounter > previousOneCounter){
                previousOneCounter = oneCounter
            } 
        } else {
            oneCounter = 0;
        }
    }

    // console.log(oneCounter);
    console.log(previousOneCounter);

};

findMaxConsecutiveOnes([1,1,0,1,1,1]);
findMaxConsecutiveOnes([1,0,1,1,0,1]);
