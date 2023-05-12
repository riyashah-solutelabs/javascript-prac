var kthPalindrome = function(queries, intLength) {
    let count = Math.floor((intLength+1)/2);
    console.log(count);
   let start = Math.pow(10,count-1);
   console.log(start);
   let ans =[];
   for(let i=0;i<queries.length;i++) {
       let q = queries[i];
       let half = start+q-1;
       console.log(half);
           let rev = half.toString().split("").reverse().join("");
           console.log(rev);
       if(intLength%2==0){
           let num = (half+rev);
           if(num.length == intLength){
            ans.push(Number(num));
           } else {
            ans.push(-1);
           }
       } else {
           let num = ((half+rev.slice(1)));
           if(num.length == intLength){
                ans.push(Number(num));
           }  else {
            ans.push(-1);
           }
       }
   }
   return ans;
};

queries = [1,2,3,4,5,90], intLength = 3
// queries = [2,4,6], intLength = 4
// queries = [2,201429812,8,520498110,492711727,339882032,462074369,9,7,6], intLength = 1
// queries = [392015495,5,4,1,425320571,565971690,3,7,6,3,506222280,468075092,5], intLength = 2
// queries = [928053739,72,86059860,90,622074924,831263840,8,10,43,13,54,870906009,64], intLength = 3
queries = [449229674,501930675,40059525,908875541,9,672504016], intLength = 5
queries = [2,564610221,288987645,1,299274767,551330452,562484652,70], intLength = 6
queries = [447784357,43,123961779,98,641006300,49,229851212,13,300956404], intLength = 10

console.log(kthPalindrome(queries,intLength));