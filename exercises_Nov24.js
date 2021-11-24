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
