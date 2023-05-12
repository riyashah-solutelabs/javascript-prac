function init() {
    console.log("Declaration");
}
init();

let greet = function () {
    console.log("Epression");
}
greet();

// function User(){
//     this.name = "John";
//     this.sayHi = () => {
//         console.log(this.name);
//     }
// }
// let user = new User();
// user.sayHi();

function greetings(){
    console.log("g");
    // let func = new Function("console.log('hello world')");
    let func = new Function("name","roll","console.log(name,roll)");
    return func;
    // return func();
}
let g = greetings()("riya","Shah")
// console.log(g())