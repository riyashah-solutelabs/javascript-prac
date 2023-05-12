// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt('Employee,Director or ""')
let msg = (login == 'Employee'?'Hello':(login == 'Director')?'Greetings':(login == '')?'No login':'');
alert(msg)