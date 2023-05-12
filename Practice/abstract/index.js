function Student(){
    // this.name = Name;
    sayBye =() => {
        console.log(`Bye ${this.name}`);
    }
    throw new Error("Student is not allowed to be created");
}

Student.prototype.sayHello = function(){
    console.log(`Hello, ${this.name}`);
}
Student.prototype.sayBye = function(){
    console.log(`Hello, ${this.name}`);
}

function KG(Name){
    this.name = Name;
}
console.log(Student.prototype);
KG.prototype = Object.create(Student.prototype);
let kg = new KG("john")
kg.sayHello();
kg.sayBye()