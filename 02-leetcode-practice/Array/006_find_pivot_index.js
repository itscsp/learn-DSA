const findPivotIndex = (nums) => {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // rightSum is totalSum - leftSum - current element
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i; // Return the pivot index
        }

        leftSum += nums[i]; // Update leftSum for the next iteration
    }

    return -1; // Return -1 if no pivot index is found
};

// Example usage
const pivotIndex = findPivotIndex([1, 7, 3, 6, 5, 6]);
console.log(pivotIndex); // Output: 3
