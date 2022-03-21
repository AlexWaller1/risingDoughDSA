console.log("Hello Oa");

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nums2 = [21, 31, 41, 51, 61, 71];

function numString(array) {
  let rString = "";
  let num = 0;
  let i = 0;
  for (; i < array.length; i++) {
    num = array[i];
    num = num.toString();
    rString = rString.concat(num);
  }
  let rNum = parseInt(rString);
  return rNum;
}

console.log(numString(nums1));
// 123456789
console.log(numString(nums2));
// 213141516171

console.log("----------------------------------------------------");
console.log("------------------------------------------------");

let beezer = "Beezer";

let bodhi = "Bodhi";

let chipper = "Chipper";

let risingDough2 = "Rising Dough";

let mellonTech = "Mellon-Tech";

let eggPlantHead = "Eggplant-Head";

function hash(string) {
  if (typeof string != "string") string = string.toString();

  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    " "
  ];

  let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64
  ];

  let i = 0;
  let index = 0;
  let rString = "";

  for (; i < string.length; i++) {
    index = letters.indexOf(string.charAt(i));
    let num = numbers[index];
    num = num.toString();
    rString = rString.concat(num);
  }
  let rNum = parseInt(rString);
  return rNum;
}

console.log(hash("test"));
// 2051920
console.log(hash(beezer));
// 285526518
console.log(hash(beezer));
// 285526518
console.log(hash(bodhi));
// 2815489
console.log(hash(bodhi));
// 2815489
console.log(hash(chipper));
// 29891616518
console.log(hash(chipper));
// 29891616518
console.log(hash(mellonTech));
// 395121215146346560
console.log(hash(mellonTech));
// 395121215146346560

console.log("--------------------------------------------");
console.log("--------------------------------------");

// How Much Is True?

// Create a function which returns the number of true values there are
// in an array

let countTrue1 = [true, false, false, true, false];

let countTrue2 = [false, false, false, false];

function trueCount(array) {
  let count = 0;
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}

console.log(trueCount(countTrue1));
// 2
console.log(trueCount(countTrue2));
// 0

console.log("--------------------------------------");
console.log("-----------------------------------");

// find the length of a nested array

let nested1 = [1, [2, 3]];

let nested2 = [1, [2, [3, 4]]];

let nested3 = [1, [2, [3, [4, [5, 6]]]]];

let nested4 = [1, [2], 1, [2], 1];

let nested5 = [];

function getLength(array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (typeof array[i] == "object") {
      array = array.flat();
    }
  }
  return array.length;
}

console.log(getLength(nested1));
// 3
console.log(getLength(nested2));
// 4
console.log(getLength(nested3));
// 6
console.log(getLength(nested4));
// 5
console.log(getLength(nested5));
// 0

console.log("---------------------------------------");
console.log("----------------------------------");

/* 

Note: Please state O(n) for Time and Space as Well for your answers.

Exercises 1

Given an integer array nums of length n where all the integers of nums are
in the range of [1, n] and each integer appears once or twice, return an
array of all integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant
extra space.

*/

let sortNum = array => array.sort((a, b) => a - b);

let nums6 = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(sortNum(nums6));
// [1, 2, 2, 3, 3, 4, 7, 8]

let nums3 = [4, 3, 2, 7, 8, 2, 3, 1];
// target output is [2, 3]
let nums4 = [1, 1, 2];
// target output is [1]
let nums5 = [1];
// target output is []

