let jsonObj = `{
    "meetups":[
        {
            "id":1,
            "title":"Shreya",
            "description":"Meetup 1 description",
            "date":"2023-01-09T12:00:00.000Z"
        },
        {
            "id":2,
            "title":"Rajvi",
            "description":"Meetup 2 description",
            "date":"2023-01-10T03:30:00.000Z"
        }
    ]
}`;

let obj = JSON.parse(jsonObj, function(key,valu){
    if(key == "date"){
        return new Date(valu);
    }
    return valu;
});

console.log(obj.meetups[0].title);
console.log(obj.meetups[0].date.getHours());
console.log(obj.meetups[0].date.getTime());
console.log(obj.meetups[1].date.getHours());
