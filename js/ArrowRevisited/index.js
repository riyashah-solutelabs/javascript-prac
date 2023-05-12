let obj = {
    name: 'John',
    age: 20,
    sayHi: function () {
        // return this.name;
        // that = this;
        // setTimeout(function () {
        //     console.log(that.name);
        // },1000);
        that = this;
        setTimeout( () => {
            console.log(this.name);
        },1000);
    }
}

console.log(obj.sayHi());