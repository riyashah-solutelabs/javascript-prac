// let obj = {
//     a:10
// }
// let anotherObj = {};
// let obj1 = {
//     a:10
// }
// let obj2 = {
// }

// anotherObj[obj] = 123;
// console.log(anotherObj);
// // alert(anotherObj); //{ '[object Object]': 123 }

// console.log(Number(obj)); //NaN
// console.log(+obj);
// console.log(obj1>obj2);
// console.log(obj1==obj2);

// let ob = obj1+obj2;
// console.log(ob);

// if(obj == 1){
//     console.log("in");
// }

// let user = {
//     name:"riya",
//     money:2000,
//     [Symbol.toPrimitive](hint){
//         console.log(`hint : ${hint}`);
//         return hint=="string"?`name:"${this.name}"`:this.money;
//     }
// }

// // conversion

// // alert(user);//string
// console.log(String(user));
// console.log(+user);
// console.log(user+500);
// console.log(String(user)+"shah");


let user = {
    name:"riya"
}
let user2 = {
    name:"riya"
}

console.log(user);
console.log(user2);
console.log(user2.valueOf() == user.valueOf()); //false
console.log(user.valueOf() == user);//true

let usr = {
    name:"rita",
    toString(){
        return this.name;
    },
    valueOf(){
        return this.money;
    }
}
console.log(String(usr));
console.log(String(usr) + 500);
console.log(usr + 500);

let usr2 = {
    name:"rita",
    toString(){
        return this.name;
    }
}
console.log(String(usr2));
console.log(String(usr2) + 500);
console.log(usr2 + 500);