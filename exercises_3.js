function evenOrOdd(num) {
  let outPut = num % 2 == 0 ? "even" : "odd";
  console.log(outPut);
}

evenOrOdd(2);
// even
evenOrOdd(3);
// odd
evenOrOdd(4);
// even

console.log("-----------------------------------");
console.log("---------------------------------");

function triangularNumber(num) {
  let i = 0;
  let count = 1;
  let sum = 0;
  let rString = "";
  for (; sum < num; count++) {
    sum = sum + count;
  }
  if (sum == num) {
    rString = `${num} is a triangular number`;
  } else rString = `${num} is not a triangular number`;
  console.log(rString);
  console.log(sum);
}

triangularNumber(3);
// 3 is a triangular number
triangularNumber(4);
// 4 is not a triangular number
triangularNumber(6);
// 6 is a triangular number
triangularNumber(7);
// 7 is not a triangular number
triangularNumber(15);
// 15 is a triangular number
triangularNumber(9);
// 9 is not a triangular number
triangularNumber(10);
// 10 is a triangular number
triangularNumber(1);
// 1 is a triangular number

console.log("------------------------------------------");
console.log("---------------------------------------");

function isPalindrome2(string) {
  string = string.toLowerCase();
  let string2 = string;
  string2 = string2.split("");
  string2 = string2.reverse();
  string2 = string2.join("");
  if (string2 == string) {
    return true;
  } else return false;
}

console.log(isPalindrome2("kayak"));
// true
console.log(isPalindrome2("kayak") == true);
// true
console.log("kayak".length);
// 5
console.log("".length);
// 0

console.log("------------------------------------------");
console.log("-----------------------------------------");

function longestPalindromeSubString(string) {
  let max = "";
  let i = 0;
  for (; i < string.length; i++) {
    let rString = string.charAt(i);
    for (let j = i + 1; j < string.length; j++) {
      rString = rString.concat(string.charAt(j));
      if (isPalindrome2(rString) == true) {
        if (rString.length > max.length) {
          max = rString;
        }
      }
    }
  }
  console.log(max);
}

longestPalindromeSubString("rytughskayaktuyi");
// kayak
longestPalindromeSubString("ghfjdracecargjhuyi");
// racecar

console.log("----------------------------------------");
console.log("----------------------------------------");

let racecar = "racecar";
racecar = racecar.split("");
racecar = racecar.sort();
console.log(racecar);

function isogram(string) {
  let string2 = string.split("");
  string2 = string2.sort();
  let i = 0;
  for (; i < string2.length; i++) {
    if (string2[i] == string2[i + 1]) {
      console.log(`${string} is not an isogram.`);
      break;
    } else console.log(`${string} is an isogram.`);
  }
}

isogram("racecar");
// racecar is not an isogram
isogram("dog");
// dog is an isogram
isogram("dachshund");
// dachshund is not an isogram

console.log("--------------------------------------");
console.log("-------------------------------------");

/* 

Fibonacci Number

In mathematics, the Fibonacci numbers are the numbers in the following
integer sequence, and characterized by the fact that every number after the
first two is the sum of the two preceding ones:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

*/

function fibonacciNumber() {
  let sum = 0;
  let nums = [0, 1];
  let i = 1;
  for (; i < 15; i++) {
    sum = nums[i] + nums[i - 1];
    nums.push(sum);
  }
  console.log(nums);
}

fibonacciNumber();
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]

console.log("-------------------------------------------------------------");
console.log("----------------------------------------------------------");

/* 

Maximum subarray problem is the task of finding the contiguous subarray
within a one-dimensional array, of numbers which has the largest sum.

*/

let testArray = [-2, -3, 4, -1, -2, 1, 5, -3];

