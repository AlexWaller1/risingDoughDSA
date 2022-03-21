console.log("Hello Oa");

/* 

Given the array nums, for each nums[i], find out how many 
numbers in the array are smaller than it.


*/

let nums1 = [8, 1, 2, 2, 3];

let nums2 = [6, 5, 4, 8];

let nums3 = [7, 7, 7];

function lessThanCounter(array) {
  let rArray = [];
  let i = 0;
  for (; i < array.length; i++) {
    let j = 0;
    let count = 0;
    for (; j < array.length; j++) {
      if (array[i] > array[j]) {
        count++;
      }
      if (j == array.length - 1) {
        rArray.push(count);
      }
    }
  }
  return rArray;
}
// O(n^2) time complexity
// O(n) space complexity

console.log(lessThanCounter(nums1));
// [4, 0, 1, 1, 3]
console.log(lessThanCounter(nums2));
// [2, 1, 0, 3]
console.log(lessThanCounter(nums3));
// [0, 0, 0]

console.log("-----------------------------------------");
console.log("--------------------------------------");

function lessThanCounter2(array) {
  let numsMap = new Map();

  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    numsMap.set(count, array[i]);
    count++;
  }
}

console.log("---------------------------------------");
console.log("------------------------------------");

/* 

Given an integer array nums, return true if any value appears
at least twice in the array, and return false if every 
element is distinct

*/

let nums4 = [1, 2, 3, 1];

let nums5 = [1, 2, 3, 4];

let nums6 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

function duplicateTest(array) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    if (numsMap.get(array[i]) != undefined) {
      return true;
    } else {
      numsMap.set(array[i], i);
    }
  }
  return false;
}

console.log(duplicateTest(nums4));
// true
console.log(duplicateTest(nums5));
// false
console.log(duplicateTest(nums6));
// true

console.log("----------------------------------------");
console.log("---------------------------------------");

/* 

Given an array nums containing n distinct numbers in the 
range [0, n], return the only number in the range that is 
missing from the array

*/

let nums7 = [3, 0, 1];

let nums8 = [0, 1];

let nums9 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let nums10 = [0];

function missingNum(array) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let sum2 = 0;

  for (; i < array.length; i++) {
    sum = sum + array[i];
  }

  for (; j <= array.length; j++) {
    sum2 = sum2 + j;
  }
  return sum2 - sum;
}

console.log(missingNum(nums7));
// 2
console.log(missingNum(nums8));
// 2
console.log(missingNum(nums9));
// 8
console.log(missingNum(nums10));
// 1

console.log("--------------------------------------");
console.log("-------------------------------------");

/* 

Given an array of integer nums and an integer target, return 
indices of the two numbers such that they add up to the 
target.

You may assume that each input would have exactly one
solution, and you may not use the same element twice.

You can return the answer in any order

*/

let nums11 = [2, 7, 11, 15]; // target = 9

let nums12 = [3, 2, 4]; // target = 6

let nums13 = [3, 3]; // target = 6

function findTargetSum(array, target) {
  let i = 0;
  let j = 0;
  let sum = 0;

  for (; i < array.length; i++) {
    sum = array[j] + array[i];
    if (sum == target && i != j) {
      return [j, i];
    }
    if (i == array.length - 1 && j < array.length) {
      j++;
      i = 0;
    }
  }
  return [];
}

console.log(findTargetSum(nums11, 9));
// [0, 1]
console.log(findTargetSum(nums12, 6));
// [1, 2]
console.log(findTargetSum(nums13, 6));
// [0, 1];

console.log("----------------------------------");
console.log("------------------------------------");

function findTargetSum2(array, target) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    numsMap.set(array[i], i);
  }

  let j = 0;
  let complement = 0;

  for (; j < array.length; j++) {
    complement = target - array[j];
    if (
      complement + array[j] == target &&
      numsMap.has(complement) &&
      j != numsMap.get(complement)
    ) {
      return [j, numsMap.get(complement)];
    }
  }
  return [];
}

console.log(findTargetSum2(nums11, 9));
// [0, 1]
console.log(findTargetSum2(nums12, 6));
// [1, 2]
console.log(findTargetSum2(nums13, 6));
// [0, 1]

console.log("-----------------------------------");
console.log("---------------------------------");

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
// 20
// diamter is a function
console.log(shape.perimeter());
// NaN
// perimeter is a key whose value is an anonymous function
// there .perimeter() logging the whole function not just
// the return value

console.log("----------------------------------------");
console.log("------------------------------------");

function sayHi() {
  console.log(name);
  //console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
// since name is a var you can call it before initialization;
// age is a let so it can't be called before initialization
// therefore, we get an error in the console

console.log("----------------------------------------");
console.log("----------------------------------------");

console.log(() => 2 + 2);
// () => 2 + 2
console.log(window);

let letters = new Map();

letters.set(1, "a");
letters.set(2, "b");
letters.set(3, "c");

console.log(letters);

console.log(letters.has(2));
// true
console.log(letters.has(1));
// true
console.log(letters.has(3));
// true
console.log(letters.has(4));
// false
console.log(letters.get(4));
// undefined

// modularize

// readability
// variable names
// dry -- don't repeat yourself
//---------------------------

console.log("---------------------------------------");
console.log("----------------------------------");

let newNums0 = [5, 2, 6, 9, 2];

let newNums1 = [8, 1, 2, 2, 3];

let newNums2 = [6, 5, 4, 8];

let newNums3 = [7, 7, 7, 7];

let sortNum2 = array => array.sort((a, b) => a - b);

console.log(sortNum2(newNums0));
// [2, 2, 5, 6, 9]

function numLessThan2(array) {
  let array2 = array.slice(0, array.length);
  let numsMap = new Map();
  let rArray = [];
  let i = 0;

  let sortedArray = sortNum2(array);

  for (; i < sortedArray.length; i++) {
    if (numsMap.get(sortedArray[i]) == undefined) {
      numsMap.set(sortedArray[i], i);
    }
  }

  let j = 0;

  for (; j < array2.length; j++) {
    rArray.push(numsMap.get(array2[j]));
  }
  return rArray;
}

console.log(numLessThan2(newNums1));
// [4, 0, 1, 1, 3]
console.log(numLessThan2(newNums2));
// [2, 1, 0, 3]
console.log(numLessThan2(newNums3));
// [0, 0, 0, 0]
