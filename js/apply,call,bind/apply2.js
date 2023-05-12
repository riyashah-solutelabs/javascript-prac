function sayHi(des,age) {
    console.log( this.name , this.test, des,age);
    // alert( this.name );
  }
//   sayHi.test = 5;
  
// sayHi();
// console.log(sayHi.test);
sayHi.apply({
    name: "John",
    test:50
  },["Pass",22]);
