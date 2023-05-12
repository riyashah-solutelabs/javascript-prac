var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let start = 0;
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
        set.delete(s[start]);
        start++;
        }
        set.add(s[i]);
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
};
// Input: s = "abcabcbb"
// Output: 3
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));