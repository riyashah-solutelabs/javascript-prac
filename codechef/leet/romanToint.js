var romanToInt = function(s) {
    let roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let c = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i] == 'I' && s[i+1] == 'V'){
            c+=4;
            i++;
        }else if(s[i] == 'I' && s[i+1] == 'X'){
            c+=9;
            i++;
        }else if(s[i] == 'X' && s[i+1] == 'L'){
            c+=40;
            i++;
        }else if(s[i] == 'X' && s[i+1] == 'C'){
            c+=90;
            i++;
        }else if(s[i] == 'C' && s[i+1] == 'D'){
            c+=400;
            i++;
        }else if(s[i] == 'C' && s[i+1] == 'M'){
            c+=900;
            i++;
        }
        else{
            c += roman[s[i]];
        }
    }
    return c
};
s = "MCMXCIV";
console.log(romanToInt(s))