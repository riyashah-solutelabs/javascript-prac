function getLastDayOfMonth(year, month) {
    let d = new Date(year, month+1,0);
    console.log(`${d.getDate()}`);
    

}
getLastDayOfMonth(2012, 1)