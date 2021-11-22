console.log("Hello Oa");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log("------------------------------------------");

console.log("a" + "b");
// function to find all possible combinations
// of a 3 digit number

function threeDigitCombos(num) {
  let num1 = num.toString();
  num1 = num1.split("");
  let i = 0;
  let nums2 = [];

  for (; i < num1.length; i++) {
    if (i == 0) {
      let n1 = num1[i] + num1[i + 1] + num1[i + 2];
      let n2 = num1[i] + num1[i + 2] + num1[i + 1];
      nums2.push(n1, n2);
    } else if (i == 1) {
      let n3 = num1[i] + num1[i + 1] + num1[i - 1];
      let n4 = num1[i] + num1[i - 1] + num1[i + 1];
      nums2.push(n3, n4);
    } else if (i == 2) {
      let n5 = num1[i] + num1[i - 1] + num1[i - 2];
      let n6 = num1[i] + num1[i - 2] + num1[i - 1];
      nums2.push(n5, n6);
    }
  }
  let j = 0;
  for (; j < nums2.length; j++) {
    let nums3 = parseInt(nums2[j]);
    console.log(nums3);
  }
}

threeDigitCombos(942);
// 942
// 924
// 429
// 492
// 249
// 294
console.log("--------------------------------------");
threeDigitCombos(763);
// 763
// 736
// 637
// 673
// 367
// 376

console.log("------------------------------------------");
console.log("---------------------------------------");

// function to sort an array of numbers
// in ascending order

let nums4 = [34, 23, 12, 32, 24];

let nums5 = [63, 54, 45, 46, 50, 21, 30];

let numberSort = array => array.sort((a, b) => a - b);

console.log(numberSort(nums4));
// [12, 23, 24, 32, 34]
console.log(numberSort(nums5));
// [21, 30, 45, 46, 50, 54, 63]

console.log("--------------------------------------");
console.log("------------------------------------------");

// function that returns an ordered number array
// in descending order

let descendingOrder = array => array.sort((a, b) => b - a);

console.log(descendingOrder(nums4));
// [34, 32, 24, 23, 12]
console.log(descendingOrder(nums5));
// [63, 54, 50, 46, 45, 30, 21]

console.log("---------------------------------------");
console.log("--------------------------------------");

// function that delivers the maximum and minimum number
// of an array

function minMax(num) {
  let sorter = num1 => num1.sort((a, b) => a - b);
  num = sorter(num);
  console.log(`The max is ${num[num.length - 1]}`);
  console.log(`The min is ${num[0]}`);
}

minMax(nums4);
// The max is 34
// The min is 12
minMax(nums5);
// The max is 63
// The min is 21

console.log("------------------------------------------");
console.log("------------------------------------------");

// function to capitalize the first letter in each word
// of a sentence;
// input: Bodhi is awesome!
// output: Bodhi Is Awesome!

function capitalizeFirstLetter(string) {
  string = string.split(" ");
  let i = 0;
  let str2 = "";
  let concat = "";
  for (; i < string.length; i++) {
    str2 = string[i];
    str2 = str2.replace(str2.charAt(0), str2.charAt(0).toUpperCase());
    concat = concat + `${str2} `;
  }
  console.log(concat);
}

capitalizeFirstLetter("martian manhumter");
// Martian Manhunter
capitalizeFirstLetter("rocky and bullwinkle");
// Rocky And Bullwinkle

console.log("------------------------------------------");
console.log("------------------------------------------");

// Write a function that converts an object into an array,
// where each element represents a key-value pair in the
// form of an array
// toArray({shrimp: 15, tots: 12}) -> [["shrimp", 15], ["tots", 12]]

const crash44 = {
  name: "Crash Bandicoot",
  name2: "Cortex",
  name3: "Dingodile",
  name4: "Tiny Tiger"
};

console.log(Object.values(crash44)[2]);
// Dingodile
Object.assign(crash44, { name5: "Spyro" });
console.log(crash44);
// adds key value pair to the object

function objectToArray(object) {
  let i = 0;
  let innerArray = [];
  let outerArray = [];

  for (; i < Object.keys(object).length; i++) {
    let key = Object.keys(object)[i];
    let value = Object.values(object)[i];
    innerArray = [key, value];
    outerArray.push(innerArray);
  }
  console.log(outerArray);
}

objectToArray(crash44);

console.log("------------------------------------------");
console.log("---------------------------------------");

// function to assign two string parameters as a key-value
// pair into a preexisting object
const rTrooper = {
  trooper1: "Rogue Trooper"
};

function stringToKeyValue(object, key, value) {
  let keyValue = { [key]: value };
  Object.assign(object, keyValue);
  console.log(object);
}

