// 4. Find the pairs of array element for which sum is equal
// to given target value (Two Sum Problem)
// Input
// let arr = [1, 2, 3, 4, 6, 7, 9, 8];
let arr = [1, 1, 1, 1];

function twoSum(arr,target){
    const s = {};
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const remain = target - arr[i];
      if (remain in s) {
        result.push([arr[i],remain]);
      }
  
      // s.push(arr[i]);
      s[arr[i]] = i;
      // console.log(s);
    }
    return result;
  }

// console.log(twoSum(arr, 9));
console.log(twoSum(arr, 2));

// Output: [[6, 3], [7, 2], [8, 1]];