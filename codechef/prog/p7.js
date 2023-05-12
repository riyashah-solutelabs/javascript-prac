// 7. Find the nth largest element in a sorted array.

let arr = [1, 4,2, 5, 6]

let max = Math.max(...arr);
console.log(max);
function kthLargest(arr,l,r,k){
    // code here
     r = r+1;
    let c = 0
    while(l < r){
        let min = Math.max(...arr);
        let index = arr.indexOf(min);
        arr.splice(index,1);
        c++;
        l++;
        if(c == k){
            return min;
        }
    }
}
console.log(kthLargest(arr,0,arr.length-1,3))
