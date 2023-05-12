let objUSer = {
    name:"Riya",
    hobbies:['Sports','Cooking',true,22,{one:"y",two:"f"}]
}
// console.log(objUSer.hobbies);
// console.log(objUSer.name);

let arrHoby;
arrHoby = ['Sports','Cooking'];
// console.log(arrHoby);

// for(let hobby of objUSer.hobbies){
//     console.log(hobby);
//     // console.log(hobby.toUpperCase());
// }

// let a = arrHoby.map(hobby => hobby.toUpperCase());
// console.log(a);
for(let arr of arrHoby){
    // console.log(arr.toUpperCase());
    console.log(arr.map(hob => hob.toUpperCase()));
}

// let mapArr:number[];
// mapArr =[1,2,3]
// for(let m of mapArr){

//     console.log(m.map(hobby => hobby.length););
// }