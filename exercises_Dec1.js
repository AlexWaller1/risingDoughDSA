console.log("Hello Oa");

// write a function which returns the number of true values there are is an
// array.

let trueFalse1 = [true, false, true, true, true, false, true];
// true count: 5

let trueFalse2 = [false, false, false, true, false, false, false];
// true count: 1

let trueFalse3 = [];
// true count: 0

function countTrue(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == true) {
      count++;
    }
  }
  return count;
}

console.log(countTrue(trueFalse1));
// 5
console.log(countTrue(trueFalse2));
// 1
console.log(countTrue(trueFalse3));
// 0

console.log("---------------------------------------------");
console.log("---------------------------------------------");

/* 

Length of a Nested Array

The length property on an array will return the number of elements
in the array. For example, the array below contains 2 elements:

[1, [2, 3]]

Suppose we instead wanted to know the total number of non-nested in
the nested array. In the above case, [1, [2, 3]] contains 3 non-nested
items, 1, 2, and 3.

Examples

getLength([1, [2, 3]]) => 3

getLength([1, [2, [3, 4]]]) => 4

*/

let length1 = [1, [2, 3]];

let length2 = [1, [2, [3, 4]]];

let length3 = [1, [2], 1, [2], 1];

let length4 = [1, [2, [3, [4, [5, 6]]]]];

function getLength(array) {
  string = array.join([]);
  string = string.split(",");
  string = string.join("");
  let length = string.length;
  console.log(length);
}

getLength(length1);
// 3
getLength(length2);
// 4
getLength(length3);
// 5
getLength(length4);
// 6

console.log("---------------------------------------");
console.log("------------------------------------");

/* 

Given the array nums, for each nums[i] find out how many
numbers in the array are smaller than it. That is, for
each nums[i] you have to count the number of valid j's
such that j != i and nums[j] < nums[i].

return the answer in an array

Input: nums = [8, 1, 2, 2, 3]

Output: [4, 0, 1, 1, 3]

*/

let nums1 = [8, 1, 2, 2, 3];

let nums2 = [6, 5, 4, 8];

let nums3 = [7, 7, 7, 7];

function lessThanNum(array) {
  let count = 0;
  let newArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[i]) {
        count++;
      }
    }
    newArray.push(count);
    count = 0;
  }
  console.log(newArray);
}

lessThanNum(nums1);
// [4, 0, 1, 1, 3]
lessThanNum(nums2);
// [2, 1, 0, 3]
lessThanNum(nums3);
// [0, 0, 0, 0]

// O(n^2)

console.log("---------------------------------------");
console.log("---------------------------------");

/* 

Given an array nums containing n distinct numbers in the
range [0, n], return the only number in the range that is
missing from the array.

Example 1: 

Input: nums = [3, 0, 1];

length = 3

range = [0, 3];

Output: 2

--------------------------------------------------------

Example 2: 

Input: nums = [0, 1]

length = 2

range = [0, 2]

Output: 2

--------------------------------------------------------

Example 3:

Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

length = 9

range = [0, 9]

Output = 8

--------------------------------------------------------

Example 4:

Input: nums = [0]

length = 1

range = [0, 1]

Output = 1

*/

let miss1 = [3, 0, 1];

let miss2 = [0, 1];

let miss3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let miss4 = [0];

function missingNum(array) {
  let missNum = 0;
  let i = 0;

  for (; i <= array.length; i++) {
    if (!array.includes(i)) {
      missNum = i;
      break;
    }
  }
  console.log(missNum);
}

missingNum(miss1);
// 2
missingNum(miss2);
// 2
missingNum(miss3);
// 8
missingNum(miss4);
// 1
