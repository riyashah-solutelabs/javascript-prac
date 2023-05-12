/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const arr = new Array(n + 1).fill(false);
    arr[0] = true; 
    
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        const prefix = s.substring(j, i);
        if (arr[j] && wordDict.includes(prefix)) {
          arr[i] = true;
          break;
        }
      }
    }
    
    return arr[n];
};

let s = "leetcode", wordDict = ["leet","code"]
s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s,wordDict));