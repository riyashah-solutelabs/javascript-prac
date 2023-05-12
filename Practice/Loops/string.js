let str = "Riya";
console.log(str);
// for(let s of str){
//     console.log(s);
// }
// for(let s in str){
//     console.log(s);
// }

let iterator = str[Symbol.iterator]();
while(true){
    let res = iterator.next();
    if(res.done){
        break;
    }else{
        console.log(res.value);
    }
}