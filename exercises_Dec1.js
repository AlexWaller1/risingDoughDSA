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
  //

  for (; i < array.length; i++) {
    if (array[i]) {
      // true values only
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
  console.log(string);
  string = string.split(",");
  string = string.join("");
  let length = string.length;
  console.log(length);
}
// use for in loop
// spread operator

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
// O(n^2)

missingNum(miss1);
// 2
missingNum(miss2);
// 2
missingNum(miss3);
// 8
missingNum(miss4);
// 1

console.log("------------------------------------------------");
console.log("---------------------------------------------");

// another loop and try to sum the numbers without sorting
// 1, 3, 4 = 8
// 1, 2, 3, 4 = 10
// 10 - 8 = 2

// try with sort fist
let sortNum = array => array.sort((a, b) => a - b);

console.log(sortNum(miss3));
// [0, 1, 2, 3, 4, 5, 6, 7, 9]

function missingNum2(array) {
  array = sortNum(array);
  let count = array[0];
  let missingNum = 0;
  let i = 0;

  for (; i <= array.length; i++) {
    if (count != array[i]) {
      missingNum = count;
      break;
    }
    count++;
  }
  console.log(missingNum);
}

missingNum2(miss1);
// 2
missingNum2(miss2);
// 2
missingNum2(miss3);
// 8
missingNum2(miss4);
// 1

console.log("-----------------------------------------");
console.log("---------------------------------------");

// another loop and try to sum the numbers without sorting
// 1, 3, 4 = 8
// 1, 2, 3, 4 = 10
// 10 - 8 = 2
let miss5 = [1, 3, 4];

function missingNum3(array) {
  let sum = 0;
  let sum2 = 0;
  let i = 0;
  let j = array[0];

  for (; i <= array.length; i++, j++) {
    if (typeof array[i] == "number") {
      sum = sum + array[i];
    }
    sum2 = sum2 + j;
  }

  console.log(sum2 - sum);
}

missingNum3(miss5);
// 2
missingNum3(miss1);
// 2
missingNum3(miss2);
// 2
missingNum3(miss3);
// 8
missingNum3(miss4);
// 1

console.log("---------------------------------------");
console.log("----------------------------------------");

length1 = [1, [2, 3]];

length2 = [1, [2, [3, 4]]];

length3 = [1, [2], 1, [2], 1];

length4 = [1, [2, [3, [4, [5, 6]]]]];

function getLength2(array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (typeof array[i] != "number") {
      array = array.flat();
      i = i - 1;
    }
  }
  console.log(array.length);
}

getLength2(length1);
// 3
getLength2(length2);
// 4
getLength2(length3);
// 5
getLength2(length4);
// 6

console.log("----------------------------------------------");
console.log("--------------------------------------------");

length1.splice(1, 1);
console.log(length1);
let concat1 = [...length1, ...[2, 3]];
console.log(concat1);

console.log(Array.isArray(length1));
// true

let length7 = length4;
console.log(length7);
console.log(length4.flat());
length4 = length4.flat();
length4 = length4.flat();
console.log(length4);
length4 = length4.flat();
length = length4.flat();
console.log(length4);

if (1 === 1) {
  let i = 0;
  for (; i < length7.length; i++) {
    if (typeof length7[i] != "number") {
      length7 = length7.flat();
      i = i - 1;
    }
  }
  console.log(length7);
}

console.log("-----------------------------------------------------");
console.log("-------------------------------------------------");

/* 

There are chickens and rabbits at nature preserve (chickens have 2 feet, 
rabbits have 4 feet, no exceptions). Now that you know the total number of
feet in the cage a, ask howm nay animals are in the cage at least and
at most.

*/

function chickenAndRabbits(num) {
  // input must be even for in order to give an adequate output
  if (num % 2 != 0) return "input must be even";
  let max = num / 2;
  let chickens = max;
  // will always be most since all even numbers are divisible by 2
  let rabbits = 0;
  let min = 0;

  if (num % 4 == 0) {
    min = num / 4;
  } else if (num % 4 != 0) {
    // num = 30
    min = parseInt(num / 4);
    // rabbits = 7
    chickens = min * 4;
    // 28
    chickens = num - chickens;
    // 2
    chickens = chickens / 2;
    // 1
    min = min + chickens;
    // 8
  }
  return `max: ${max}, min: ${min}`;
}

console.log(parseInt(30 / 4));
// 7 rabbits

console.log(chickenAndRabbits(30));
// max: 15, min: 8
console.log(chickenAndRabbits(25));
// input must be even
console.log(chickenAndRabbits(50));
// max: 25, min: 13
console.log(chickenAndRabbits(60));
// max: 30, min: 15
console.log(chickenAndRabbits(70));
// max: 35, min: 18

console.log(17 * 4);
// 68
