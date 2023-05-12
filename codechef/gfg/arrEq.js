// let arr1 = [1,2,5,4,0];
// let arr2 = [2,4,5,0,1]
let arr1 = [1,2,5];
let arr2 = [2,4,15]
let n = 3;

function check(A,B,N){
    // code here
    A.sort((a,b) => a-b)
    B.sort((a,b) => a-b)
    let cnt = 0;

    for(let i=0;i<N;i++){
        if(A[i] === B[i]){
            cnt++;;
        }
    }
    if(cnt == N){
        return 1;
    }else{
        return 0;
    }
}
console.log(check(arr1,arr2,n));