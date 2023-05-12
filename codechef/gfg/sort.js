let arr = [0, 1, 0, 2, 1, 2];
let n = 6;

// arr.sort((a,b) => a-b)
// console.log(arr);

function sort012(arr, N) {
  //your code here
  let low = 0;
  let mid = 0;
  let high = N - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
        // console.log(arr,low++,mid++);
      swap(arr, low++, mid++);
    } else if (arr[mid] == 1) {
      mid++;
    } else {
        // console.log(arr,mid,high--);
      swap(arr, mid, high--);
    }
  }
//   console.log(arr);
  return arr;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(sort012(arr, n));
