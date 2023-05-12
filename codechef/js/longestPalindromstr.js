// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"



function longestPalindrome(s){

    let longestPalindrome = '';

  for (let i = 0; i < s.length; i++) {
    // check for odd length palindrome
    let left = i, right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > longestPalindrome.length) {
      longestPalindrome = s.substring(left + 1, right);
      console.log(longestPalindrome);
    }

    // check for even length palindrome - bb aevu 2 var consecutive aave tyare check krva
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    if (right - left - 1 > longestPalindrome.length) {
      longestPalindrome = s.substring(left + 1, right);
      console.log(longestPalindrome);
    }
  }

  return longestPalindrome;

}
// let s = "dbcabad"
let s = "cbbbbad"
console.log(s);
console.log(longestPalindrome(s))