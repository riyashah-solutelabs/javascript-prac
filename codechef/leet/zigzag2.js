/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
       return s;
   }
   let str = '';
   let r = ''
   let st = ''
   r = [...s];
   console.log(r);
   for(let i=0;i<s.length;i++) {
       let cnt = 0;
    //    str += s[i]
    //    let j = i+1;
    let j;
       r = [...s]
       for(j = i ; j< s.length; j+=numRows){
           st = r.splice(j,1)
        //    console.log(r[j]);
        console.log(st);
        cnt++;;
    }

    // numRows = 1;
    //    while(j < numRows) {
    //         i++;
    //         j++;
    //     }
                // st = r.splice(j,1)
                // console.log(st);
        // newStr += st;
    }
    // console.log(newStr);
};
let s = "PAYPALISHIRING", numRows = 3
console.log(s);
console.log(convert(s,numRows));