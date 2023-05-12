// var largestNumber = function(nums) {
//     let reg = /[*0]/;
//     nums.sort().reverse();
//     console.log(nums);
//     if(nums.includes(reg)){
//         console.log(nums);
//     }
//     console.log(nums.join(""));
// };
// let nums = [10,2]
// nums = [3,30,34,5,9]
// console.log(largestNumber(nums));
const largestNumber = function(nums) {
    const sorted = nums.sort((a, b) => {
      const num1 = "" + a + b;
      const num2 = "" + b + a;
    //   console.log(num2,num1);
    //   console.log(num2-num1);
      return num2 - num1;
    });
    console.log(sorted);
    if (sorted[0] === 0) return "0"; // edge case for all 0's
    
    return sorted.join("");
    // const sorted = nums.map(String).sort((a, b) => (b + a) - (a + b));
    // console.log();
    // if (sorted[0] === "0") return "0"; // edge case for all 0's
    // return sorted.join("");
  }
  
  // Example usage:
//   const nums = [10, 2];
  nums = [3,30,34,5,9]
  console.log(largestNumber(nums)); // "210"
  

  let nu = ["12","177","21","30","3","23","9","2","20","34"]
  nu.sort((a,b) => {
    let n1 = ""+a+b;
    let n2 = ""+b+a;
    return n2-n1
  });
// nu.sort()
  console.log(nu);