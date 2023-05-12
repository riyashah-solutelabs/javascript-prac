function romanToInt(s) {
    let roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let result = 0;
    let i = 0;
    while (i < s.length) {
        switch (s[i]) {
            case 'I':
                if (s[i+1] == 'V') {
                    result += 4;
                    i += 2;
                } else if (s[i+1] == 'X') {
                    result += 9;
                    i += 2;
                } else {
                    result += roman['I'];
                    i += 1;
                }
                break;
            case 'X':
                if (s[i+1] == 'L') {
                    result += 40;
                    i += 2;
                } else if (s[i+1] == 'C') {
                    result += 90;
                    i += 2;
                } else {
                    result += roman['X'];
                    i += 1;
                }
                break;
            case 'C':
                if (s[i+1] == 'D') {
                    result += 400;
                    i += 2;
                } else if (s[i+1] == 'M') {
                    result += 900;
                    i += 2;
                } else {
                    result += roman['C'];
                    i += 1;
                }
                break;
            default:
                result += roman[s[i]];
                i += 1;
                break;
        }
    }
    return result;
}
