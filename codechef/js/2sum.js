const nums = [2,7,11,15] , target = 9;

function twoSum(nums,target){
     const s = {};
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const remain = target - nums[i];
      if (remain in s) {
        result.push(s[remain],i);
      }
      s[nums[i]] = i;
    }
    return result;
}
console.log( twoSum(nums,target));

// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//         return [i, j];
//     }
//     }
// }
// return -1;