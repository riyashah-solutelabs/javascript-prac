var generateParenthesis = function(n) {
   const res = [];
   function generate(str='',open=0,close=0){
      if(str.length === 2*n){
        res.push(str);
        return;
      }
      if(open < n){
        generate(str+'(',open+1,close);
      }
      if(close < open){
        generate(str+')',open,close+1)
      }
   }
   generate()
   return res;
};
console.log(generateParenthesis(3));