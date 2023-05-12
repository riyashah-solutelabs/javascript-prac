
function getData(){
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve("Call Promise");
        },2000)
        // dd();
    });
}

async function data(){
    let result = await getData();
    console.log(result);
}
// getData();
data();

// p.then((data) => {
//     console.log(data);
//     // sum();
//     // function sum(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1+2);
//             }, 1000);
//         });
//     // }
// }).then((d) => {
//     console.log(d);
// }).catch((err) => {
//     console.log("err");
// });