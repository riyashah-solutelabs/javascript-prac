let arr = [3,0,0,2,0,4];
let n = 6;

function trappingWater(arr, n)
{
    //your code here
    // let height = arr[0];
    // let a = [];
    // for(let i = 1; i<n-1;i++){
    //     let blockHeight = height - arr[i];
    //     a.push(blockHeight)
    // }
    // let totalTrappedWater = a.reduce((sum,curr) => sum+=curr)
    // if(totalTrappedWater < 0){
    //     return 0
    // }else{
    //     return totalTrappedWater;
    // }
          let left = [];
          let right = [];
        
          let ans = 0;
        
          left.push(arr[0]);
        
          for (let i = 1; i < n; i++) {
            left[i] = Math.max(left[i - 1], arr[i]);
          }
        
          right[n - 1] = arr[n - 1];
        
          for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.max(right[i + 1], arr[i]);
          }
        
          for (let i = 0; i < n; i++) {
            ans = ans + Math.min(left[i], right[i]) - arr[i];
          }
        
          return ans;
}
console.log(trappingWater(arr,n));