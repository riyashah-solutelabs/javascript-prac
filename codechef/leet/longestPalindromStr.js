function longestPalindrome(s) {
    const n = s.length;
    // const table = Array(n).fill().map(() => Array(n).fill(false));
    // console.log(table);
    let longest = '';

    // initialize table entries for substrings of length 1
    for (let i = 0; i < n; i++) {
        // table[i][i] = true;
        longest = s[i];
    }

    // check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i+1]) {
            table[i][i+1] = true;
            longest = s.substring(i, i+2);
        }
    }

    // check for substrings of length 3 and above
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] ) {
                // table[i][j] = true;
                longest = s.substring(i, j+1);
            }
        }
    }

    return longest;
}

// let s = "cabad"
let s = "cdbabacb"
console.log(longestPalindrome(s))
