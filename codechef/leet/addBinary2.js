function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
//   console.log(b.length);
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    const bitA = parseInt(a[i] || '0');
    const bitB = parseInt(b[j] || '0');
    // console.log(j,bitA, bitB)
    const sum = bitA + bitB + carry;
    // break;
    if (sum <= 1) {
      result = sum.toString() + result;
      carry = 0;
    } else if (sum === 2) {
      result = '0' + result;
      carry = 1;
    } else {
      result = '1' + result;
      carry = 1;
    }

    i--;
    j--;
  }

  if (carry === 1) {
    result = '1' + result;
  }

  return result;
}

let a = "11", b = "1"
// let a = "1010", b = "1011"
console.log(addBinary(a,b));