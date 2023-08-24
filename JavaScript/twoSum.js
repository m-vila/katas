/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

var twoSum = function(nums, target) {
  
  // Initialize two pointers, 'left' and 'right', to keep track of indices in the array
  let left = 0;
  let right = nums.length - 1;

  // Iterate through the array using the pointers 
  while (left < right) {

    let sum = nums[left] + nums[right];
    
    // If the sum is greater than the target
    if (sum > target) {
      // Move the 'right' pointer to the left 
      right--;
  
    // If the sum is less than the target
    } else if (sum < target) {
      // Move the 'left' pointer to the right
      left++;
    
    // If the sum is equal to the target
    } else {
      // Return an array containing the indices of the two numbers that add up to the target
      return [left, right];
    }

  }
};
