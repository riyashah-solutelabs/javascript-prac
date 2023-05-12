function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    // console.log(dp);
    dp[0] = true; // empty string can always be segmented
    
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        // console.log(j);
        const prefix = s.substring(j, i);
        // console.log(prefix);
        if (dp[j] && wordDict.includes(prefix)) {
          dp[i] = true;
          break;
        }
      }
    }
    console.log(dp);
    return dp[n];
  }
  
  let s = "leetcode", wordDict = ["leet","code"]
  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s,wordDict));