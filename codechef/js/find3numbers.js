function find3Numbers(arr, n, x) {
  let ans = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === x) {
        ans = 1;
        break;
      } else if (arr[i] + arr[l] + arr[r] < x) {
        l++;
      } else {
        r--;
      }
    }
  }
  return ans;
}
(n = 6), (X = 13);
arr = [1, 4, 45, 6, 10, 8];
console.log(find3Numbers(arr, n, X));
