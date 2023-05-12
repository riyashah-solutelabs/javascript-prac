let d = new Date();
// console.log(d);
// console.log(`without toString : ${d}`);
// console.log(d.toString());
// console.log(`use tostring method : ${d}`);
// console.log(`use todatestring : ${d.toDateString()}`);
// // d = d.toDateString();
// // console.log(d);
// console.log(`use toUTCString : ${d.toUTCString()}`);
// console.log(`use toTimeString : ${d.toTimeString()}`);
// console.log(`use toISOString : ${d.toISOString()}`);
// console.log(`use toLocaleString : ${d.toLocaleString()}`);
// console.log(`use toLocaleDateString : ${d.toLocaleDateString()}`);
// console.log(`use toLocaleTimeString : ${d.toLocaleTimeString()}`);

// // Date string
// d = new Date("2023-02-08");
// console.log(d);
// d = new Date("October 13, 2014 11:13:00");
// console.log(d);

// d = new Date(2023, 02, 08);
// console.log(d);
// console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
// console.log(new Date(2023,01));
// console.log(`new Date(year) : ${new Date("2023")}
// new Date(year,month) : ${new Date("2023-02")}
// new Date(year,month,day) : ${new Date(2023,02,08)}
// new Date(year,month,day,hours) : ${new Date(2023,02,08,11)}
// new Date(year,month,day,hours,minutes) : ${new Date(2023,02,08,11,30)}
// new Date(year,month,day,hours,minutes,seconds) : ${new Date(2023,02,08,11,30,50)}
// new Date(year,month,day,hours,minutes,seconds,ms) : ${new Date(2023,02,08,11,30,50,100)} ,
// ${new Date(2018, 11, 24, 10, 33, 30, 0)}
// new Date(milliseconds) : ${new Date(1000)}
// ${new Date(-100000000000)}
// ${new Date(0)}
// `); 

// console.log(`${new Date("2023-02-08T12:00:00Z")}`);
// console.log(`${new Date("2023-02-08T12:00:00-06:30")}`);
// console.log(`${new Date("2023-02-08T12:00:00+06:30")}`);

// console.log(`${new Date("02/29/2023")}`); //Wed Mar 01 2023 00:00:00 GMT+0530
// console.log(`${new Date("2023/8/2")}`);
// console.log(`${new Date("2023-8-2")}`);
// console.log(`${new Date("2023-08-02")}`);

// console.log(`${new Date("2023/03/25")}`);
// console.log(`${new Date("25-03-2023")}`);//Invalid date
// console.log(`${new Date("25/03/2023")}`); //Invalid date

// let msec = Date.parse("March 25,2023");
// console.log(`${msec}`);
// d = new Date(msec);
// console.log(`${d}`);

// console.log(d.getFullYear());

// console.log(Date.now());

// Calculate the number of years since 1970/01/01:

// let min = 1000*60;
// let hours = min*60;
// let days = hours*24;
// // let weeks = days*7;
// // let months = days*30;
// let year = days*365;
// let years = Math.round(Date.now()/year);
// console.log(`${years}`);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);

