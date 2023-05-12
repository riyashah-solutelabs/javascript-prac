function generatePermutations(s) {
    if (s.length === 0) {
      return []; // Return an empty set if the string is empty
    } else if (s.length === 1) {
      return s; // Return a set containing the single character if the string has length 1
    } else {
        // console.log(s.slice(0,1));
      const permutations = generatePermutations(s.slice(1)); // Recursive case: generate permutations of all characters except the first one
    //   console.log(permutations);
      const result = [];
      console.log(permutations);
      for (const permutation of permutations) {
        for (let i = 0; i <= permutation.length; i++) {
            console.log(permutation);
            console.log(permutation.slice(0, i) , s[0] , permutation.slice(i));
          result.push(permutation.slice(0, i) + s[0] + permutation.slice(i)); // Insert the first character in all possible positions
          console.log(result);
        }
      }
      return result;
    }
  }
  
  // Example usage:
  const s = 'ABC';
  const permutations = generatePermutations(s);
  console.log(permutations); // Output: Set { 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' }
  