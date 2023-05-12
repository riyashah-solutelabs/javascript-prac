function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
      const key = str.split('').sort().join('');
    //   console.log(key);
      const val = map.get(key) || [];
      val.push(str);
      map.set(key, val);
    //   console.log(map);
    }
    console.log(map.values());
    return Array.from(map.values());
  }
  
  const strs = ["eat","tea","tan","ate","nat","bat"];
  const result = groupAnagrams(strs);
  console.log(result); // [["eat","tea","ate"],["tan","nat"],["bat"]]
  