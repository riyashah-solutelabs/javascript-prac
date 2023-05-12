// call for generic function
let obj = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        state: 'NY'
    },
    myFunc: function () {
        let h = "hey";
        arrowFunc = () => {
            console.log(this.name , this.h);
        }
        arrowFunc();
    }
}

let printDetails = function(){
    console.log(this.name);
}

printDetails.call(obj);
obj.myFunc();
