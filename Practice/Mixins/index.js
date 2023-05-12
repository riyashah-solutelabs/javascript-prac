let mixins = {
    events:5,
    imp:true,
}

class myWork {
    constructor() {
        this.name = "myWork";
    }
    getname(){
        return this.name;
    }
    getData(){
        console.log("Data :"+this.name);
    }
}

// Object.assign(myWork.prototype,mixins)
// console.log(work2);
// console.log(work2.name);
let work = new myWork();
Object.assign(work,mixins)
console.log(work);
console.log(work.getname());
work.getData();
console.log(work.events);