// let arr = [12,15,8,10];
// let count = arr.reduce((acc,curr) =>{
//     if(curr>=10){
//         acc++;
//     }
//     return acc;
// },0)
// console.log(count);

// NodeJS
process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input = '';
process.stdin.on('data',chunk => input += chunk);

process.stdin.on('end',()=> {
    let arr = input.split(" ")
    let count = 0;
    count = arr.reduce((acc,curr) =>{
        if(curr>=10){
            acc++;
        }
        return acc;
    },0);
    console.log(count);
}); // Advance