/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

var isPalindrome = function(num) {
    // Convert the input number 'num' to an array of digits
    var array = Array.from(String(num), Number);

    // Initialize two pointers, 'r' and 'l', pointing to the rightmost and leftmost elements of the array respectively
    var r = array.length - 1;
    var l = 0;

    // Iterate through the array 
    while (l < r) {
        // Compare the elements at positions 'l' and 'r'
        if (array[l] == array[r]) {
            // If they are equal, move the pointers towards the center
            l++;
            r--;
        } else {
            // If the elements are not equal, return false as the number is not a palindrome
            return false;
        }
    }
    // If the loop completes without finding any mismatch, the number is a palindrome, so return true
    return true;
};
