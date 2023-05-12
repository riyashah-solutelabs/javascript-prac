N = 5, K = 2
Arr = [12, 5, 787, 1, 23]
// Output: 787 23

function kLargest(arr,n, k){
    //code here
    // let i=0, max = [];
    // while(i < k){
    //     let m = Math.max(...arr);
    //     max.push(m)
    //     let maxindex = arr.indexOf(m);
    //     arr.splice(maxindex,1)
    //     // max.push(Math.max(arr))
    //     i++;

    // }
    // return max;
    arr.sort((a,b) => b-a);
    return arr.splice(0,k)
}
console.log(kLargest(Arr,N,K));