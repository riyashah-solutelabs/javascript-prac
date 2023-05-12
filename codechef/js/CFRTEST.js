let n = 2;
let arr = [2,3];
let arr2 = []
let s = 0;
// let c = 0;
for(let i in arr){
    if(!(arr2.includes(arr[i]))){
        arr2.push(arr[i])
       s++;
    }
}
console.log(s);