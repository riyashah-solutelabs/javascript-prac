let user = {
    name: "John",
    years: 30
  };

let {name,years : age,isAdmin="false"} = user;
console.log(`${name} is ${age} years old and is ${isAdmin}`);