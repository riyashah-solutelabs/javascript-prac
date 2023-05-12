let x = 1;

function func() {
    // let x = 2;
    console.log(x); // Cannot access 'x' before initialization
    let x = 2;

//   x = 7; //2
//   var x = 2; //undefined
}

func();