// let arr = [7,10,4,3,20,15];
let arr = [7,10,4,20,15];
let n = 5;
let k = 5;

function kthSmallest(arr,l,r,k){
    // let c = 0
    // while(l < r){
    //     let min = Math.min(...arr);
    //     let index = arr.indexOf(min);
    //     arr.splice(index,1);
    //     c++;
    //     l++;
    //     if(c == k){
    //         return min;
    //     }
    // }
    arr.sort((a,b) => a-b);
    return arr[k-1];
}
console.log(kthSmallest(arr,0,n-1,k));


    //code here
    // let cnt = 0;
    // let min = 999999;
    // for(let i=l; i<r;i++){
    //     console.log(i);
    //     if(arr[i] < min){
    //         min = arr[i];
    //         arr.splice(i,1);
    //         console.log(arr);
    //         i = 0;
    //         min = 999999;
    //         cnt++;
    //         // console.log(cnt);
    //     }
    //     if(cnt === k){
    //         return arr[i];
    //     }
    // }
    // return -1;