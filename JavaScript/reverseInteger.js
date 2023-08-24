/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

var reverse = function(x) {
    //Cast to string
    let xToString = x.toString();
    //Split
    let split = xToString.split("");
    //Reverse
    let reverse = split.reverse();
    //Edge cases (if "-", if "0")
    if (reverse[reverse.length - 1] == "-") {
        var element = reverse[reverse.length - 1];
        reverse.splice(reverse.length - 1, 1);
        reverse.splice(0, 0, element);
    } else if (reverse[0] == "0") {
        reverse.splice(0, 0);
    }
    //Join
    let joinX = reverse.join("");
    //Cast to int
    let intX = parseInt(joinX);
    //Edge case (Outside the 32-bit range, return 0)
    const INT_MAX = Math.pow(2, 31) - 1; 
    const INT_MIN = -Math.pow(2, 31);    
    if (intX > INT_MAX || intX < INT_MIN) {
        return 0;
    } return intX;
};