stringToKeyValue(rTrooper, "trooper2", "Bagman");
// {trooper1: 'Rogue Trooper', trooper2: 'Bagman'}

console.log("-----------------------------------------");
console.log("--------------------------------------");

// function to return unique element from array with
// multiple duplicates
// so if array is [1, 1, 2, 3, 3]
// function should return 2

let duplicates1 = [1, 2, 9, 12, 2, 1, 9, 12, 4];

let duplicates2 = [10, 4, 5, 2, 37, 44, 4, 5, 2, 10, 44];

function uniqueElement(array) {
  array = numberSort(array);
  console.log(array);
  let i = 0;
  let r1 = 0;
  let r2 = 0;

  for (; i < array.length; i++) {
    if (array[i] == array[i + 1] || array[i] == array[i - 1]) {
      r1 = array[i];
    } else r2 = array[i];
  }
  console.log(r2);
}

uniqueElement(duplicates2);
// 37
uniqueElement(duplicates1);
// 4

console.log("----------------------------------------");
console.log("----------------------------------------");

// function to remove duplicates from an array

function removeDuplicates(array) {
  array = numberSort(array);
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      array.splice(i, 1);
    }
  }
  console.log(array);
}

removeDuplicates(duplicates1);
// [1, 2, 4, 9, 12]
removeDuplicates(duplicates2);
// [2, 4, 5, 10, 37, 44]

console.log("-----------------------------------------");
console.log("---------------------------------------");

// function to reverse an array with reverse function
let testArray = [3, 2, 37, 4];
const robots2 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

function reverseArray(array) {
  let i = array.length - 1;
  let array2 = [];
  for (; i >= 0; i--) {
    let string1 = array[i];
    array.pop(i);
    array2.push(string1);
  }
  console.log(array2);
}

reverseArray(testArray);
// [4, 37, 2, 3]
reverseArray(robots);
// ['Eggplant-head', 'Mellon-Tech', 'Warren-21', 'Hank-44']
reverseArray(robots2);
// ['Eggplant-Head', 'Mellon-Tech', 'Warren-21', 'Hank-44']
reverseArray(robots2);
// array is empy since it was previous emptied out

console.log("-------------------------------");
console.log("-----------------------------");

const robots3 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];
const robots4 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-head"];
let practiceArray = [1, 2, 3, 4];

function reverseArray2(array) {
  let i = array.length - 1;
  let count = 0;
  for (; i >= 0; i--) {
    let string = array[array.length - 1];
    array.pop();
    array.splice(count++, 0, string);
  }
  console.log(array);
}
reverseArray2(robots4);
// ['Eggplant-Head', 'Mellon-Tech', 'Warren-21', 'Hank-44']
reverseArray2(practiceArray);
// [4, 3, 2, 1]

console.log("------------------------------");
console.log("-----------------------------");

// another function to find the max value of an
// array

let max2 = [98, 2, 37, 23, 31, 44, 76, 22];
let max3 = [65, 34, 5, 43, 24, 51, 3, 34, 79];

function maxNum(array) {
  let i = 1;
  let max = array[0];
  let min = array[0];
  for (; i < array.length - 1; i++) {
    max = Math.max(max, array[i]);
    min = Math.min(min, array[i]);
  }
  console.log(max, min);
}

maxNum(max2);
// 98 2
console.log(Math.min(null, 1));
// 0
maxNum(max3);
// 65 3

console.log("---------------------------------");
console.log("-------------------------------");

// function to find the average number of all
// array elements

let avg1 = [10, 20, 30, 40];
let avg2 = [30, 50, 30, 50];
console.log((10 + 20 + 30 + 40) / 4);
// 25

function findAverage(array) {
  let i = 0;
  let divisible = array.length;
  let sum = 0;
  let avg;

  for (; i < array.length; i++) {
    sum = sum + array[i];
  }
  avg = sum / divisible;
  console.log(avg);
}

findAverage(avg1);
// 25
findAverage(avg2);
// 40

console.log("-------------------------------");
console.log("-------------------------------");

let sortBot = array => array.sort((a, b) => a - b);
// find the median value of an array
let median1 = [1, 2, 3, 4, 5];
let median2 = [1, 3, 5, 7, 9, 11, 13];
let median3 = [1, 2, 3, 4];
let median4 = [15, 30, 45, 60, 75, 90, 105];
let median5 = [37, 44, 79, 14, 22];

