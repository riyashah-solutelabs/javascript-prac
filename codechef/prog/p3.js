// 3. Program to check a string with balanced brackets.
let str1 = "( {} [] ({}))";
let str2 = "}}";

function isValid(str){
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
            if (str[i] === "(") {
                counter++;
            } 
            else if (str[i] === `)`) {
                counter--;
                if (counter < 0) {
                    return false;
                }
            }else if(str[i] == '{'){
                counter++;
            }else if(str[i] == `}`){
                counter--;
                if (counter < 0) {
                    return false;
                }
            }else if(str[i] == '['){
                counter++;
            }else if(str[i] == `]`) {
            counter--;
            if (counter < 0) {
                return false;
            }
        }
    }
  return counter === 0;

  let ans = false;
    let brack = {}
    for(let i = 0; i<s.length; i++) {
        (s[i] in brack)?brack[s[i]]++:brack[s[i]] = 1;

    }
    if(brack['(']){
        if(brack['('] === brack[')']){
           ans = true;
        }else
        ans = false;
    }
    if(brack['[']){
        if(brack['['] === brack[']']){
            ans = true;
        }else
        ans = false;
    }
    if(brack['{']){
        if(brack['{'] === brack['}']){
            ans = true;
        }else
        ans = false;
    }
    return ans;
}

console.log(isValid(str1)) // true
console.log(isValid(str2)) // false
//  
// You have to check that a particular string have equal number of closing and opening
// brackets for a particular bracket.
