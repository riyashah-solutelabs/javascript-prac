let timeout = setTimeout((name) => {
    console.log("Helllo" + name);
},1000,"riya","shah")

// clearTimeout(timeout);
let timeinter = setInterval(() => {
    console.log("world");
},1000)

clearTimeout(timeinter);

let a = new Number(1);
console.log(a);
console.log(typeof a);
