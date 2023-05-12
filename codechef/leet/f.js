function findSubstring(s, words) {
    let wordsDict = {}
    for(let word of words){
        wordsDict[word] ? wordsDict[word]++ : wordsDict[word] = 1
    }
    let wordLen =words[0].length;
    let totalLen =  words.length* wordLen;
    let wordsCnt = {};
    let results = []
    for(let i=0;i<s.length - totalLen;i++){
        let w = s.substring(i,i+totalLen);
        // console.log(w);
        let wordsCnt = {}
        for(let j = 0; j<w.length; j+=wordLen){
            const word = w.substring(j,j+wordLen)
            console.log(word);
            wordsCnt[word] ? wordsCnt[word]++ : wordsCnt[word] = 1;
        }
        console.log(wordsCnt);
    }
    
}
  
let s = "barfoothefoobarman", words = ["foo","bar"]
console.log(findSubstring(s,words));