/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    // const a = [...nums]
    if (nums.every((item) => item === 0)) {
        return [[0,0,0]];
    } else{
    nums.sort((a,b) => a-b)
        for (let i = 0; i < nums.length - 2; i++) {
            let j = i + 1;
            let k = nums.length - 1;
            while (j < k) {
              const sum = nums[i] + nums[j] + nums[k];
              if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
              } else if (sum < 0) {
                j++;
              } else {
                k--;
              }
            }
          }
      }
          for (let i = 0; i < result.length; i++) {
            result[i].sort((a, b) => a - b);
          }
          let res = [...new Set(result.map(JSON.stringify))].map(JSON.parse);
          return res;
  };
  
  let nums = [-1, 0, 1, 2, -1, -4];

  console.log(threeSum(nums));
  