let obj = {
    name:"Riya",
    age:20
}

let printDetails = function(state,country){
    console.log(this.name+" "+state+" "+country)
;
}
printDetails.apply(obj,["Gujarat","India"]);
