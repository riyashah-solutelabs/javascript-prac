let numbers = [1,2,3,4];
let proxy = new Proxy(numbers, {
    get(target,prop){
        if(prop in target){ 
            return target[prop];
        }
        else {
            return 0;
        }
    }
})
console.log(proxy[1]);
console.log(proxy[123]);

let obj = {
    name:"Riya",
    age:20
}

let proxy2 = new Proxy(obj, {
    get(target,prop){
        if(prop in target){ 
            return target[prop];
        }else{
            return prop;
        }
    }
});

console.log(proxy2.name);
console.log(proxy2.notPresent);
