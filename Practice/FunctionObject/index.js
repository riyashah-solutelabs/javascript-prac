// function f(){
//     return f.name;
// }
// console.log(f());
function f(sayHi = function(){}){
    return sayHi.name;
}
console.log(f());