function medianValue(array) {
  if (array.length % 2 == 0) console.log("No Median Value");
  array = sortBot(array);
  let i = 0;
  let median = null;
  let rString = "";
  for (; i < array.length; i++) {
    if (i < (array.length - 1) / 2) {
      rString = "Hello";
    } else if (i > (array.length - 1) / 2) {
      rString = "Hello";
    } else if (i == (array.length - 1) / 2) {
      median = array[i];
    }
  }
  console.log(median);
}

medianValue(median1);
// 3
medianValue(median2);
// 7
medianValue(median3);
// No Median Value
// null
medianValue(median4);
// 60
medianValue(median5);
// 37

console.log("---------------------------------");
console.log("------------------------------");

// function to find the mode number
// sort the array first
// then iterate through each array element
// let's try a brute force approach first
// we'll want to push different elements into
// their own arrays, and then evaluate
// the arrays against each other to get
// the one with the most elements
// out of that

function findMode(array) {
  let i = 1;
  let max = array[0].times;
  let mode = array[0].num;
  for (; i < array.length; i++) {
    if (array[i].times > max) {
      max = array[i].times;
      mode = array[i].num;
    }
  }
  return mode;
}

let counters2 = [3, 3, 3, 4, 4, 4, 4];
let counters3 = [4, 4, 5, 5, 5, 5, 5];
let counters4 = [2, 2, 3, 3, 3];
let counters5 = [1, 2, 2];
let counters6 = [3, 4, 4, 5, 6, 6, 7, 7, 7];
let counters7 = [2, 4, 4, 5, 5, 5, 5, 9, 9];
let counters8 = [1, 3, 3, 9, 9, 9, 9, 12, 12];
let counters9 = [20, 20, 21, 21, 21, 22, 22, 23];

function countNums(array) {
  let i = 0;
  let count = 1;
  let keyValue = { times: 1, num: array[0] };
  let array2 = [];
  for (; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      count++;
      keyValue = { times: count, num: array[i] };
    } else {
      array2.push(keyValue);
      count = 1;
      keyValue = { times: count, num: array[i] };
    }
  }
  array2.push(keyValue);
  console.log(findMode(array2));
}

countNums(counters3);
// 5
countNums(counters4);
// 3
countNums(counters2);
// 4
countNums(counters5);
// 2, fixed it!!!
countNums(counters6);
// 7
countNums(counters7);
// 5
countNums(counters8);
// 9
countNums(counters9);
// 21

console.log("---------------------------------");
console.log("-----------------------------");

// function to keep a count of each
// array element

const roboClones = [
  "Mellon-Tech",
  "Hank-44",
  "Eggplant-Head",
  "Warren-21",
  "Warren-21",
  "Mellon-Tech",
  "Hank-44",
  "Eggplant-head",
  "Warren-21",
  "Hank-44",
  "Mellon-Tech",
  "Hank-44",
  "Eggplant-Head",
  "Mellon-Tech",
  "Warren-21"
];

const robots9 = [
  "Hank-44",
  "Warren-21",
  "Mellon-tech",
  "Mellon-Tech",
  "Eggplant-Head"
];

function countElements(array) {
  array.sort();
  let i = 0;
  let count = 1;
  let newElement = { [array[0]]: count };
  let array2 = [];

  for (; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      count++;
      newElement = { [array[i]]: count };
    } else {
      array.push(newElement);
      count = 1;
      newElement = { [array[i]]: count };
    }
  }
  array2.push(newElement);
  console.log(array2);
}

// countElements(robots9);

// current crashes devtools/
// not sure why yet

console.log("Hello Oa");

console.log("--------------------------------");
console.log("--------------------------------");

// algorithm to find the missing letter
// or number in a sequence

let alpha1 = "abcdefg";
let alpha2 = "abcefg";
let alpha3 = "hijklmn";
let alpha4 = "hiklmn";
let alpha5 = "qrstuvwx";
let alpha6 = "qrstuwx";

let numSequence1 = "123456";
let numSequence2 = "12356";

function missingLetterInSequence(string1, string2) {
  let i = 0;

  for (; i < string1.length; i++) {
    let s1 = string1.charAt(i);
    let s2 = string2.charAt(i);
    if (s1 != s2) {
      console.log(s1);
      break;
    }
  }
}

missingLetterInSequence(alpha1, alpha2);
// d
missingLetterInSequence(alpha3, alpha4);
// j
missingLetterInSequence(alpha5, alpha6);
// v
missingLetterInSequence(numSequence1, numSequence2);
// 4

console.log("------------------------------------");
console.log("----------------------------------");

// algorithm to convert words in Pig Latin

let vowels = ["a", "e", "i", "o", "u"];
let consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z"
];

