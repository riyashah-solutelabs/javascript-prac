// Input:
// N = 10, K = 4
// arr[] = 8 5 10 7 9 4 15 12 90 13
// Output: 
// 10 10 10 15 15 90 90
// Explanation: 
// 1st contiguous subarray = {8 5 10 7}, Max = 10
// 2nd contiguous subarray = {5 10 7 9}, Max = 10
// 3rd contiguous subarray = {10 7 9 4}, Max = 10
// 4th contiguous subarray = {7 9 4 15}, Max = 15
// 5th contiguous subarray = {9 4 15 12}, 
// Max = 15
// 6th contiguous subarray = {4 15 12 90},
// Max = 90
// 7th contiguous subarray = {15 12 90 13}, 
// Max = 90

// let n = 9, k = 3
// arr = [1 ,2 ,3 ,1 ,4 ,5 ,2 ,3 ,6]
// arr = [1 ,1] , n=5;
arr = [1 ,2 ,3 ,4 ,5] , n=5 , k = 4;
function max_of_subarrays(arr, n, k)
{
    // code here
    let result = [];

  for (let i = 0; i < n - k+1; i++) {
    let max = arr[i];
    for (let j = i + 1; j < i + k; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    result.push(max);
  }
  return result;
    // let result = [];
    // for(let i = 0;i<=n-k;i++){
    //     let max = arr[i]
    //     for(let j = 0;j<k;j++){
    //         if(arr[i+j]>=max){
    //             max = arr[i+j]
    //         }
    //     }
    //     result.push(max)
    // }
    // return result
     let arr2 = [];
        if(n === 1){
            return arr;
        }else{
            
        let max = 0;
        for(let i = 0;i < n-2; i++){
            let j = i;
            while(j < k){
                arr2.push(arr[j])
                j++;
            }
            max = Math.max(...arr2);
            arr2.splice(0,k)
            k++;
        }
        return max;
        }
}
console.log(max_of_subarrays(arr,n,k));