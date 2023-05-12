/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    let maxIndex = nums[0];
    for (let i = 1; i < n; i++) {
        // if (nums[i] == 0 && i != n && maxIndex == 0) {
        if (i > maxIndex) {
            console.log(i,maxIndex);
            return false;
        }
        maxIndex = Math.max(i + nums[i], maxIndex);
        if (maxIndex >= n - 1) {
        return true;
        }
    }
  return true;
};
let nums = [2,3,1,1,4]
nums = [0,1]
nums = [2,0]
// nums = [3,2,1,0,4]
console.log(jump(nums));