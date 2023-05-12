// var isValid = function(s) {
//     let ans = false;
//     let brack = {}
//     for(let i = 0; i<s.length; i++) {
//         (s[i] in brack)?brack[s[i]]++:brack[s[i]] = 1;

//     }
//     if(brack['(']){
//         if(brack['('] === brack[')']){
//            ans = true;
//         }else
//         ans = false;
//     }
//     if(brack['[']){
//         if(brack['['] === brack[']']){
//             ans = true;
//         }else
//         ans = false;
//     }
//     if(brack['{']){
//         if(brack['{'] === brack['}']){
//             ans = true;
//         }else
//         ans = false;
//     }
//     return ans;
// };
var isValid = function(s) {
   const stack = [];
   for(let i=0;i<s.length;i++) {
    let char = s[i];
    if(char == '(' || char == '{' || char == '['){
        stack.push(char)
    }else{
        let top = stack[stack.length-1]
        if((char == ')' && top == '(') || (char == '}' && top == '{') || (char == ']' && top == '[')){
            stack.pop();
        }else{
            return false;
        }
    }
   }
   return stack.length === 0;
};
// s = "([)]"
s = "()"
console.log(isValid(s))