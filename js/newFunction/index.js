function getFunc() {
    let c = "test";
  
    let func = new Function('console.log(c)');
  
    return func;
  }
//   c = "hei"; //uncomment this line to run
  getFunc()(); // error: value is not defined