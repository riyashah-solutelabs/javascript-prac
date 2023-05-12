let user = {
    name: "John",
    age: 30,
  
    // toString() {
    //   return `{name: "${this.name}", age: ${this.age}}`;
    // }
  };
  
// alert(user); // {name: "John", age: 30} alert ma j work krse
console.log(JSON.stringify(user));