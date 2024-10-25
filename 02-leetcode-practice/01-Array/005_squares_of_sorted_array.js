/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums = [-4,-1,0,3,10]) {
    // Question: How to change - to plus
    let squareofArr = nums.map(item => item * item)
    // console.log(squareofArr)
    return squareofArr.sort((a, b) => a - b)
};

console.log(sortedSquares())