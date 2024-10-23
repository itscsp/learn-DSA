const removeDublicate = (nums = [0,0,1,1,1,2,2,3,3,4]) => {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        // console.log("K-1",nums[k-1], "i",nums[i])
        if (nums[i] !== nums[k - 1]) {
            // console.log("i",nums[i])

            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }
    // console.log(nums)
    return k;
}

console.log(removeDublicate())