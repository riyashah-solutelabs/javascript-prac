var maxSubArray = function(nums) {
    // for (let i = 1; i<nums.length; i++) {
    //     nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    // }
    // return Math.max(...nums);
    let max = nums[0]
    let currentSum = nums[0]
    let right  = 0
    while (right < nums.length - 1){
        right++
        if (currentSum < 0) currentSum = nums[right]
        else currentSum += nums[right]
        if (currentSum > max) max = currentSum
    }
    return max
};
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));