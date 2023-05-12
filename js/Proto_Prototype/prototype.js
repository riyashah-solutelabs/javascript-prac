let Animal = {
    name:"animal",
    eats:true,
    sayHi : function() {
        console.log(this.name)
    }
}
function Dog(name) {
    this.name = name;

}
// console.log(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = Animal;
let dog = new Dog("dog");
dog.sayHi();
console.log(dog.eats);
console.log(dog.name);
