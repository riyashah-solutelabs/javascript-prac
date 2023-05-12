class Employee{
    setData(name,id,phone){
        this.name = name;
        this.id = id;
        this.phone = phone;
    }
    getName(){
        return this.name;
    }
    getid(){
        return this.id;
    }
    getPhone(){
        return this.phone;
    }
}

let emp = new Employee();
emp.setData("Riya",11222,9899099876);
console.log(emp.getName());
console.log(emp.getid());
console.log(emp.getPhone());