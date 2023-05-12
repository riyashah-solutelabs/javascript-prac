// getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now.getTime() - today.getTime();
    // let diff = now - today;
    return Math.round(diff / 1000);
    // let d = new Date();
    // return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()

}
console.log(getSecondsToday());