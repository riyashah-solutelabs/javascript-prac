var fullJustify = function(words, maxWidth) {
    let n = []
    // for(let i=0;i<words.length;i++){
    //     // let s = Math.floor(words.length/2);
    //     // let substr = words.splice(0,s);
        let j = words.length , k = 0;
        // console.log(j, maxWidth);
        while(j < maxWidth){
            n.push(words[k])
            n.push(" ")
            j++;
            k++;
        }
    // }
    return n.join(",");
};
let words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
console.log(fullJustify(words,maxWidth));