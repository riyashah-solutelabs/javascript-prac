let obj = {
    name:"riya",
    "my":1,
    20:22,
    sayHi: function(){
        console.log(this.name)
    }
    // {name:"s",age:22}:{
    //     name:"s",age:22
    // }
}
// obj.sayHi()
// console.log(obj.my)
// console.log(obj[20])
// console.log(obj["20"])
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj["my"])
let obj2 = {name:"shah",age:"20"}
let arr = [1,2,3,4,5,6,7,8,9]
let sayHi = function(){
    console.log(this.name)
}
// let map = new Map();
// // map.set(name,"riya");
// map.set("my",1);
// map.set(20,22);
// map.set(arr,['one','two']);
// map.set(arr,['one','two']);
// map.set(obj2,{name:"shah",age:"20"})
// map.set(sayHi,{name:"shah",age:"20"})
// // map.set(sayHi,function(){
    // console.log(this.name)
// });
// console.log(map.get(arr));
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

let set = new Set();
set.add("my");
set.add(20);
set.add(arr);
set.add(arr);
set.add(obj2)
set.add(sayHi)
console.log(set);
// console.log(set.values());