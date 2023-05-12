let animal = {
    name:"animal",
    // sayHi : function(){
    //     console.log(this.name);
    // }
}

// let dog = Object.create(animal);
// dog.name = "dog";
// dog.sayHi();
// animal.prototype.sayHi = function(){
//     console.log("an");
// }

let dog = {
    name:"dog",
    sayBye : function(){
        console.log(this.name);
    }
}

dog.__proto__ = animal;
// dog.sayHi();
// animal.sayHi();
dog.say2 = function(){
    console.log("Dog say2");
}
dog.sayBye();   
dog.say2();