console.log(vowels.includes("a"));
// true
console.log(consonants.includes("c"));
// true
console.log(vowels.includes("b"));
// false
console.log(consonants.includes("e"));
// false

let box105 = "box";
box105 = box105.replace(box105.charAt(0), "");
console.log(box105);
// ox

function pigLatin(string) {
  // box = oxbay
  // oval = ovalway
  let first = string.charAt(0);
  if (vowels.includes(first)) {
    string = string.concat("way");
  } else {
    string = string.replace(first, "");
    string = string.concat(first);
    string = string.concat("ay");
  }
  console.log(string);
}

pigLatin("box");
// oxbay
pigLatin("book");
// ookbay
pigLatin("oval");
// ovalway
pigLatin("ram");
// amray

console.log("----------------------------------");
console.log("----------------------------------");

// algorith to find lowest common multiple

let oneFive = [1, 2, 3, 4, 5];

function lowestCommonMultiple(array) {
  let i = 0;
}

console.log("---------------------------------");
console.log("----------------------------------");

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2,
// with the first two elements of nums being 2.
// It does not matter what you leave beyond the
// returned k (hence they are underscores).

let nums102 = [44, 23, 44, 22, 34, 32, 44, 57];
let nums103 = [65, 74, 74, 34, 22, 21, 74, 74];

function removeArrayElement(array, val) {
  let i = 0;
  let count = 0;
  for (; i < array.length; i++) {
    if (array[i] == val) {
      array.splice(i, 1, "_");
      count++;
    }
  }
  console.log(count, array);
}

removeArrayElement(nums102, 44);
// 3 ['_', 23, '_', 22, 34, 32, '_', 57]
removeArrayElement(nums103, 74);
// 4 [65, '_', '_', 34, 22, 21, '_', '_']

console.log("-----------------------------------");
console.log("---------------------------------");

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//  Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

let nums107 = [1, 3, 5, 6];
console.log(nums107.indexOf(5));
// 2

function searchInsertPosition(array, target) {
  let i = 0;
  let returnIndex = -1;
  for (; i < array.length; i++) {
    if (array[i] == target) {
      returnIndex = array.indexOf(target);
    }
  }
  console.log(returnIndex);
}

searchInsertPosition(nums107, 6);
// 3
searchInsertPosition(nums107, 1);
// 0
searchInsertPosition(nums107, 3);
// 1
searchInsertPosition(nums107, 5);
// 2
searchInsertPosition(nums107, 9);
// -1

console.log("-----------------------------------");
console.log("----------------------------------");

let unSort101 = [3, 2, 4, 5];

let sortNumber = array => array.sort((a, b) => a - b);

console.log(sortNumber(unSort101));

let unSort102 = [9, 4, 5, 2, 3, 12, 1];

function searchInsertPosition2(array, target) {
  let returnIndex = -1;

  if (array.includes(target)) {
    returnIndex = array.indexOf(target);
  } else {
    array.push(target);
    array = sortNumber(array);
    returnIndex = array.indexOf(target);
  }
  console.log(returnIndex);
}

searchInsertPosition2(unSort102, 9);
// 0
searchInsertPosition2(unSort102, 4);
// 1
searchInsertPosition2(unSort102, 5);
// 2
searchInsertPosition2(unSort102, 2);
// 3
searchInsertPosition2(unSort102, 11);
// 6
console.log(unSort102);
// [1, 2, 3, 4, 5, 9, 11, 12]

console.log("----------------------------------");
console.log("---------------------------------");

// needle in hayStack
// find index of substring

const catDog = "CatDog";
const catDog2 = "Dog";
let tech = "tech";
const mellonTech = "Mellon-Tech";

console.log(catDog.indexOf(catDog2));
// 3

function needleInHayStack(needle, haystack) {
  needle = needle.toLowerCase();
  haystack = haystack.toLowerCase();
  let index = -1;
  index = haystack.indexOf(needle);
  console.log(index);
}

needleInHayStack(catDog2, catDog);
// 3
needleInHayStack(tech, mellonTech);
// 7

console.log("----------------------------------");
console.log("------------------------------------");

let testNums = [1, 2, -3, 4, 5];
let testNums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 0 + (-2) = -2
// -2 + 1 = -1
// -1 + (-3) = -4

function maximumSubArray(array) {}

console.log("-----------------------------------------");
console.log("----------------------------------------------");

function squareNumber(num) {
  let rString = "";
  let num2 = num / Math.sqrt(num);
  let num3 = Math.sqrt(num);
  if (num2 == num3) {
    rString = `${num} is a square number`;
  } else {
    rString = `${num} is not a square number`;
  }
  console.log(rString);
}

