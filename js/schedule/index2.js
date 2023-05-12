// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);

let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);

// The real delay between func calls for setInterval is less than in the code!

// That’s normal, because the time taken by func's execution “consumes” a part of the interval.

// It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.

// In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.

// In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

// And here is the picture for the nested setTimeout: