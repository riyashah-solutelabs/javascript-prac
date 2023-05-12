function myPow(x, n) {
  let i = 0 , r = 1;
  if(x == -1 && n < 0){
    return 1;
  }if(x == -1 && n > 0){
    return -1
  }
    let absN = Math.abs(n)
    while(i < absN){
      r *= x;
      i++;
    }
    console.log(r);
  if(n < 0){
    r = 1/r;
  }
  // return Math.pow(x,n)
    return r;
  //   if (n === 0) {
  //     return 1;
  //   }
  //   let result = 1;
  //   const absN = Math.abs(n);
  //   for (let i = 0; i < absN; i++) {
  //     result *= x;
  //   }
  //   if (n < 0) {
  //     result = 1 / result;
  //   }
  //   return result;
  }
//   Input: x = 2.00000, n = 10
// Output: 1024.00000
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// x = 2.00000, n = 10
x =
-1.00000
n =
2147483647
console.log(myPow(x,n));  