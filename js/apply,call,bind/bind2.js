// function sayHi() {
//     console.log( this.name );
//     // alert( this.name );
//   }
//   sayHi.test = 5;
  
// // sayHi();
// console.log(sayHi.test);
//   let bound = sayHi.bind({
//     name: "John"
//   });
// //   bound.test = 7;
//   console.log( bound.test );
//   bound();

function f() {
    console.log(this.name , this.age);
  }
  
  f = f.bind( {name: "John"} ).bind( {age: 22} );
  
  f(); // John