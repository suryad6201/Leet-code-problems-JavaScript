// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//QUESTION: 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
//SOLUTION:
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);

// var isPalindrome = function (x) {
//   let splitted = x.split("", x.length);
//   console.log(splitted);
//   let reversed = splitted.reverse();
//   console.log(reversed);
//   for (let i = 0; i < splitted.length; i++) {
//     if (splitted[i] === reversed[i]) {
//       console.log(splitted[i]);
//       console.log(reversed[i]);
//     } else {
//     }
//   }
// };

//------------------------------------------------------------------------------------------------------------------
// QUESTION: 2. PALINDROME NUMBER
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// SOLUTION:
var isPalindrome = function (x) {
  let stringify = x.toString(); //Converting input to String
  let toArray = Array.from(stringify); //Converting string into Array

  x = toArray.join(); //Joining the array as a string.
  let reversed = toArray.reverse().join(); //Reversing the array and joining as a string.

  // console.log(reversed);
  // console.log(x);

  if (x === reversed) {
    //1,0,0,0,0,2,1 === 1,2,0,0,0,0,1
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(1000021));
