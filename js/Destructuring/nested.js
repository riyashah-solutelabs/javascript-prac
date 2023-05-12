let obj = {
    name: 'John',
    age: 20,
    size: {
        width: 400,
        height: 100
    },
    items:["cake","Donut"],
    // extra:true
};

let {
    name,
    age:a = 29,
    size: {
        height,
        width :w,
        def="Default"
    },
    items:[item1,item2],
    defTitle="Menu"
}=obj;

console.log(name);
console.log(a);
console.log(height);
console.log(w);
console.log(def);
console.log(defTitle);
console.log(item1);
console.log(item2);