const fs = require("fs");
const chalk = require("chalk");
// const path = require('path');

const gettodos = () => {
  console.log(chalk.blueBright.bold("Getting todos..."));
  console.log(chalk.green("Your todos..."));
  const todos = loadtodos();
  todos.forEach((todo) => console.log(todo.title));
};

const addtodo = (title, description) => {
  const todos = loadtodos();
  const todoexists = todos.find((todo) => todo.title === title);

  if (!todoexists) {
    todos.push({
      title: title,
      description: description,
    });
    savetodos(todos);
    console.log(chalk.green.inverse("New todo added..."));
  }else{
    console.log(chalk.red.inverse('Title already exists...'));
  }
};
const savetodos = (todos) => {
  const dataJSON = JSON.stringify(todos);
  fs.writeFileSync("todos.json", dataJSON); 
};

const loadtodos = () => {
  try {
    const dataBuffer = fs.readFileSync("todos.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removetodo = (title) => {
  const todos = loadtodos();
  const newtodos = todos.filter((todo) => todo.title !== title);
  if (newtodos.length === todos.length) {
    console.log(chalk.red.inverse("Not found!"));
  } else {
    console.log(chalk.green.inverse("removed!"));
    savetodos(newtodos);
  }
  // console.log(newtodos);
};

const readtodo = (title) => {
  const todos = loadtodos();
  const todo = todos.find((todo) => todo.title === title);
  if (todo) {
    console.log(chalk.inverse(todo.title));
    console.log(todo.description);
  } else {
    console.log(chalk.red.inverse("Not found!"));
  }
};

module.exports = {
  gettodos: gettodos,
  addtodo: addtodo,
  removetodo: removetodo,
  readtodo: readtodo,
};
