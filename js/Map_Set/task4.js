let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let weakset = new WeakSet();
weakset.add(messages[0]);
weakset.add(messages[1]);
weakset.add(messages[2]);
console.log(weakset.has(messages[0]));
messages.shift();
// weakset.add(messages[2]);
// messages[0] = null
// console.log(weakset.has(messages[0]));