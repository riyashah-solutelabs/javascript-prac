let N = 5, K = 3
// let arr = [5,6,8,9];
let arr = [1,2,3,4,5];
// function revArr(arr,n,k){
//     for (let i = 0; i < n; i += k) {
//         // console.log(i+=k);
//         let start = i;
//         let end = Math.min(i + k - 1, n - 1);
//         // console.log(end);
//         while (start < end) {
//           let temp = arr[start];
//           arr[start] = arr[end];
//           arr[end] = temp;
//           start++;
//           end--;
//         }
//         console.log(arr);
//       }
//       return arr;
      
// }
// console.log(revArr(arr,N,K));

function reverseInGroups(arr, n, k){
  // code here
  let d = arr.splice(0,k);
  let arr2 = [];
  arr2.push(...d)
  arr2.reverse();

  while(arr.length > 0){  
    if(arr.length == k){
      d = arr.splice(0,k);
      arr2.push(...d);
      arr2.reverse();
    }else if(arr.length < k){
      d = arr.splice(0);
      d.reverse();
      arr2.push(...d)
      console.log(arr2);
    }else{
      d = arr.splice(0,k);
      d.reverse();
      arr2.push(...d);
    }
    console.log(arr.length);
  }
  return arr2
}
console.log(reverseInGroups(arr,N,K));