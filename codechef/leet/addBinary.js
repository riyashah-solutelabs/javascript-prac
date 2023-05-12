var addBinary = function(a, b) {
   let s = (BigInt('0b' + a) + BigInt('0b' + b));
   console.log(s.toString(2));
};
let a = "11", b = "1"
// let a = "1010", b = "1011"
console.log(addBinary(a,b));