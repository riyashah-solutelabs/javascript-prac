function generatePermutations(s, l, r) {
    l = 0;
    r = s.length-1;
    if (l === r) {
      console.log(s.join('')); // Convert array to string and print
    } else {
      for (let i = l; i <= r; i++) {
        // Swap the current character with the first character
        // and generate permutations of the remaining characters
        [s[l], s[i]] = [s[i], s[l]];
        generatePermutations(s, l + 1, r);
        [s[l], s[i]] = [s[i], s[l]]; // Backtrack
      }
    }
  }
  
  // Example usage:
  let s = 'ABC';
  let arr = s.split(''); // Convert string to array
  let n = arr.length;
  generatePermutations(arr, 0, n - 1);
  