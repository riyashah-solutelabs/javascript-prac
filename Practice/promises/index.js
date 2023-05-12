// function start(){
//     return new Promise((resolve,reject) => {
//         // resolve("ok")
//         // moveBy();
//         // speechSynthesis()
        
//         setTimeout(() => {
//             resolve("ok")
//         },5000)
//     })
// }
// async function moveBy(){
//     try {
//         let a = await start()
//         console.log(a)
//     } catch (error) {
//         console.log("error");
//     }
// }
// function start(){
//     return new Promise((resolve,reject) => {
//         // resolve("ok")
//         // moveBy();
//         // speechSynthesis()
        
//         setTimeout(() => {
//             resolve("ok")
//         },5000)
//     })
// }
// async function moveBy(){
//     try {
//         let a = await start()
//         console.log(a)
//     } catch (error) {
//         console.log("error");
//     }
// }
function start(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("ok")
        },5000)
    })
}
start().then((a) => {
    console.log(a)
    return "yo"
}).then((a) => {
    console.log(a);
}).catch((e) => {
    console.log("error");
})
// moveBy()
console.log("Hell0");
