console.log("Hello Oa");
/* 

Create a function takes in an array(slot macine outcome) and
returns true if all elements in the array are identical, and
false otherwise. The array will contain 4 elements

*/

let slots1 = ["#", "#", "#", "#"];

let slots2 = ["%", "%", "*", "%"];

let slots3 = ["*", "*", "*", "*"];

let slots4 = ["!", "&", "&", "="];

function slotMachine(array) {
  let i = 0;
  let trueOrFalse = "";
  for (; i < array.length; i++) {
    if (array[i] == array[i + 1] || array[i] == array[i - 1]) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
      break;
    }
  }
  console.log(trueOrFalse);
}

slotMachine(slots1);
// true
slotMachine(slots2);
// false
slotMachine(slots3);
// true
slotMachine(slots4);
// false

console.log("--------------------------------------------");
console.log("------------------------------------------");

let unSorted1 = [3, 5, 4, 6, 1, 23];

let unSorted2 = [7, 4, 2, 14, 11, 10];

let sortNum = array => array.sort((a, b) => a - b);

console.log(sortNum(unSorted1));
// [1, 3, 4, 5, 6, 23]
console.log(sortNum(unSorted2));
// [2, 4, 7, 10, 11, 14]

console.log("---------------------------------------------");
console.log("------------------------------------------");

/* 

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than 
[n / 2] times. You may assume that the majority element always
exists in the array.

Example:

Input: nums = [3, 2, 3]

Output: 3

*/

let nums1 = [3, 2, 3];

let nums2 = [2, 2, 1, 1, 1, 2, 2];

let nums3 = [3, 3, 9, 3, 9, 9, 2, 2, 9, 9, 9];

function appearsMost(array) {
  array = sortNum(array);

  let count = 0;
  let max = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == array[i + 1] || array[i] == array[i - 1]) {
      count++;
      if (count > max) {
        max = array[i];
      }
    } else count = 0;
  }
  console.log(max);
}

appearsMost(nums1);
// 3
appearsMost(nums2);
// 2
appearsMost(nums3);
// 9

console.log("--------------------------------------------");
console.log("-------------------------------------------");

/* 

Given an array of integers, find if the array contains any
duplicates.

Your function should return true if any value appears at
least twice in the array, and it should return false if
every element is distinct.

Example 1:

Input: [1, 2, 3, 1] Output: true

Example 2:

Input: [1, 2, 3, 4] Output: false

*/

let duplicates1 = [1, 2, 3, 1];

let duplicates2 = [1, 2, 3, 4];

let duplicates3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function trueDuplicates(array) {
  array = sortNum(array);
  let rBoolean = "";
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      rBoolean = true;
      break;
    } else rBoolean = false;
  }
  console.log(rBoolean);
}

trueDuplicates(duplicates1);
// true
trueDuplicates(duplicates2);
// false
trueDuplicates(duplicates3);
// true

console.log("--------------------------------------------");
console.log("-------------------------------------------");

/* 

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to
the target.

You may assume that each input would have exactly one 
solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1: 

Input: nums = [2, 7, 11, 15], target = 9

Output: [0, 1];

Example 2:

Input: nums = [3, 2, 4], target = 6

Output: [1, 2]

Input: nums = [3, 2, 4], target = 6

Output: [0, 1]

*/

let nums10 = [2, 7, 11, 15];

let nums11 = [3, 2, 4];

let nums12 = [3, 3];

function targetSum(array, target) {
  let indices = [];
  let i = 0;

  for (; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        indices = [i, j];
        break;
      }
    }
  }
  console.log(indices);
}

targetSum(nums10, 9);
// [0, 1]
targetSum(nums11, 6);
// [1, 2]
targetSum(nums12, 6);
// [0, 1]
targetSum(nums10, 100);
// []

console.log("---------------------------------------------");
console.log("--------------------------------------------");

/* 

Given a number N, find all factors of N

Example:

Input: n = 10

Output = 1 2 5 10

*/

function findAllFactors(num) {
  let i = 0;
  let factors = [];
  for (; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  console.log(factors);
}

findAllFactors(10);
// [1, 2, 5, 10]
findAllFactors(100);
// [1, 2, 4, 5, 10, 20, 25, 50, 100]
