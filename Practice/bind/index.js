function sayHi(greet){
    console.log(this.name + greet);
}
let obj = {
    name: 'John'
}
let bound = sayHi.bind(obj," hello");
bound();
