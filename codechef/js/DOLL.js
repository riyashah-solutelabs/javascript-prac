// bake your code here
let N=4 , K=10;
let arr = [2,13,4,16];

let c = 0;
for (let i = 0; i < N; i++) {
    if(arr[i] > K){
        c++;
    }
}
console.log(c);