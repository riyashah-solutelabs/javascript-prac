// let EmpDetails = function(name,id){
//     this.name = name;
//     this.id = id;

//     this.getName = () => {
//         return this.name;
//     };
//     this.getd = function(){
//         return this.id
//     };
// }
let EmpDetails = function(name,id){
    this.name = name;
    this.id = id;
}

// EmpDetails.prototype.getName = () => {
//     return this.name;
// };
EmpDetails.prototype.getName = function() {
    return this.name;
};
EmpDetails.prototype.getd = function(){
    return this.id
};

let emp1 = new EmpDetails("John","123");
console.log(emp1.getName());
console.log(emp1.getd());
// let Sum = function(n1,n2){
//     let s = 0;
//     s = n1 + n2;
//     return s;
// }

// console.log(Sum(1,2));