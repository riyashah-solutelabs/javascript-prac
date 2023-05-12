function sayHi(des) {
    console.log( this.name , this.hey , des);
    // alert( this.name );
  }
  sayHi.test = 5;
  
// sayHi();
console.log(sayHi.test);
sayHi.call({
    name: "John",
    hey:"hey"
  },["Pass",22]);
