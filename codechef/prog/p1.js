// 1. Find the frequency of elements in array
// Method 1: Using Reduce method of array
let arr = [ "hello", "world", "java", "hello", "java" ];

let freq = arr.reduce((acc, curr) => {
    // console.log(curr);
    if(acc[curr]){
        acc[curr] += 1;
    }else{
        acc[curr] = 1;
    }
    return acc;
}, {});
console.log(freq);

// Method 2: Using an Object
const count = {};
arr.forEach((elem) =>{
    count[elem] ? count[elem]++ : count[elem] = 1 
});
console.log(count);