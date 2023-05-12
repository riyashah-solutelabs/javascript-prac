var equationsPossible = function(equations) {
    let out = false;
    if(equations.length == 1){
        if(equations[0][0] === equations[0][3] && equations[0][1] == '=' && equations[0][2] == '='){
            return true;
        }
        return false;
    }
    for(let i=0; i<equations.length-1; i++) {
        for(let j=i+1; j<equations.length; j++) {
            console.log(equations[i][1],equations[j][1]);
            // console.log(equations[i][1] == equations[j][1]);
            if((equations[i][0] === equations[j][0] && equations[i][1] == '=' && equations[j][1] == '=' && equations[i][2] == '=' && equations[j][2] == '=' && equations[i][3] === equations[j][3]) || (equations[i][0] == equations[j][3] && equations[i][3] == equations[j][0] && equations[i][1] == '=' && equations[j][1] == '=' && equations[i][2] == '=' && equations[j][2] == '=' )){
                // console.log("j");
                out =  true;
            }
        }
    }
    return out
};
// equations = ["a==b","b!=a"]
// equations = ["a!=a"]
// equations = ["a==b","b!=c","c==a"]
// equations = ["a==b","e==c","b==c","a!=e"]
equations = ["b==a","a==b"]
console.log(equationsPossible(equations));