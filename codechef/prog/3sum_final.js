function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) j++; // skip duplicates
          while (j < k && nums[k] === nums[k + 1]) k--; // skip duplicates
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums)); // [[-1, -1, 2], [-1, 0, 1]]
  