let date = new Date(2012, 0, 3);  // 3 Jan 2012

function getLocalDay(date) {
    // let days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   let day = date.getDay();
   if(day == 0){
    day = 7;
   }
   return day;
}
console.log( getLocalDay(date) );  