let T = 4;
let N = 5, X = 2, Y = 3;

let mul = 1;

for(let i=0; i<T ; i++){

    N = +prompt("Enter Number Of Pages : ");
    X = +prompt("Enter Number Of Pages Chef can read in a day : ");
    Y = +prompt("Enter Number Of Days : ");
    mul = X * Y;
    if(N <= mul){
        console.log("YES");
    }else{
        console.log("NO");
    }
}