function largestSubArray(array) {
  let max = 0;
  let i = 0;
  for (; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum = sum + array[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  console.log(max);
}

largestSubArray(testArray);
// 7

console.log("----------------------------------------------------");
console.log("------------------------------------------------");

/* 

Linear Search

In computer science, linear search or sequential search, is a method for 
finding a target value within a list. It sequentially checks each element of the
list for the target value until a match is found or until all of the elements 
have been searched. Linear search runs in at worst linear time and makes at 
most n comparisons, where n is the length of the list

*/

let testArray2 = [23, 25, 27, 29, 31, 33, 35, 37];

let testArray3 = [42, 44, 46, 48, 50, 52, 54, 56];

function linearSearch(array, target) {
  let i = 0;
  let rString = "";
  for (; i < array.length; i++) {
    if (array[i] == target) {
      rString = `${target} is at index ${i}`;
      break;
    } else rString = `${target} is not in this array`;
  }
  console.log(rString);
}

linearSearch(testArray2, 37);
// 37 is at index 7
linearSearch(testArray3, 44);
// 44 is at index 1
linearSearch(testArray3, 156);
// 156 is not in this array

console.log("---------------------------------------------------");
console.log("--------------------------------------------------");

/* 

Diff Two Arrays

This algorithm is about to compare two arrays and return a new array with 
any items only found in one of the two given arrays, but not both. In other 
words, return the symmetric difference of the two arrays.

*/

const roboClone1 = [
  "Hank-44",
  "Warren-21",
  "Mellon-Tech",
  "Laramie",
  "Eggplant-Head"
];

const roboClone2 = [
  "Hank-44",
  "Green Egg",
  "Warren-21",
  "Mellon-Tech",
  "Eggplant-Head"
];

function diffArray(array1, array2) {
  let i = 0;
  let elements = [];
  let j = 0;

  for (; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      elements.push(array1[i]);
    }
  }

  for (; j < array2.length; j++) {
    if (!array1.includes(array2[j])) {
      elements.push(array2[j]);
    }
  }
  console.log(elements);
}

diffArray(roboClone1, roboClone2);
// ['Laramie', 'Green Egg']

console.log("--------------------------------------------------");
console.log("-------------------------------------------------");

function areaOfCircle(radius) {
  // Area = Pi * radius^2

  let area = Math.PI * Math.pow(radius, 2);
  console.log(area);
}

areaOfCircle(5);
// 78.54
areaOfCircle(9);
// 254.469

console.log("----------------------------------------");
console.log("--------------------------------------");

// function to find area of a triangle

// (height * base) / 2 == area

function areaOfTriangle(height, base) {
  let area = (height * base) / 2;
  console.log(area);
}

areaOfTriangle(5, 4);
// 10
areaOfTriangle(37, 20);
// 370

console.log("---------------------------------------");
console.log("---------------------------------------");

let testNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if ("Mellon-Tech" == "Mellon-Tech") {
  let count1 = 0;
  let count2 = 1;
  let count3 = 0;
  let count4 = 1;
  let i = 0;

  for (; i < testNums.length / 2; i++) {
    let sliced = testNums.slice(count1, count2);
    sliced = sliced.join("");
    console.log(sliced);
    count3++;
    count4++;
    count1 = count1 + count3;
    count2 = count2 + count4;
    if (count2 > testNums.length) {
      break;
    }
  }
}
// 0
// 12
// 345
// 6789

console.log("----------------------------------------");
console.log("--------------------------------------");

let testNums2 = [3, 4, 5, 6, 7];

function floydsTriangle(array) {
  let count1 = 0;
  let count2 = 1;
  let count3 = 0;
  let count4 = 1;
  let i = 0;

  for (; i < array.length / 2; i++) {
    let sliced = array.slice(count1, count2);
    sliced = sliced.join("");
    console.log(sliced);
    count3++;
    count4++;
    count1 = count1 + count3;
    count2 = count2 + count4;
    if (count2 > array.length) {
      break;
    }
  }
}

floydsTriangle(testNums);
// 0
// 12
// 345
// 6789
floydsTriangle(testNums2);
// 3
// 45
// didn't quite work so will need to modify it
