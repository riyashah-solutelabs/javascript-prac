/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
       return s;
   }
   
   let result = '';
   let len = 2 * numRows - 2;
   
   for (let i = 0; i < numRows; i++) {
       for (let j = i; j < s.length; j += len) {
           result += s[j];
           console.log(result);
           // add the middle elements (except for the first and last row)
           let k = j + len - 2 * i;
           console.log(j,len,i);
           console.log(i,numRows,k);
           if (i !== 0 && i !== numRows - 1 && k < s.length) {
               result += s[k];
               console.log("If : "+result);
           }
       }
   }
   
   return result;
};
let s = "PAYPALISHIRING", numRows = 3
console.log(s);
console.log(convert(s,numRows));