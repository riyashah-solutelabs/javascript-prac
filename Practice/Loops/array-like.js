let arr = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    length :3
};

// for(let i in arr){
//     console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }

// let a = Array.from(arr);
// console.log(a);
// a.push("Three");
// a.push(4);
// console.log(a);

// for(let i in arr){
//     console.log(arr[i]);
// }


// let b = Array.from(arr , num => num * 2);
// console.log(b);

// let str = "Hello World";
// let s = Array.from(str);
// s.push("V",2,3)
// s.pop()
// s.splice(1)
// s.splice(0,4)
// s.slice(0,4)
// console.log(s);


let num = ["1","2","3"];
// console.log(num);
// let n = Array.from(num, n => n * 2);
let n = Array.from(num);
// n.push("V",2,3)
// n.splice(5,0,4)
n.splice(2,1,4)
console.log(n);
let slice = n.slice(0,2)
console.log(slice);
