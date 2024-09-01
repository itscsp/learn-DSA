/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let outer = 0; outer < nums.length; outer++){
        for(let inner = outer+1; inner < nums.length; inner++ ){
            let result = nums[outer] + nums[inner]
            if(result === target){
                return [outer, inner]
            } 
        }
    }
    return []
};



let nums1 = [2, 7, 11, 15]
let target1 = 9
console.log(twoSum(nums1, target1))

let nums2 = [3, 3]
let target2 = 6
console.log(twoSum(nums2, target2))

let nums3 = [3,2,4]
let target3 = 6
console.log(twoSum(nums3, target3))