function duplicateArray(array) {
  array = sortNum(array);
  let newArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == array[i - 1]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// O(n log (n) time complexity, O(n) space complexity

console.log(duplicateArray(nums3));
// [2, 3]
console.log(duplicateArray(nums4));
// 1
console.log(duplicateArray(nums5));
// []
console.log("-------------------------------------------------");
console.log("--------------------------------------------------");

/* 

Given an array nums containing n distinct numbers in the range [0, n] return
the only number in the range that is missing from the array.

Input: nums = [3, 0, 1]

desired output: 2



*/

let nums11 = [3, 0, 1];
console.log(nums11.length);
// 3
// there are three numbers in the array, the range is 0 to 3
// 3 + 0 + 1 = 4
// 0 + 1 + 2 + 3 = 6
// 6 - 4 = 2
let nums12 = [0, 1];
let nums13 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
let nums14 = [0];

function missingNum(array) {
  let range = array.length;
  let i = 0;
  let j = 0;
  let sum = 0;
  let sum2 = 0;

  for (; i <= range; i++, j++) {
    sum = sum + j;
    if (array[i] != undefined) {
      sum2 = sum2 + array[i];
    }
  }
  return sum - sum2;
}

console.log(missingNum(nums11));
// 2
console.log(missingNum(nums13));
// 8
console.log(missingNum(nums12));
// 2
console.log(missingNum(nums14));
// 1

console.log("--------------------------------------");
console.log("-----------------------------------");

let chipotle = "hammerhead";
let anagram1 = "fried";
let anagram2 = "fired";
let anagram3 = "listen";
let anagram4 = "silent";
let anagram5 = "guitar";
let anagram6 = "drums";

function sortLetters(string) {
  string = string.split("");
  string = string.sort((a, b) => (a > b ? 1 : -1));
  string = string.join("");
  return string;
}

anagram1 = sortLetters(anagram1);
anagram2 = sortLetters(anagram2);
anagram3 = sortLetters(anagram3);
anagram4 = sortLetters(anagram4);
anagram5 = sortLetters(anagram5);
anagram6 = sortLetters(anagram6);

function compareStrings(string1, string2) {
  if (string1 == string2) {
    return true;
  }
  return false;
}

console.log(compareStrings(anagram1, anagram2));
// true
console.log(compareStrings(anagram3, anagram4));
// true
console.log(compareStrings(anagram5, anagram6));
// false

console.log("--------------------------------------------------");
console.log("---------------------------------------------");
console.log(1 + 2 + 4 + 5 + 6 + 8);
// 26
console.log(1 + 2 + 3 + 4 + 5 + 6);
// 21

let nums7 = [4, 3, 2, 7, 8, 2, 3, 1];
// desired output: [2, 3]
// range: 1 to 8
console.log(4 + 3 + 2 + 7 + 8 + 2 + 3 + 1);
// sum of elements: 30
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);
// sum of range: 36
// 36 - 30 = 6

let nums8 = [1, 1, 2];
// desired output: [1]
// range: 1 to 3
// sum of elements: 1 + 1 + 2 = 4
// sum of range: 1 + 2 + 3 = 6
// 6 - 4 = 2

let nums16 = [5, 2, 2, 1, 4, 4, 6, 8, 9];
// desired output [2, 4];
// range: 1 to 9
console.log(5 + 2 + 2 + 1 + 4 + 4 + 6 + 8 + 9);
// sum of elements: 41
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
// sum of range: 45
// 45 - 41 = 4

let nums9 = [1];

let nums17 = [1, 2, 3, 3, 5, 6, 7, 9, 9, 10];
// desired output: [3, 9]
// range: 1 to 10
console.log(1 + 2 + 3 + 3 + 5 + 6 + 7 + 9 + 9 + 10);
// sum of elements: 55
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

console.log("-------------------------------------------------");

console.log(nums7.length);
// 8

if (nums7[0] == 4) {
  let sum = 0;
  let sum2 = 0;
  let i = 0;
  let j = 0;

  for (; i <= nums7.length; i++, j++) {
    sum2 = sum2 + j;
    if (nums7[i] != undefined) {
      sum = sum + nums7[i];
    }
  }
  console.log(`sum of array: ${sum}, sum of range: ${sum2}`);
}

console.log(4 + 3 + 2 + 7 + 8 + 2 + 3 + 1);
// 30
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8);
// 36

function duplicateArray2(array) {
  let checkArray = [];
  let rArray = [];
  let range = array.length;
  let i = 0;
}

console.log("----------------------------------------------");
console.log("------------------------------------------------");
