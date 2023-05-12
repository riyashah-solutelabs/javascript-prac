let options = {
    title:"Menu",
    height:100,
    width:200,
};
// let {title,height,width} = options;
// console.log(title);
// console.log(height);
// console.log(width);

// let {height:h,title:t,width:w} = options;
// let {height:h,title,width:w} = options;
// let {height:h,width:w,title} = options;
// console.log(h);
// console.log(title);

// let {height:h = 500 ,title:t,width:w,extra:e = "NotPresent"} = options;
// console.log(h);
// console.log(e);

// let {height:h = 500 ,title:t = prompt("Enter Titl."),width:w,extra:e = "NotPresent"} = options;
// console.log(t);

// let {height:h = 500 ,title:t = prompt("Enter Titl"),width:w,extra:e = "NotPresent",name:n = prompt("Enter Name")} = options;
// console.log(t); //aana mate prompt nai pu6e bcz already present 6
// console.log(n);

// let {title,...more} = options;
// console.log(more.height);

let title,height,width;
// {title,height,width} = options; //ERROR
({title,height,width} = options); //Ok Now


