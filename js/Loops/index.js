outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
    if (!input) continue outer; // (*)
    console.log(input);
    // do something with the value...
    }
  }
  
  alert('Done!');