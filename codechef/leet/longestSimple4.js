function longestPalindrome(s) {
    let maxPalindrome = '';
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        let subStr = s.substring(i, j + 1);
        if (subStr === subStr.split('').reverse().join('') && subStr.length > maxPalindrome.length) {
          maxPalindrome = subStr;
        }
      }
    }
    return maxPalindrome;
  }
  
  console.log(longestPalindrome("babad")); // Output: "bab"
  