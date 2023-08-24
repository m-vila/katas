/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

var romanToInt = function(s) {
    // Create an map object with Roman symbols and their corresponding values
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var sum = 0;

    // Iterate through the string 
    for (i = 0; i < s.length; i++) {
        // Check if the current symbol and the next symbol form a subtractive pair
        if ((s[i] == "I" && s[i + 1] == "V") || (s[i] == "I" && s[i + 1] == "X") ||
            (s[i] == "X" && s[i + 1] == "L") || (s[i] == "X" && s[i + 1] == "C") ||
            (s[i] == "C" && s[i + 1] == "D") || (s[i] == "C" && s[i + 1] == "M")) {
            // If a subtractive pair is found, add the value of the next symbol and subtract the value of the current symbol
            sum += roman[s[i + 1]] - roman[s[i]];
            i++;
        } else {
            // If no subtractive pair is found, simply add the value of the current symbol to the sum
            sum += roman[s[i]];
        }
    }
    return sum;
};

