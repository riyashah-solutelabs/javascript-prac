function Employee(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary;
    let monthlyBonus = 1000;
    let calculateSalary = function(){
        let finalsalary = monthlyBonus + salary;
        console.log(finalsalary);
    };
    this.getData = function(){
        console.log(`name : ${this.name} | Id : ${this.id}`);
        calculateSalary();
    }
}
let employee = new Employee("John",111,2000);
employee.getData();

// let obj1 = {}
// let obj2 = {}

// console.log(NaN == NaN);
// console.log(obj1 == obj2);
// console.log(Object.is(NaN,NaN));
// console.log(Object.is(obj1,obj2));


