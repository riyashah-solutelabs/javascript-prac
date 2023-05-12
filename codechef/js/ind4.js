// bake your code here
let N = 3;
let arr = [999,1000,1001,1002];

let ind = arr.reduce((acc,curr) => {
    if(curr >= 1000){
        acc++
    }
    return acc;
},0);
console.log(ind);