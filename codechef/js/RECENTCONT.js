// bake your code here
let c = 3;
let code = "START38 LTIME108 START38";

let splitstr = code.split(" ");
// console.log(splitstr);
let startcnt = 0;
let ltimecnt = 0;
for (let i = 0; i < 3; i++) {
    if(splitstr[i] == "START38"){
        startcnt++
    }else{
        ltimecnt++
    }
}
console.log(`${startcnt} ${ltimecnt}`);