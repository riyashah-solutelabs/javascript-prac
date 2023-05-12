function Animal(){
    this.name = "Animal";
    this.say = function(){
        console.log(this.name);
    }
}
Animal.prototype.sayBye = function(){
    console.log(`Animal ${this.name} SayBye`);
}
// Animal.prototype = {
//     say6: function(){
//         console.log(this.name);
//     }
// }

function Dog(name){
    this.name = name;
    this.eat = true;

}

// Dog.prototype = new Animal();
Dog.__proto__ = Animal;

// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.say2 = function(){
    console.log(this.name);
}
var dog = new Dog("dog");
console.log(dog.eat);
// dog.say();
dog.say2();
// dog.sayBye();

var animal = new Animal();
// animal.sayBye();
// animal.say();
// animal.say6();
// console.log(animal.name);