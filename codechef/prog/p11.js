let strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    // let prefix = strs.reduce((acc, str) => {str.length < acc.length ? str : acc});
    
    // for (let str of strs) {
    //     while (str.slice(0, prefix.length) != prefix) {
    //         prefix = prefix.slice(0, -1);
    //     }
    // }
    // return prefix;
    if (strs.length === 0) {
        return ''
      }
        
      const first = strs[0];
      console.log(first);
      let response = ''; 
      let prefix = '';
    
      for (let i = 0; i < first.length; i++) {
        prefix += first[i];
        let find = strs.filter(s => s.startsWith(prefix));
        console.log(find);
        if (find.length === strs.length) {
          response = prefix;
        }
    
      }
      return response;
};
console.log(longestCommonPrefix(strs));