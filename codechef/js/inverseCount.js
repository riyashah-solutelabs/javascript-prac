let a = [2, 4, 1, 3, 5];
let n = 5;

function inversionCount(arr, N)
{
    //your code here
    // let arr1 = []
    // let j = 0;
    // for(let i=0;i<N;i++){
    //     j = i+1;
    //     for(j = i+1; j<N;j++){
    //         if(arr[i] > arr[j] && i < j){
    //             arr1.push([arr[i],arr[j]])
    //         }
    //     }
    // }
    // return arr1.length;
    let count = 0
        for(let i=0;i<N;i++){
            for(let j = i+1; j<N;j++){
                if(arr[i] >= arr[j]){
                    console.log(arr[i],arr[j]);
                    count++;
                }
            }
        }
        return count;
}
console.log(inversionCount(a,n));

// Input: N = 5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 
// has three inversions (2, 1), (4, 1), (4, 3).