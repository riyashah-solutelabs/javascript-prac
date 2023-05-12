N = 10, K = 3
arr = [1, 2, 3, 1, 4 ,5 ,2 ,3 ,6]
// arr = [8 ,5 ,10 ,7 ,9 ,4 ,15 ,12 ,90 ,13]

function max_of_subarrays(arr, N, K){
    let result = [];

    // Traverse the array
    for (let i = 0; i <= N - K; i++) {
      let maxVal = arr[i];
  
      // Find the maximum element in the current window
      for (let j = i + 1; j < i + K; j++) {
        if (arr[j] > maxVal) {
          maxVal = arr[j];
        }
      }
  
      // Append the maximum element to the result
      result.push(maxVal);
    }
  
    return result;

}
console.log(max_of_subarrays(arr,N,K));