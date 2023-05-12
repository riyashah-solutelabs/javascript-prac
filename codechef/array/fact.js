// let n = 5;
// function fact(n){
//     if(n == 1){
//         return 1;
//     }
//     return n * fact(n-1);
// }

// console.log(fact(2));

let t = 4;
let n = +prompt("Enter Number");
console.log(n);
let res = 1;
if(n == 1 || n== 0){
    res = 1;
}
while(n > 1){
    n--;
    res = res * n;   
}
console.log(res);