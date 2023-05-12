/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
     const n = nums.length;
     const res = [];
     for (let i = 0; i < n - 3; i++) {
       for (let j = i + 1; j < n - 2; j++) {
         let l = j + 1;
         let r = n - 1;
         while (l < r) {
           const sum = nums[i] + nums[j] + nums[l] + nums[r];
           if (sum === target) {
             res.push([nums[i], nums[j], nums[l], nums[r]]);
             l++;
             r--;
           } else if (sum < target) {
             l++;
           } else {
             r--;
           }
         }
       }
     }
    //  for (let i = 0; i < res.length; i++) {
    //      res[i].sort((a, b) => a - b);
    //    }
    //    let arr = [...new Set(res.map(JSON.stringify))].map(JSON.parse);
       return res;
 };
nums = [1,0,-1,0,-2,2], target = 0
console.log(fourSum(nums,target));