let obj = {
    name:"Riya",
    age:20,
    size:{
        width:100,
        height:200
    },
    item : ["cacke","chocolate"]
}

let {
    name,
    age,
    size:{
        height,
        width,
    },
    item : [item1,item2],
    def = "default"
} = obj;

console.log(def);