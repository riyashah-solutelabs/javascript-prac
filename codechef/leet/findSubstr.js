function findSubstring(s, words) {
    const wordDict = {};
    for (let word of words) {
        wordDict[word] ? wordDict[word]++ : wordDict[word] = 1
    }
    // console.log(wordDict);
    const wordLen = words[0].length;
    const totalLen = words.length * wordLen;
    const results = [];
    
    for (let i = 0; i <= s.length - totalLen; i++) {
      const w = s.substring(i, i + totalLen);
    //   console.log(w);
      const wCount = {};
      
      for (let j = 0; j < w.length; j += wordLen) {
        const word = w.substring(j, j + wordLen);
        // console.log(word);
        wCount[word] ? wCount[word]++ : wCount[word] = 1;
      }
    //   console.log(wCount,wordDict);
      
      if (isEqual(wCount, wordDict)) {
        results.push(i);
      }
    }
    
    return results;
  }
  
  function isEqual(obj1, obj2) {
    // if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    //   return false;
    // }
    
    for (let key in obj1) {
      if (obj1[key] !== obj2[key] ) {
        return false;
      }
    }
    
    return true;
  }
  
let s = "barfoothefoobarman", words = ["foo","bar"]
console.log(findSubstring(s,words));