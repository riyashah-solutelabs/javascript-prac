function countAndSay(n) {
    // Base case
    if (n === 1) {
        return "1";
    }
    
    // Recursive case
    const prevStr = countAndSay(n - 1);
    console.log("prev " +prevStr);
    let count = 1;
    let currentChar = prevStr[0];
    console.log("curr " +currentChar);
    let result = "";
    
    for (let i = 1; i < prevStr.length; i++) {
        console.log("for");
        if (prevStr[i] === currentChar) {
            console.log("count");
            count++;
        } else {
            result += count + currentChar;
            count = 1;
            currentChar = prevStr[i];
        }
    }
    
    // Add the final count and character to the result
    result += count + currentChar;
    console.log("resukt : "+result);
    return result;
}

// Example usage
console.log(countAndSay(4)); // Output: "1211"
