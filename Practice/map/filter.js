let city = ["mumbai","ahmedabad","maldives","sarangpur"]
// console.log(city.includes("mumbai"));
// console.log(city[0].startsWith("m"));
// console.log(city.indexOf("mumbai"));

// let c = city.filter((a) =>  {
//     if(a.startsWith("m")){
//         return false;
//     }else{
//         return true;
//     }
// })
// console.log(c);
// let c = city.filter((a) =>  {
//     if(a.startsWith("m")){
//         return "m";
//     }else{

//         return false;
//     }
// })
// console.log(c);
// let c = city.filter((a) =>  {a.startsWith("m")})
// console.log(c);
// let cd = city.map((a) =>  {a.startsWith("m")})
// console.log(cd);
// c = city.filter((a) =>  {return a.startsWith("m")})
// console.log(c);
// cd = city.map((a) =>  a.startsWith("m"))
// console.log(cd);

// let arr = [1,2,3,4,5];
// let sum = arr.reduce((sum,item) => {return sum+=item},0)
// console.log(sum);

// let concat = city.reduce((res,item) => res+=` ${item}`);
// console.log(concat);

let num = [5,10,15,20,25,30,35];
// let sum = num.reduce((sum,item) => {
//     console.log(sum,item);
//     if(item < 20){
//         return sum+item;
//     }
//     return sum;
// },0)
// console.log(sum);
// let concatstr  = city.reduce((constr,city) => {
//     if(city === "mumbai"){
//         return constr
//     }
//     return constr + city + "-";
//     ;
// },"")
// console.log(concatstr);

let sum = num.reduce((res,item) => {
    res.push(item+50);
    return res;
},[])
console.log(sum);