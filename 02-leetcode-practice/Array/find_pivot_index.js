
const findPivotIndex = (nums = [1, 7, 3, 6, 5, 6]) => {

    
    nums.forEach((item, indx) => {
        let leftSum = 0
        let rightSum = 0
        for(let i = indx; i < nums.length; i++){

            
            if(indx === i){
                continue
            }
            console.log("index", indx, "i", i)
            
                // if(i < nums.length){
                    rightSum += nums[i]
                // } 
                // console.log(nums[i])
            
        }
console.log('--------------------------------')
        for(let i = indx; i >= 0; i--){
            if(indx === i){
                continue
            }
            // if(i === indx){
            //     continue;
            // }
            // if(i < nums.length){
                leftSum += Number(nums[i])
            // } 
            console.log(nums[i])
        
    }
    console.log('****')


       

        if(rightSum === leftSum){
            console.log(rightSum)
            console.log(leftSum)

            // console.log(indx)
        }



    })
}
findPivotIndex()