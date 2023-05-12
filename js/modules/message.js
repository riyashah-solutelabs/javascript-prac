
// 1. default export - only one default is allowed at a time
const message = "Hello From Default";
export default message;
// let mFunc = () => {
//     setTimeout(()=>{
//         console.log("Hello after 2sec");
//     },2000)
// }
// export default mFunc;
// 2. named export
// export const hello = "Hello";
// export const world = "World";
const hello = "Hello";
const world = "World From Named";
let msgFunc = () => {
    setTimeout(()=>{
        console.log("Hello after 2sec");
    },2000)
}

export {hello,world,msgFunc}