let number = [];

number = new Proxy(number, {
    set(target, prop, value) {
        if (typeof value === 'number') {
            target[prop] = value;
            return true;
        }
        else {
            return false;
        }
    }
})


number.push(0);
number.push(1);
number.push(2);
number.push(3);
console.log(number);