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
    }
  }
  array2.push(keyValue);
  console.log(findMode(array2));
}

//countNums(counters2);
// 4

countNums(counters3);
// 5
countNums(counters4);
// 3
countNums(counters2);
// 4
countNums(counters5);
// 2, fixed it!!!

console.log("---------------------------------");
console.log("-----------------------------");
