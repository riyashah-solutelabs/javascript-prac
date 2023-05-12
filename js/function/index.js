// Func statement
y();
function y(){
    console.log("Func Statement");
}
// let c = y;
// c();
y();

// declaration / epression
// a(); //Reference Error
let a = function x(){
    console.log("Func named Expression");
}
// x();//Error
a();
// let c = a;
// c();

// callback func
// function z(que,yes,no){
//     if(confirm(que)){
//         yes();
//     }else{
//         no();
//     }
// }
// function showOk(){
//     console.log("agreed");
// }
// function showCancel(){
//     console.log("Not agrred");
// }
// z("Agree?",showOk,showCancel)

// Default values
function d(from,text="not given"){
    console.log(`${from} ${text}`);
}
d("riya")
d("riya",undefined)
d("riya",null)
d("riya","hello")

// let arw = (n) => n*2;
// console.log(arw(2));


// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    console.log("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    console.log("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
// let age = prompt("What is your age?", 18);
let age = 18;

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}

welcome(); // ok now