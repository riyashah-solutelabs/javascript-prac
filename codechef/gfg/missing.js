let array = [1,2,3,5]

  // array.sort((a,b) => a-b);
        // let sum = (n*(n+1))/2
        // let tot = array.reduce(function(a,b){return a+b})
        // //console.log(sum,tot)
        //  let diff = sum - tot
        //  return diff
// let ans = array.map((item,index,self) => {
//     if(!(self.includes(index+1))){
//         return index+1;
//     }
// }).filter((item) => item!=undefined)
// for(let output in ans){
//     console.log(ans[output]);
// }
// console.log();

let s = 0;
let ans = 0;
for(let i=1;i<=5;i++){
    s+=i;
}
ans = array.reduce((sum,curr)=>{
    sum += curr
    return sum
},0);

console.log(s-ans);