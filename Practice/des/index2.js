// let options = {
//     item:"item1",
//     name:"Shreya",
//     age:20
// }

// function myFunc({item="one",name="riya",age=20,extra="extra"}){
//     console.log(`${item} ${name} ${age} ${extra}`)
// }
// myFunc(options);
function myFunc({item="one",name="riya",age=20,extra="extra"} = {}){
    console.log(`${item} ${name} ${age} ${extra}`)
}
myFunc();