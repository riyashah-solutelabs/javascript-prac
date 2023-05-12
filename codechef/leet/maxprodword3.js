/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let maxProduct = 0;
      let letterCounts = new Map();
      
      // Create a map of unique letters in each word
      for (let i = 0; i < words.length; i++) {
        let letterCount = new Set(words[i]);
        // console.log(words[i],letterCount);
        letterCounts.set(words[i], letterCount);
        // console.log(letterCounts);
      }
      
      // Compare each pair of words and update maxProduct
      for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
          if (!sharesLetters(letterCounts.get(words[i]), letterCounts.get(words[j]))) {
            maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
          }
        }
      }
      
      return maxProduct;
    }
    
    // Returns true if the two sets share any common elements
    function sharesLetters(set1, set2) {
      for (let element of set1) {
        if (set2.has(element)) {
          return true;
        }
      }
      return false;
    }

    const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
    console.log(maxProduct(words)); // Output: 16