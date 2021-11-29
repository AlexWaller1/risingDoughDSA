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

console.log("---------------------------------------");
console.log("---------------------------------");
