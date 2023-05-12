/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let res = queries.reduce((arr, curr) => {
        for (let i = 0; i < dictionary.length; i++) {
        let dif = 0;
        for (let j = 0; j < dictionary[i].length; j++) {
            if (curr[j] !== dictionary[i][j]) dif++;
            if (dif > 2) break;
        }
        if (dif <= 2) {
            arr.push(curr);
            break;
        }
        }
        return arr;
  }, []);
  return res;
};

let queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
console.log(twoEditWords(queries,dictionary));