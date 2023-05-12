let user = {
    name: 'John',
    age: 30
  };
  
  count = (user) => Object.keys(user).length;
  console.log( count(user) ); // 2