function getVal(x){
    let y = 10;
    function inner(){
        console.log(x,y);
    }
    y = 25;
    return inner;
}

getVal(5)();

// let arr = [1,2,3,4,5,6,7,8,9];
// let btwn = arr.filter(inBetween(2,4));
// // arr.filter(inArray(2,4));
// console.log(btwn);

// function inBetween(min,max){
//     return function(x){
//         return x>min && x<max;
//     }
// }

// var s = 10;
// function myFunction(x){
//     let v = 10;
//     let func = new Function("console.log(v)");
//     return func;
// }
// console.log(myFunction(5)());
