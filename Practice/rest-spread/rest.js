function sumAll(...arg){
    sum = 0;
    for(let i of arg){
        sum += i;
    }
    return sum;
}

console.log(sumAll(1,2));
console.log(sumAll(1,2,3));


// function nameAll(fname,lname,...arg){
//     console.log(fname + " " + lname);
//     for(let n of arg){
//         console.log(n);
//     }
// }

// nameAll("John", "Smith", 1, 2, 3, 4);
// function nameAll(){
//     console.log(arguments[0] + " " + arguments[1]);
//     for(let n of arguments){
//         console.log(n);
//     }
// }

// nameAll("John", "Smith", 1, 2, 3, 4);


function closExp(){
    let name = "riya";
    let func = new Function("sur", "console.log(this.name,sur)");
    return func;
}

closExp()("shah");