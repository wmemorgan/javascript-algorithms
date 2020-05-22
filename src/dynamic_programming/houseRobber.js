/**
 * House Robber
 * https://leetcode.com/problems/house-robber/
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
/*----ALGORITHM----*/
// Initialize stash array
// Iterate through nums start at 3
    // nums[i-3] + nums[i] += s

// return stash


var rob = function (nums) {
    // Edge cases
    if (!nums || nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])   

    const stashOptions = [nums[0], Math.max(nums[0], nums[1])]
    let maxAmount = stashOptions[1]
    for (let i = 2; i < nums.length; i++) {
        let currentStash = stashOptions[i-2] + nums[i]
        maxAmount = Math.max(maxAmount, currentStash);
        stashOptions.push(maxAmount);
    }

    return maxAmount
};


// const nums = [1, 2, 3, 1];
const nums = [2, 7, 9, 3, 1];
// const nums = [1, 2]
// const nums = [0]
console.log(rob(nums))