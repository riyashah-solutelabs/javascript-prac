let N = 3;
let arr = [1,1,2,2,3];
let arr2 = [];
let n = 0;
for(let i in arr){
    if(!(arr2.includes(arr[i]))){
        num = arr[i];
        arr2.push(arr[i]);
    }
}
console.log(num)

// let N = 3;
// let arr = [1,2,1,1];
// let arr2 = [];
// const count = {};

// for (const element of arr) {
//   if (count[element]) {
//     count[element] += 1;
//   } else {
//     count[element] = 1;
//   }
// }

// for(let [key,val] of Object.entries(count)){
//     if(val !== 2){
//       arr2.push(key)
//     }
// }
// console.log(arr2);