// bake your code here
let T = 3;
let arr = [2,50,27];

let M = arr[1];
let N = arr[0];
let K = arr[2];

let avail = M - K;
if(N <= avail){
    console.log("Yes");
}else{
    console.log("No");
}