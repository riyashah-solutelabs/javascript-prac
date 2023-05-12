let queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]

var twoEditWords = function(queries, dictionary) {
    for(let i=0;i<queries.length;i++) {
        let cnt = 0;
        let indexes = []
        for(let j=0; j<dictionary.length;j++){
            let k = 0;
            while(k < dictionary[j].length){
                if(queries[i][k] === dictionary[j][k]){
                    cnt++;
                }else{
                    indexes.push(k)
                }
                k++;
            }
            
            console.log(cnt);
        }
    }
};
console.log(twoEditWords(queries,dictionary));