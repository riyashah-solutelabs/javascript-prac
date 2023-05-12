var intToRoman = function(num) {
//     let symbol =["I","IV","V","IX", "X","XL","L","XC","C", "CD","D", "CM", "M"];
//     let value = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
//     let result ="";
//     for (let i= value.length-1; i>=0; i--){
//     while(num>=value[i]){
//     result+= symbol[i];
//     num-=value[i];
    
//     }
//     }
//    return result;
    // const values = [1000, 500, 100, 50, 10, 5, 1];
    // const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    const values = [1000, 500, 100, 50, 10, 5, 1];
    const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let result = '';

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};

num = 1994;
console.log(intToRoman(num));