let arr = [1,2,3,4,5];
let n = 5 , k = 3;

function search(arr, N, X) {
    // write your code here
    for(i=0;i<N;i++){
        if(arr[i] == X){
            return i;
        }
    }
    return -1
    // return ans;
}
console.log(search(arr,n,k));