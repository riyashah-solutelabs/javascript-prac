let target = {};

let proxy = new Proxy(target,{});
proxy.test = 10;
console.log(proxy.test);
console.log(target.test);