var divide = function(dividend, divisor) {
    // if (dividend === -Math.pow(2, 31) && divisor === -1) {
    //     return Math.pow(2, 31) - 1;
    //   }
    // let n = dividend/divisor;
    // return Math.trunc(n);
    let neg = false;
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      neg = true;
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let quotient = 0;
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }
    return neg ? -quotient : quotient;
    // console.log(quotient);
    // console.log(Math.trunc(n));
};
// let dividend = -2147483648, divisor = -1
let dividend = 10, divisor = -3
console.log(divide(dividend,divisor));