var maxProduct = function(words) {
    let max = 0;
    for(let i=0;i<words.length;i++){
        let len = words[i].length;
        let j = i+1;
        let w1 = words[i]
        while(j < words.length){
            let jlen = words[j].length;
            let w2 = words[j]
            // console.log(words[i],words[j],!words[i].includes(words[j]));
            while(w2 < w2.length){
                if(!w2.includes(w1[j])){
                    let prod = len*jlen;
                    max = Math.max(max,prod);
                    j++;
                }

            }
            j++;
        }
    }
    console.log(max);
};
function charsMatch(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        // console.log(word1[i],word2);
      if (word2.includes(word1[i])) {
        return true;
      }
    }
    return false;
  }
words = ["abcw","baz","foo","bar","xtfn","abcdef"]
console.log(maxProduct(words));