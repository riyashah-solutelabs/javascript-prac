// bake your code here
let arr = [123,234];

let matches = [6,2,5,5,4,5,6,3,7,6];

let sum = arr.reduce((acc,curr) => {
    return acc += curr;
},0);
// console.log(sum);
let sumstr = sum.toString();

let sp = sumstr.split("");
// console.log(sp);

let dig = 0;
for(let i in sp){
    dig += matches[sp[i]];
}
console.log(dig);