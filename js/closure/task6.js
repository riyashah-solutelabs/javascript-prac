function sum(n1){
    return function(n2){
        console.log(`${n1+n2}`);
    }
}
sum(1)(2);