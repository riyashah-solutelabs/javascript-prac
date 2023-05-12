// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.

// Example 2:

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1
// Explanation:
// Max subarray sum is -1 
// of element (-1)

// let arr = [-1,-2,-3,-4] , n=4;
let arr = [-2 ,1 ,-3, 4 ,-1, 2, 1, -5, 4] , n=9;

function maxSubarraySum(arr, N){
    // code here
    let sum = 0, max = 0;;
    for(let i=0;i<N;i++){
        if(max == 0) max=arr[i];
        sum += arr[i];
        console.log("sum " ,sum);
        max = Math.max(sum,max);
        console.log("max ",max);
        if(sum < 0){
            sum = 0;
        }
    }
    return max;
} 

console.log(maxSubarraySum(arr,n));