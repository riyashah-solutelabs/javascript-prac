let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]:123
  };
//   user.id = 1;
  console.log(user)
  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));
  // loop over values
  for (let value of Object.values(user)) {
    console.log(value); // John, then 30
  }

  console.log(Object.getOwnPropertySymbols(user));
  console.log(Reflect.ownKeys(user));


