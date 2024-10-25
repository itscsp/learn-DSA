/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElements = {}
    nums.map((item) => {
        if(majorityElements[item]){
            majorityElements[item] += 1;
        } else {
            majorityElements[item] = 1;
        }
    })

    let big = 0
    let bigKey = 0

    for (const key in majorityElements) {
        if (majorityElements.hasOwnProperty(key)) {
            if(big < majorityElements[key]){
                big = majorityElements[key]
                bigKey = Number(key)
            }

        }
    }

    return bigKey
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))