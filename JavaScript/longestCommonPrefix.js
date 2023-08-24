/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {
    if (strs.length == "") {
        return "";
    }
    
    // Iterate through each character position in the first string.
    for (let i = 0; i < strs[0].length; i++) {
        // Get the character at the current position.
        const char = strs[0][i];
        
        // Iterate through the rest of the strings in the array.
        for (let j = 1; j < strs.length; j++) {
            // If the character doesn't match or we've reached the end of the word, return the prefix up to this point.
            if (strs[j][i] !== char || i === strs[j].length) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
