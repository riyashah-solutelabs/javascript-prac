var firstMissingPositive = function(nums) {
//   const set = new Set(nums); // convert the array to a set to remove duplicates
//   let i = 1;
//   while (set.has(i)) {
//     i++; // increment i until it is not in the set
//   }
//   return i; // return the smallest missing positive integer
    // nums.sort((a,b) => a-b);
    // let i = 0;
    // let k = i+1;
    // while(i<=nums.length+1){
    //     console.log(nums[0],(k));
    //     if(nums[i] === k){
    //         k++;
    //     }
    //     return k+1;
    // }
//     const set = new Set(nums); // convert the array to a set to remove duplicates
//   let i = 1;
//   while (nums.includes(i)) {
//     i++; // increment i until it is not in the set
//   }
//   return i;
// let set = new Set(), result = 1;
//     nums.forEach(element => {
//         if(element > 0){
//             set.add(element)
//         }
//     });
//     while(set.has(result)){
//         ++result
//     }
//     return result
let next = 1;

  let i = 0;

  while (i < nums.length) {
    console.log(i);
    console.log(next,nums[i]);
    if (next === nums[i]) {
        console.log(next,nums[i]);
      next++;
      i = 0;
    } else {
      i++;
    }
  }

  return next;
};
nums = [1,4]
console.log(firstMissingPositive(nums));