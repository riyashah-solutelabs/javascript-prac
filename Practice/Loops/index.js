// let obj = {
//     49 : "f9",
//     41 : "f1",
//     44 : "dd"
// }
// for (var i in obj) {
//     console.log(obj[i]);
// }
// let obj = {
//     "49" : "f9",
//     "41" : "f1",
//     "44" : "dd"
// }
// for (var i in obj) {
//     console.log(obj[i]);
// }
let obj = {
    "+49" : "f9",
    "+41" : "f1",
    "+44" : "dd"
}
// for (var i in obj) {
//     console.log(i);
//     // console.log(obj[i]);
// }

// for(var j of obj){
//     console.log(obj)
// }

let a = Array.from(obj);
console.log(a.push(3));
console.log(a);
console.log(obj);