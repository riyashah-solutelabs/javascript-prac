// N = 3
// arr[] = {1,2,3}
// Possible Answer: 2
// Generated Output: 1
// Explanation: index 2 is 3.
// It is the peak element as it is 
// greater than its neighbour 2.
// If 2 is returned then the generated output will be 1 else 0.

function peakElement(arr, n)
    {
        // code here
        // for(let i=0; i<n; i++){
        //     if(arr[i] >= arr[i+1] && arr[i] >= arr[i-1]){
        //         return i;
        //     }
        // }
        // if ( arr[0]>arr[1] ) {
              
        //     return 0;
            
        // }
        //  if(arr[n-1]>arr[n-2]){
           
        //     return n-1;
        // }
        // let index =0;
        // for(let i= 1; i<n;i++){
        //     if(arr[index] >= arr[i])
        //         continue;
        //     index =i;    
        // }
        // return index;
        let ans = Math.max(...arr);
        return arr.indexOf(ans);
        
    }

console.log(peakElement([3,4],2));
// console.log(peakElement([3,4],2));