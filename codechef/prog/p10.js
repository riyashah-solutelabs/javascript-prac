// Collect books from array of objects and return
// collection of books as an array
// Input: 
let friends = [
{
    name: "Anna",
    books: ["Bible", "Geeta", "Harry Potter"],
    age: 20
},

{
    name: "Bob",
    books: ["War and Peace", "Geeta", "Quran"],
    age: 22
},
{
    name: "Alice",
    books : ["The Monk", "Pride and Prejudice", "Good Morning"],
     age: 21
}
];
let book = [];
for(let friend of friends){
    book.push(friend.books);
}
console.log(book);