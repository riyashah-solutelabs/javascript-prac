function makeArrayElementsEqual(arr) {
    // Find the minimum and maximum elements in the array
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
    // Calculate the difference between the maximum and minimum
    let diff = max - min;
    let c = 0;
    // Repeat until all elements are equal
    while (diff > 0) {
      // Find the index of the minimum element
      let minIndex = arr.indexOf(min);
  
      // Add the difference to the minimum element
      arr[minIndex] += diff;
  
      // Update the minimum and maximum elements
      min = Math.min(...arr);
      max = Math.max(...arr);
  
      // Recalculate the difference
      diff = max - min;
      c++;
    }
    console.log(c);
    // Return the number of operations performed
    // return arr.length - 1;
    return c;
  }
  
  // Example usage
  let arr = [1, 2, 3];
  let numOps = makeArrayElementsEqual(arr);
  console.log(arr);     // [3, 3, 3]
  console.log(numOps);  // 2
  