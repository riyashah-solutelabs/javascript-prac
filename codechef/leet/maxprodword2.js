function maxProduct(words) {
    let max = 0;
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (!hasCommonChars(words[i], words[j])) {
          max = Math.max(max, words[i].length * words[j].length);
        }
      }
    }
    return max;
  }
  
  function hasCommonChars(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
      if (word2.includes(word1[i])) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage:
  const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
  console.log(maxProduct(words)); // Output: 16
  