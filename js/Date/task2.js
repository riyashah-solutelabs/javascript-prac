let date = new Date(2012, 0, 3);  // 3 Jan 2012

function getWeekDay(date){
    let days = ["SU","MO", "TU", "WE", "TH", "FR","SA"];
    let d = days[date.getDay()];
    return d;
}
console.log( getWeekDay(date) );        // should output "TU"