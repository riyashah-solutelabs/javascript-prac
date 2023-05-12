let obj = {
    name:"Riya",
    age:22,
    designation:"Software Engineer",
    printDetails:function(){
        console.log(this.name);
    }
}

// obj.printDetails();
let obj2 = {
    name:"Shreya",
    age:23,
    designation:"Software Engineer",
    // printDetails:function(){
    //     console.log(this.name);
    // }
}

obj.printDetails.call(obj2); //Shreya