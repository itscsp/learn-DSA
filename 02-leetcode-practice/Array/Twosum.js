/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // [1, 2, 3]

    for(let i = 0; i < nums.length; i++){
        // console.log(nums[i])
        for(let j = i+1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
                // console.log(nums[i], nums[i+1])
                return[i, j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
