// 5. Find the missing number from unsorted array with
// O(n) complexity
// Algorithm
// 1. Create a variable sum = 1 which will store the missing
// number and a counter variable c = 2.
// 2. Traverse the array from start to end.
// 3. Update the value of sum as sum = sum — array[i] + c and
// update c as c++.
// 4. Print the missing number as a sum.

function findMissingNumber(arr) {
    let sum = 1; 
    let c = 2;
    for (let i = 0; i < arr.length; i++) {
      sum = sum - arr[i] + c;
    //   console.log(sum);
      c++;
    }
  
    return sum;
  }
  
  const arr = [3, 7, 1, 2, 8, 4, 5 , 6 ,10];
  const missingNumber = findMissingNumber(arr);
  
  console.log(missingNumber);