// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

function fourSumCount(nums1, nums2, nums3, nums4) {
    let abSums = new Set();
    for (let a of nums1) {
      for (let b of nums2) {
        abSums.add(a + b);
      }
    }
    
    let count = 0;
    for (let c of nums3) {
      for (let d of nums4) {
        let complement = -1 * (c + d);
        if (abSums.has(complement)) {
          count++;
        }
      }
    }
    
    return count;
  }
nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
console.log(fourSumCount(nums1, nums2, nums3, nums4));