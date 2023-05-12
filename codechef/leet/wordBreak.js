function wordBreak(s, wordDict) {
    const memo = new Map();
    
    function canSegment(start) {
      if (start === s.length) {
        return true; // reached the end of the string
      }
      
      if (memo.has(start)) {
        return memo.get(start); // return memoized result
      }
      
      for (let end = start + 1; end <= s.length; end++) {
        const word = s.substring(start, end);
        if (wordDict.includes(word) && canSegment(end)) {
          memo.set(start, true); // memoize result
          return true;
        }
      }
      
      memo.set(start, false); // memoize result
      return false;
    }
    
    return canSegment(0);
  }
  