squareNumber(25);
// 25 is a square number
squareNumber(24);
// 24 is not a square number
squareNumber(36);
// 36 is a square number
squareNumber(37);
// 37 is not a square number

console.log("----------------------------------");
console.log("------------------------------------");

// pentagonal number

// 5
// 5 dots make pentagon border
// 0 dots inside pentagon

// 12
// 10 dots make pentagon border
// 2 dots inside pentagon

// 22
// 15 dots make pentagon border
// 7 dots inside pentagon

// 35
// 20 dots make pentagon border
// 15 dots inside pentagon

// 1, 5, 12, 22, 35, 51, 70, 92

// increments by 4, 7, 10, 13, 16, 19, 22

let numArray = [];

function pentagonalArray() {
  let i = 0;
  let num = 1;
  let count = 1;

  for (; num <= 1000; num = num + count) {
    numArray.push(num);
    count = count + 3;
  }
  console.log(numArray);
}

pentagonalArray();

function pentagonalNumber(num) {
  let rString = "";
  if (numArray.includes(num)) {
    rString = `${num} is a pentagonal number`;
  } else if (num > 1000) {
    rString = "out of scope";
  } else {
    rString = `${num} is not a pentagonal number`;
  }
  console.log(rString);
}

pentagonalNumber(5);
// 5 is pentagonal number
pentagonalNumber(9);
// 9 is not a pentagonal number
pentagonalNumber(12);
// 12 is a pentagonal number
pentagonalNumber(35);
// 35 is a pentagonal number
pentagonalNumber(2021);
// out of scope
pentagonalNumber(3044);
// out of scope
pentagonalNumber(956);
// 956 is not a pentagonal number

console.log("-----------------------------------");
console.log("-------------------------------");

// abundant number
// a number that is less than the sum of its divisors
// for example: 12
// 1 + 2 + 3 + 4 + 6 = 16

function abundantNumber(num) {
  let i = 1;
  let sum = 0;
  let rString = "";
  for (; i < num; i++) {
    if (num % i == 0) {
      sum = sum + i;
    }
  }
  if (num < sum) {
    rString = `${num} is an abundant number`;
  } else {
    rString = `${num} is not an abundant number`;
  }
  console.log(sum);
  console.log(rString);
}

abundantNumber(12);
// 16
// 12 is an abundant number
abundantNumber(20);
// 22
// 20 is an abundant number
abundantNumber(33);
// 15
// 33 is not an abundant number
abundantNumber(48);
// 76
// 48 is not an abundant number

console.log("------------------------------------");
console.log("-----------------------------------");

function primeNumber(num) {
  if (num == 2) console.log(`${num} is a prime number`);
  if (num < 2) console.log("input must be at least 2");
  let i = 2;
  let rString = "";
  for (; i < num; i++) {
    if (num % i == 0) {
      rString = `${num} is not a prime number`;
      break;
    } else rString = `${num} is a prime number`;
  }
  console.log(rString);
}

primeNumber(3);
// 3 is prime number
primeNumber(4);
// 4 is not a prime number
primeNumber(-20);
// input must be at least 2
primeNumber(7);
// 7 is a prime number
primeNumber(9);
// 9 is not a prime number

console.log("----------------------------------");
console.log("---------------------------------");

/* 

Automorphic number: 

An automorphic number is a number which is present 
in the last digit(s) of its square. Example: 25 is
an automorphic number as its square is 625 and 25
is present as the last digits

*/

function autoMorphicNumber(num) {
  let rString = "";
  let num2 = Math.pow(num, 2);
  let string1 = num.toString();
  let string2 = num2.toString();
  let string3 = num2.toString();

  let i = 0;
  for (; i < string2.length; i++) {
    string3 = string3.replace(string3.charAt(0), "");
    if (string3 == string1) {
      rString = `${num} is an automorphic number`;
      break;
    } else {
      rString = `${num} is not an automorphic number`;
    }
  }
  if (num == 1) rString = `1 is an autmorphic number`;

  console.log(rString);
}

autoMorphicNumber(25);
// is an automorphic number
autoMorphicNumber(24);
// 24 is not an automorphic number
autoMorphicNumber(1);
// 1 is an automorphic number
autoMorphicNumber(5);
// 5 is an automorphic number
autoMorphicNumber(6);
// 6 is an automorphic number
autoMorphicNumber(7);
// 7 is not an automorphic number
autoMorphicNumber(76);
// 76 is an automorphic number
autoMorphicNumber(77);
// 77 is not an automorphic number
autoMorphicNumber(376);
// 376 is an automorphic number

console.log("-------------------------------------");
console.log("-----------------------------------");
