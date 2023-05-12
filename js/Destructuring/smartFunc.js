let obj = {
    name: 'John',
    age: 20
}
function smartFunc({name="Riya",age:a=29,title="Menu"}){
    console.log(`${name} is ${a} years old and ${title}`);
}

smartFunc(obj);

function smartFunc2({name="Riya",age:a=29,title="Menu"}){
    console.log(`SmartFunc 2 : ${name} is ${a} years old and ${title}`);
}
smartFunc2({});

function smartFunc3({name="Riya",age:a=29,title="Menu"} = {}){
    console.log(`smartFunc 3 : ${name} is ${a} years old and ${title}`);
}
smartFunc3();
