// 6. Find the missing number from sorted array
// with O(n) complexity

function findMissingNumber(arr) {
    let sum = 1; 
    let c = 2;
    for (let i = 0; i < arr.length; i++) {
      sum = sum - arr[i] + c;
      c++;
    }
  
    return sum;
  }
  
  const arr = [1,2,4,5,6,7,8];
  const missingNumber = findMissingNumber(arr);
  
  console.log(missingNumber);