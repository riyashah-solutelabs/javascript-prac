let rooms = {
    numbers : 23,
    toJSON(){
        return this.numbers;
    }
}
let meeting = {
    name : "Meeting",
    rooms
}

let json = JSON.stringify(meeting);
console.log(json);