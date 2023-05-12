var addTwoNumbers = function(l1, l2) {
  let arr = [], arr2 = []
  for(let i = 0; i< l1.length;i++){
    arr.push(l1[i])
  }
  for(let i = 0; i< l2.length;i++){
    arr2.push(l2[i])
  }
  if(arr.length > arr2.length){
        n = arr.length - arr2.length;
        while(n !=0){
          arr2.push(0)
          n--;
        }
    }
    console.log(arr,arr2);
   let a1 = arr.reverse().join("");
   let a2 = arr2.reverse().join("");
   console.log(BigInt(a1)+BigInt(a2));
   let ans = Number(a1)+Number(a2);
   ans = Array.from(String(ans), Number).reverse();
   console.log(ans);   
};
let l1 = [2,4,3], l2 = [5,6,4]
// l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2));

function linkedList(arr){
    return arr.reduceRight((next, value) => ({value, next}), null);
  }
  
//   l = [3, 1, 2, 3, 4, 5];
  
//   console.log(linkedList(l));