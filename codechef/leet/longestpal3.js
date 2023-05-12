function longestPalindrome(s) {
    let maxPalindrome = '';
    for (let i = 0; i < s.length; i++) {
      let j = 0;
      while (i - j >= 0 && i + j < s.length && s[i - j] === s[i + j]) {
        j++;
      }
      if (2 * j - 1 > maxPalindrome.length) {
        maxPalindrome = s.substring(i - j + 1, i + j);
      }
      j = 0;
      while (i - j >= 0 && i + j + 1 < s.length && s[i - j] === s[i + j + 1]) {
        j++;
      }
      if (2 * j > maxPalindrome.length) {
        maxPalindrome = s.substring(i - j + 1, i + j + 1);
      }
    }
    return maxPalindrome;
  }
  
  console.log(longestPalindrome("babad")); // Output: "bab"
  