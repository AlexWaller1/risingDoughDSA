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

console.log("----------------------------------------");
console.log("--------------------------------------");

// exercises
let numbers1 = [1, 3, 5, 7, 9, 11, 13, 15];

let numbers2 = [2, 4, 6, 8, 10, 12, 14, 16];

let numbers3 = [37];

testArray = [];

function maxMin(numsArray = testArray) {
  if (numsArray.length == 0) console.log("Array is Empty.");
  if (numsArray.length == 1) console.log("Array only has 1 number");
  let max = numsArray[0];
  let min = numsArray[0];
  for (let i = 1; i < numsArray.length; i++) {
    let currentNum = numsArray[i];
    if (currentNum > max) {
      max = currentNum;
    }
    if (currentNum < min) {
      min = currentNum;
    }
  }
  console.log(`The max number is ${max} and the
    min number is ${min}.`);
}

maxMin();
// Array is Empty.
// The max number is undefined and the min number
// is undefined

maxMin(numbers1);
// The max number is 15 and the min number is 1.
maxMin(numbers2);
// The max number is 16 and the min number is 2.

maxMin(numbers3);
// Array only has 1 number.
// The max number is 37 and the min number is 37
console.log("-----------------------------------");
console.log("-----------------------------------");

let voteCount1 = { upVotes: 37, downVotes: 42 };
console.log(voteCount1);
// { upVotes: 37, downVotes: 44}
let voteCount2 = { upVotes: 24, downVotes: 26 };

let voteCount3 = { upVotes: 9, downVotes: 5 };

let voteCounter = voteParams =>
  console.log(voteParams.upVotes - voteParams.downVotes);

voteCounter(voteCount1);
// -5
voteCounter(voteCount2);
// -2
voteCounter(voteCount3);
// 4

console.log("------------------------------------");
console.log("------------------------------------");

function fizzBuzzCount(num1 = 3, num2 = 9) {
  for (let i = num1; i <= num2; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Fizz");
    } else if (i % 3 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzzCount();
// Buzz
// 4
// Fizz
// Buzz
// 7
// 8
// Buzz

fizzBuzzCount(15, 20);
// FizzBuzz
// 16
// 17
// Buzz
// 19
// Fizz
console.log("----------------------------------");

let getRandom = params1 =>
  console.log(params1[Math.floor(Math.random() * params1.length)]);

getRandom(numbers1);
// will print random numbers1 element every time
// console is loaded
getRandom(numbers2);
// will print random numbers2 element every time
// console is loaded
console.log("------------------------------------");
console.log("------------------------------------");

let twoWords = [
  { firstWord: "pencil", lastWord: "sharpener" },
  { firstWord: "dodge", lastWord: "camry" },
  { firstWord: "chevy", lastWord: "camaro" },
  { firstWord: "volkswagen", lastWord: "gti" },
  { firstWord: "sony", lastWord: "playstation" },
  { firstWord: "tony", lastWord: "soprano" }
];

function camelCase(array54) {
  if (array54.length == 0) console.log("Array is Empty");
  let hh1 = 0;
  let a1 = "";
  let a2 = "";
  for (; hh1 < array54.length; hh1++) {
    a1 = array54[hh1];
    //  console.log(a1.firstWord.concat(a1.lastWord));
    a2 = array54[hh1].firstWord;

    a1 = a1.lastWord.replace(
      a1.lastWord.charAt(0),
      a1.lastWord.charAt(0).toUpperCase()
    );
    // a1 = a1.firstWord.concat(a1.lastWord);

    console.log(a2.concat(a1));
  }
}

camelCase(twoWords);
// pencilSharpener
// dodgeCamry
// chevyCamaro
// volkswagenGti
// sonyPlaystation
// tonySoprano

console.log("----------------------------------------");
console.log("---------------------------------------");

const crashBandicoot = {
  name: "Crash Bandicoot",
  animalSpecies: "Bandicoot",
  cartColor: "Blue"
};

const cortexPair = { adversary: "Neo Cortex" };

Object.assign(crashBandicoot, cortexPair);

console.log(crashBandicoot);
// added cortexPair to crashBanicoot

function addKeyValue(object, key, value) {
  let newPair = { [key]: value };
  Object.assign(object, newPair);
  console.log(object);
}

addKeyValue(crashBandicoot, "friend", "Spyro");
// added friend: 'Spyro' to crashBandicoot

console.log("----------------------------------------");
console.log("--------------------------------------");

// JSON practice

console.log(JSON.stringify(crashBandicoot));
// {"name":"Crash Banicoot", "animalSpecies":"Bandicoot",
// "cartColor":"Blue"}
// in JSON

let crashJSON = JSON.stringify(crashBandicoot);

console.log(JSON.parse(crashJSON));
// {name: 'Crash Bandicoot", animalSpecies: 'Bandicoot',
// cartColor: 'Blue'}
// in JavaScript

console.log(typeof crashJSON);
// string
console.log(typeof crashJSON == "string");
// true
console.log("-------------------------------------");
console.log("-----------------------------------");

function palindromeNumber(num) {
  let num1 = num;
  num1 = num1.toString();
  num1 = num1.split("");
  num1 = num1.reverse();
  num1 = num1.join("");
  let num2 = parseInt(num1);
  if (num == num2) {
    console.log(`${num} == ${num2}`);
  } else console.log(`${num} != ${num2}`);
}

palindromeNumber(37);
// 37 != 73
palindromeNumber(1001);
// 1001 == 1001
palindromeNumber(10);
// 10 != 1

console.log("------------------------------------------------");
console.log("----------------------------------------------");

// add 0 at midpoint of even number double digit or more
// input: 12
// output: 102
// input: 2154
// output: 21054

function zeroInMiddle(num) {
  let numString = num.toString();
  if (numString.length % 2 != 0) return "must have even number of digits";

  numString = numString.split("");
  numString.splice(numString.length / 2, 0, 0);
  numString = numString.join("");
  let rNum = parseInt(numString);
  return rNum;
}

console.log(zeroInMiddle(12));
// 102
console.log(zeroInMiddle(1));
// must have even number of digits
console.log(zeroInMiddle(2));
// must have even number of digits
console.log(zeroInMiddle(314));
// must have even number of digits
console.log(zeroInMiddle(2145));
// 21045
console.log(zeroInMiddle(234754));
// 2340754

console.log("---------------------------------------------------");
console.log("--------------------------------------------------");

let binary1 = [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1];

let binary2 = [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1];

let binary3 = [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

// function to find longest consecutive number of 1s

function binaryCount(array) {
  let count = 0;
  let count2 = 0;
  let max = 0;
  let max2 = 0;
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] == 1) {
      count++;
      if (count2 > max2) {
        max2 = count2;
      }
      count2 = 0;
    } else if (array[i] != 1) {
      count2++;
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  console.log(`${max} consecutive 1's and ${max2} consecutive 0's`);
}

binaryCount(binary1);
// 4 consecutive 1's and 3 consecutive 0's
binaryCount(binary2);
// 5 consecutive 1's and 2 consecutive 0's
binaryCount(binary3);
// 3 consecutive 1's and 2 consecutive 0's

console.log("----------------------------------------------------");
console.log("------------------------------------------------");

// randomly shuffle array elements

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];
console.log(robots[2]);
// Mellon-Tech
console.log("------------------------------------------------");

const letters = ["a", "b", "c", "d", "e"];

function shuffleArray(array) {
  let i = 0;

  let temp = 0;

  for (; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    console.log("j", j);
    // first iteration
    // j = 0
    // second iteration
    // j = 0
    // third iteration
    // j = 0

    temp = array[i];
    console.log("temp", temp);
    // temp = "a"
    // temp = "b"
    // temp = "c"

    array[i] = array[j];
    console.log("array[i]", array[i]);
    // array[0] = array[0]
    // array[i] = "a"
    // array[1] = array[0]
    // array[i] = "a", at index 1, "b" changed to "a"
    // array[2] = array[0]
    // array[i] = "b", at index 2, "c" changed to "b"

    array[j] = temp;
    console.log("array[j]", array[j]);
    // j = 0
    // array[0] = "a"
    // array[0] = "b", at index 0, "a" changed to "b"
    // j = 0
    // array[0] = "c", at index 0, "b" changed to "c"

    // after first iteration nothing changes in array
    // after second iteration, array is ['b', 'a', 'c', 'd', 'e']
    // after third iteration, array is ['c', 'a', 'b', 'd', 'e']

    console.log(array);
    console.log("----------------------------------------------");
  }
  console.log(array);
}

shuffleArray(letters);

console.log("---------------------------------------------");
console.log("-----------------------------------------------");
console.log("-------------------------------------------------");
console.log("-----------------------------------------------");

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(nums2[0]);
// 1

if (nums2[0] == 1) {
  let i = 0;
  for (; i < nums2.length; i++) {
    console.log(nums2[i]);
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
    // 11
    // 12
    // 13
    // 14
    // 15
  }
}

console.log("----------------------------------------------");
console.log("------------------------------------------");

let nums = [1, 2, 3, 4];

function shuffleArray2(array) {
  let temp = 0;
  let j = 0;
  let i = 0;

  for (; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);

    temp = array[i];

    array[i] = array[j];

    array[j] = temp;
  }
  console.log(array);
}

shuffleArray2(nums);
// [3, 1, 2, 4]
// [1, 2, 3, 4]
// [2, 1, 3, 4]
// [4, 1, 2, 3]
// [1, 2, 3, 4]
// [4, 2, 1, 3]
// [3, 4, 1, 2]
// [3, 1, 4, 2]
// [2, 3, 4, 1]

let hearts = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen", "Ace"];

let spades = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen", "Ace"];

let heartsAndSpades = [...hearts, ...spades];
// combines both arrays into one array, nothing is nested

console.log(heartsAndSpades);

console.log(shuffleArray2(heartsAndSpades));

let decimalString = "7.5";

let numString = "9";

console.log(parseInt(decimalString));
// 7
console.log(parseFloat(decimalString));
// 7.5
console.log(parseFloat(numString));
// 9

let aceOfClubs = "Ace of Clubs";

console.log(aceOfClubs.includes("Ace"));
// true
console.log(aceOfClubs.includes("Ace") == true);
// true
console.log(aceOfClubs.includes("Ace") === true);
// true
console.log("Mellon-Tech" === "string");
// false
console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head]
console.log(typeof robots == "object");
// true
console.log(typeof robots === "object");
// true
console.log(3 == "3");
// true
console.log(3 === "3");
// false

const theMatrix = ["Neo", "Trinity", "Morpheus", "Agent Smith"];

console.log(theMatrix[0]);
// Neo
console.log("---------------------------------");
if (theMatrix[0] == "Neo") {
  let i = 0;
  while (i < theMatrix.length) {
    console.log(theMatrix[i]);
    // Neo
    // Trinity
    // Morpheus
    // Agent Smith
    i++;
  }
}

if (theMatrix[2] == "Morpheus") {
  let i = theMatrix.length - 1;
  do {
    console.log(theMatrix[i]);
    // Agent Smith
    // Morpheus
    // Trinity
    // Neo
    i--;
  } while (i >= 0);
}
console.log("--------------------------------------");

console.log(theMatrix[Math.floor(Math.random() * theMatrix.length)]);
// Agent Smith
// Neo
// Trinity
// Morpheus
// Agent Smith
// Agent Smith
// Agent Smith
console.log("-------------------------------------------------");

function matrixShuffle(array) {
  let random = "";
  let temp = "";
  let i = 0;

  for (; i < array.length; i++) {
    random = Math.floor(Math.random() * array.length);
    console.log(random);
    // 1st iteration
    // random = 3
    // 2nd iteration
    // random = 2
    temp = array[i];
    // 1st iteration
    // temp = array[0];
    // temp = "Neo";
    // 2nd iteration
    // temp = array[1];
    // temp = "Trinity";
    array[i] = array[random];
    // 1st iteration
    // array[0] = array[3];
    // array[0] = "Agent Smith";
    // 2nd iteration
    // array[1] =
    array[random] = temp;
    // 1st iteration
    // array[3] = array[0];
    // array[3] = "Neo";
  }
  console.log(array);
}

matrixShuffle(theMatrix);

const pizzaWarriors = [
  "Rising Dough",
  "Brooke Nevins",
  "Timber-Tron",
  "Sal Campana",
  "Stokes Mitchell",
  "Croix James",
  "Laila Blanco",
  "Dex Garrity"
];

console.log(pizzaWarriors[0]);
// Rising Dough
console.log(pizzaWarriors[1]);
// Brooke Nevins
console.log(pizzaWarriors[2]);
// Timber-Tron
console.log(pizzaWarriors[pizzaWarriors.length - 1]);
// Dex Garrity
console.log(pizzaWarriors.indexOf("Dex Garrity"));
// 7
console.log(pizzaWarriors[7]);
// Dex Garrity
console.log("-------------------------------------------------");

if (pizzaWarriors[7] == "Dex Garrity") {
  let i = 0;
  for (; i < pizzaWarriors.length; i++) {
    console.log(pizzaWarriors[i]);
    // Rising Dough
    // Brooke Nevins
    // Timber-Tron
    // Sal Campana
    // Stokes Mitchell
    // Croix James
    // Laila Blanco
    // Dex Garrity
  }
}

console.log(pizzaWarriors[0] == "Rising Dough");
// true
console.log(typeof pizzaWarriors == "object");
// true
console.log(typeof pizzaWarriors[0] == "string");
// true
console.log(typeof pizzaWarriors[1] == "number");
// false
console.log(typeof 4 == "number");
// true

console.log([pizzaWarriors[5]]);
// ['Croix James']
console.log(pizzaWarriors[5]);
// Croix James
let pizzaNums = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

if (pizzaWarriors[5] == "Croix James") {
  let pizza1 = pizzaNums.filter(n => n > 15);
  console.log(pizza1);
  // [18, 21, 24, 27, 30]
  let pizza2 = pizzaNums.filter(n => n > 15 && n < 27);
  console.log(pizza2);
  // [18, 21, 24]
}

console.log(pizzaWarriors[Math.floor(Math.random() * pizzaWarriors.length)]);
// Rising Dough
// Laila Blanco
// Stokes Mitchell
// Dex Garrity
console.log(pizzaWarriors.indexOf("Brooke Nevins"));
// 1
console.log(pizzaWarriors.indexOf("Timber-Tron"));
// 2
console.log(pizzaWarriors.indexOf("Sal Campana"));
// 3

const risingDough = {
  name: "Rising Dough",
  species: "Robot: Window-Cleanse 10.5",
  vehicle: "Hover Bike",
  favoriteFood: "Pizza",
  favoriteDrink: "Pickerel Cola",
  friends: {
    friend1: pizzaWarriors[1],
    friend2: pizzaWarriors[2],
    friend3: pizzaWarriors[3]
  }
};

console.log(risingDough.name);
// Rising Dough
console.log(risingDough.species);
// Robot: Window Cleanse 10.5
console.log(risingDough.friends.friend1);
// Brooke Nevins

let {
  name: pizzaBot,
  species: windowCleanse,
  vehicle: hoverBike,
  favoriteFood,
  favoriteDrink,
  friends: { friend1: brookeNevins, friend2: timberTron, friend3: salCampana }
} = risingDough;

console.log("-----------------------------------");
console.log(pizzaBot);
// Rising Dough
console.log(windowCleanse);
// Robot: Window-Cleanse 10.5
console.log(hoverBike);
// Hover Bike
console.log(favoriteFood);
// Pizza
console.log(favoriteDrink);
// Pickerel Cola
console.log(brookeNevins);
// Brooke Nevins
console.log(timberTron);
// Timber-Tron
console.log(salCampana);
// Sal Campana

console.log(pizzaWarriors[5]);
// Croix James

function randomPizza(array) {
  let j = 0;
  let temp = 0;
  let i = 0;
  for (; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log(array);
}

// randomPizza(pizzaWarriors);

console.log("--------------------------------");

// function randomPizza2(array) {
//   let random = 0;
//   let temp = 0;
//   let i = 0;
//   for (; i < array.length; i++) {
//     random = array[Math.floor(Math.random() * array.length)];
//     temp = array[i];
//     array[i] = random;
//     random = temp;
//     // doesn't work as there is no reassignment the other way around
//   }
//   console.log(array);
// }

// randomPizza2(pizzaWarriors);

console.log(pizzaWarriors[5]);
// Brooke Nevins
console.log(pizzaWarriors.indexOf("Croix James"));
// 4

console.log(pizzaWarriors);

console.log(pizzaWarriors[5]);
// Croix James
console.log(pizzaWarriors[0]);
// Rising Dough
console.log(pizzaWarriors[1]);
// Brooke Nevins
console.log("--------------------------------------");
console.log("-------------------------------");

if (pizzaWarriors[1] == "Brooke Nevins") {
  let i = pizzaWarriors.length - 1;
  while (i >= 0) {
    console.log(pizzaWarriors[i]);
    // Dex Garrity
    // Laila Blanco
    // Croix James
    // Stoles Mitchell
    // Sal Campana
    // Timber-Tron
    // Brooke Nevins
    // Rising Dough
    i--;
  }
}
console.log("-------------------------");
console.log(pizzaWarriors[2]);
// Timber-Tron
console.log("---------------------------------");

if (pizzaWarriors[2] == "Timber-Tron") {
  let i = 0;
  do {
    console.log(pizzaWarriors[i]);
    // Rising Dough
    // Brooke Nevins
    // Timber-Tron
    // Sal Campana
    // Stokes Mitchell
    // Croix James
    // Laila Blanco
    // Dex Garrity
    i++;
  } while (i < pizzaWarriors.length);
}

console.log("--------------------------------");
console.log("--------------------------------");

if (pizzaWarriors[2] == "Timber-Tron") {
  let i = 0;
  for (; i < pizzaWarriors.length; i++) {
    switch (pizzaWarriors[i]) {
      case "Rising Dough":
        console.log(`${pizzaWarriors[i]} has a great Pizza Jacket`);
        break;
      case "Dex Garrity":
        console.log(`${pizzaWarriors[i]} can build anything`);
        break;
      case "Croix James":
        console.log(`${pizzaWarriors[i]} is the CEO of Pickerel Cola`);
        break;
      case "Sal Campana":
        console.log(`${pizzaWarriors[i]} is an awesome Pizza Chef`);
        break;
      default:
        console.log(`${pizzaWarriors[i]} is a character in Pizza Warriors`);
        break;
    }
  }
  // Rising Dough has a great Pizza Jacket
  // Brooke Nevins is a character in Pizza Warriors
  // Timber-Tron is a character in Pizza Warriors
  // Sal Campana is an awesome Pizza Chef
  // Stokes Mitchell is a character in Pizza Warriors
  // Croix James is the CEO of Pickerel Cola
  // Laila Blanco is a character in Pizza Warriors
  // Dex Garrity can build anything
}

const pizzaWarriors2 = [
  {
    name: "Rising Dough",
    species: "Robot: Window Cleanse 10.5"
  },
  {
    name: "Brooke Nevins",
    species: "Human"
  },
  {
    name: "Timber-Tron",
    species: "Robot: Timber_Io 34"
  },
  {
    name: "Sal Campana",
    species: "Human"
  },
  {
    name: "Stokes Mitchell",
    species: "Human"
  },
  {
    name: "Croix James",
    species: "Pickerel"
  },
  {
    name: "Laila Blanco",
    species: "Human"
  },
  {
    name: "Dex Garrity",
    species: "Robot: Robo-Welder 4000"
  }
];

let sortPizza = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortPizza(pizzaWarriors2));

console.log(pizzaWarriors[2]);
// Timber-Tron

let sortPizza2 = array => array.sort((a, b) => (a > b ? 1 : -1));
// array of objects now sorted by name property

console.log(sortPizza2(pizzaWarriors));
// ['Brooke Nevins', 'Croix James', 'Dex Garrity', 'Laila Blanco',
//  'Rising Dough', 'Sal Campana', 'Stokes Mitchell' 'Timber-Tron']
console.log(pizzaWarriors.indexOf("Timber-Tron"));
// 7

if (pizzaWarriors[7] == "Timber-Tron") {
  console.log("Rising Dough");

  let pizza1 = pizzaWarriors2.map(function (pizza2) {
    return pizza2.name;
  });
  console.log(pizza1);

  let pizza3 = sortPizza2(pizza1);

  console.log(pizza3);
  // returns ordered array
}

function findIndex(element, array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] == element) {
      return i;
    }
  }
}

console.log(findIndex("Timber-Tron", pizzaWarriors));
// 7
console.log(findIndex("Brooke Nevins", pizzaWarriors));
// 0
console.log(findIndex("Croix James", pizzaWarriors));
// 1
let pizzaNums2 = [1, 2, 1, 3, 1];
console.log(pizzaNums2.length);
// 5
let clones = ["Ben Reilly", "Ben Reilly", "Ben Reilly"];

function findLastIndex(element, array) {
  let indexes = [];
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] == element) {
      indexes.push(i);
    }
  }
  return indexes[indexes.length - 1];
}

console.log(findLastIndex(1, pizzaNums2));
// 4
console.log(findLastIndex("Ben Reilly", clones));
// 2

console.log("j" == "J");
// false
console.log("j" == "j");
// true
const spiderMan2099 = "Spider-Man 2099";

console.log(spiderMan2099);
// Spider-Man 2099
console.log(spiderMan2099.toUpperCase());
// SPIDER-MAN 2099
console.log(spiderMan2099);
// Spider-Man 2099
console.log(spiderMan2099.toLowerCase());
// spider-man 2099
console.log(spiderMan2099);
// Spider-Man 2099

const spiderVerse = [
  {
    alias: "Spider-Man",
    name: "Peter Parker",
    id: 1
  },
  {
    alias: "Scarlet Spider",
    name: "Ben Reilly",
    id: 2
  },
  {
    alias: "Spider-Gwen",
    name: "Gwen Stacy",
    id: 3
  },
  {
    alias: "Spider-Man",
    name: "Miles Morales",
    id: 4
  },
  {
    alias: "Spider-Ham",
    name: "Peter Porker",
    id: 5
  },
  {
    alias: "Spider-Man Noir",
    name: "Peter Parker",
    id: 6
  },
  {
    alias: "Scarlet Spider",
    name: "Kaine Parker",
    id: 7
  },
  {
    alias: "Spider-Woman",
    name: "Jessica Drew",
    id: 8
  },
  {
    alias: "Superior Spider-Man",
    name: "Otto Octavius",
    id: 9
  },
  {
    alias: "Arana",
    name: "Anya Corazon",
    id: 10
  },
  {
    alias: "SP//dr:",
    name: "Peni Parker",
    id: 11
  },
  {
    alias: "Spider-Man 2099",
    name: "Miguel O'Hara",
    id: 12
  }
];

console.log(spiderVerse[1].alias);
// Scarlet Spider
console.log(spiderVerse[11].alias);
// Spiderman-2099
console.log(spiderVerse[1].name);
// Ben Reilly
console.log(spiderVerse[11].name);
// Miguel O'Hara

if (spiderVerse[1].alias == "Scarlet Spider") {
  let spider1 = spiderVerse
    .filter(s2 => s2.alias == "Scarlet Spider")
    .map(s3 => s3.name);
  console.log(spider1);
  // ['Ben Reilly', 'Kaine Parker']
}

console.log(spiderVerse[10].alias);
// SP//dr:

if (spiderVerse[10].alias == "SP//dr:") {
  let spider1 = spiderVerse
    .filter(s2 => s2.name == "Peni Parker")
    .map(s3 => s3.alias);
  console.log(spider1);
  // ['SP//dr:']
}

if (spiderVerse[10].alias == "SP//dr:") {
  let spider1 = spiderVerse.map(s2 => s2.alias);
  console.log(spider1);
  /* 
  
  ['Spider-Man', 'Scarlet Spider', 'Spider-Gwen', 'Spider-Man', 
  'Spider-Ham', 'Spider-Man Noir', 'Scarlet Spider', 'Spider-Woman', 
  ior Spider-Man', 'Arana', 'SP//dr:', 'Spider-Man 2099']
  
  */
  let spider2 = sortPizza(spider1);
  console.log(spider2);
  /* 
  
  ['Spider-Man 2099', 'SP//dr:', 'Arana', 'Superior Spider-Man', 
  'Spider-Woman', 'Scarlet Spider', 'Spider-Man Noir', 'Spider-Ham', 
  'Spider-Man', 'Spider-Gwen', 'Scarlet Spider', 'Spider-Man']
  
  */
}

function inOrder(array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

let teeNumbers1 = [1, 2, 3, 4, 5];

let teeNumbers2 = [3, 1, 4, 2, 5];

let teeNumbers3 = [22, 11, 21, 37, 24, 44, 65, 39];

let teeLetters1 = ["c", "e", "a", "d", "b"];

console.log(inOrder(teeNumbers1));
// true
console.log(inOrder(teeNumbers2));
// false
console.log(inOrder(teeNumbers1) == true);
// true
console.log(teeNumbers1[5]);
// undefined

function sortArray(array) {
  let temp = 0;
  let i = 0;
  let j = 1;

  for (; i < array.length; i++, j++) {
    // if (array[j] == undefined) {
    //   i = 0;
    //   j = 1;
    // }

    if (array[j] > array[i]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    if (inOrder(array) == true) {
      break;
    }
  }
  console.log(array);
}

sortArray(teeNumbers2);
// [1, 2, 3, 4, 5]
sortArray(teeNumbers3);

console.log("--------------------------------------");
console.log("------------------------------");

console.log(pizzaWarriors);
// ['Brooke Nevins', 'Croix James', 'Dex Garrity', 'Laila Blanco',
//  'Rising Dough', 'Sal Campana', 'Stokes Mitchell', 'Timber-Tron]
console.log([pizzaWarriors[1]]);
// ['Croix James']
console.log(pizzaWarriors[1]);
// Croix James
console.log(pizzaWarriors.length);
// 8
pizzaWarriors.push("Beezer");
pizzaWarriors.push("Chipper");
pizzaWarriors.push("Bodhi");

console.log(pizzaWarriors);

let sortPizza5 = array => array.sort((a, b) => (a > b ? 1 : -1));

console.log(sortPizza5(pizzaWarriors));

console.log(pizzaWarriors[1]);
// Bodhi
console.log(pizzaWarriors[0]);
// Beezer
console.log(pizzaWarriors[3]);
// Chipper
console.log(pizzaWarriors2);

const bodhiKeyValue = { name: "Bodhi", species: "Dachshund" };

const chipperKeyValue = { name: "Chipper", species: "Dachshund" };

const beezerKeyValue = { name: "Beezer", species: "Dachshund" };

pizzaWarriors2.push(bodhiKeyValue);
pizzaWarriors2.push(chipperKeyValue);
pizzaWarriors2.push(beezerKeyValue);

console.log(pizzaWarriors2);

let sortPizza6 = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortPizza6(pizzaWarriors2));

console.log(pizzaWarriors2[0].name);
// Beezer
console.log(pizzaWarriors2[1].name);
// Bodhi
console.log(pizzaWarriors2[3].name);
// Chipper

if (pizzaWarriors2[1].name == "Bodhi") {
  let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = 0;
  for (; i < test1.length; i++) {
    test1[i] % 3 == 0
      ? console.log(test1[i])
      : console.log("Not Divisible By 3");
    // Not Divisible By 3
    // Not Divisible By 3
    // 3
    // Not Divisible By 3
    // Not Divisible By 3
    // 6
    // Not Divisible By 3
    // Not Divisible By 3
    // 9
  }
}

if (pizzaWarriors2[0].name == "Beezer") {
  let trueFalse = [true, false, true, true, false, true];
  let i = 0;
  for (; i < trueFalse.length; i++) {
    if (trueFalse[i]) {
      console.log(trueFalse[i]);
      // true
      // true
      // true
      // true
    }
  }
}

console.log(pizzaWarriors2[3].name);
// Chipper
console.log(pizzaWarriors2[3].name == "Chipper");
// true

if (pizzaWarriors2[3].name == "Chipper") {
  let binaryCode = [0, 0, 1, 0, 0, 0, 1, 0];
  let i = 0;
  for (; i < binaryCode.length; i++) {
    if (binaryCode[i]) {
      console.log(binaryCode[i]);
      // 1
      // 1

      // 0 is a falsey value so does not evaluate to true
    }
  }
}

console.log(pizzaWarriors2[1].species == "Dachshund");
// true
console.log(pizzaWarriors2[3].species);
// Dachshund

if (pizzaWarriors2[1].species == "Dachshund") {
  let binaryCode = [0, 1, 1, 0, 1, 1];
  let i = 0;
  for (; i < binaryCode.length; i++) {
    if (!binaryCode[i]) {
      console.log(binaryCode[i]);
      // 0
      // 0
    }
  }
}

console.log(pizzaWarriors.indexOf("Timber-Tron"));
// 10
console.log(pizzaWarriors2[10].name);
// Timber-Tron
if (pizzaWarriors2[10].name == "Timber-Tron") {
  let pizza1 = pizzaWarriors2
    .filter(a2 => a2.species == "Dachshund")
    .map(a3 => a3.name);
  console.log(pizza1);
  // ['Beezer', 'Bodhi', 'Chipper']
}

const rogueTrooper = "Rogue Trooper";

let s = "s";

console.log(rogueTrooper.concat(s));
// Rogue Troopers
console.log(rogueTrooper.replace(rogueTrooper.charAt(0), ""));
// ogue Trooper
console.log(rogueTrooper);
// Rogue Trooper
console.log(rogueTrooper.replace("Rogue", ""));
// Trooper
console.log(rogueTrooper.replace(" ", ""));
// Rogue Trooper
console.log(rogueTrooper.substr(0, 5));
// Rogue
console.log(rogueTrooper == "Rogue Trooper");
// true

if (rogueTrooper == "Rogue Trooper") {
  let rogues = [
    "Rogue Trooper",
    "Rogue Dachshund",
    "Rogue Soda Can",
    "Rogue Pizza"
  ];
  let i = 0;
  for (; i < rogues.length; i++) {
    rogues[i] = rogues[i].replace(rogues[i].substr(0, 6), "");
    console.log(rogues[i]);
    // Trooper
    // Dachshund
    // Soda Can
    // Pizza
  }
}

const timberTron2 = ["Timber-Tron", "Timber_Io", "Timber-Mech-2000"];

const pizzaMenu = ["Pizza Place", "Pizza Oven", "Pizza Slicer"];

const x = ["Xfinity", "X-Men", "XFL"];

let timber = "Timber";

console.log(timberTron2[0].indexOf(timber));
// 0

function longestCommonPrefix(array) {
  let prefix = array[0];
  let returnString = "";
  let i = 1;
  for (; i < array.length; i++) {
    if (i > 1) {
      prefix = returnString;
    }
    while (prefix.indexOf(array[i]) != 0) {
      array[i] = array[i].substr(0, array[i].length - 1);
      returnString = array[i];
    }
  }
  if (returnString.length == 0) console.log("No Common Prefix");
  else console.log(returnString);
}

longestCommonPrefix(timberTron2);
// Timber
longestCommonPrefix(pizzaMenu);
// Pizza
longestCommonPrefix(x);
// X
longestCommonPrefix(pizzaWarriors);
// No Common Prefix

let sion = ["tension", "pension", "hypertension"];
let station = ["playstation", "pizza station", "fire station"];

function longestCommonSuffix(array) {
  let i = 0;
  for (; i < array.length; i++) {
    array[i] = array[i].split("");
    array[i] = array[i].reverse();
    array[i] = array[i].join("");
  }
  let suffix = array[0];
  let returnString = "";
  let j = 1;
  for (; j < array.length; j++) {
    if (j > 1) {
      suffix = returnString;
    }
    while (suffix.indexOf(array[j]) != 0) {
      array[j] = array[j].substr(0, array[j].length - 1);
      returnString = array[j];
    }
  }
  if (returnString.length == 0) console.log("No Common Suffix");
  else {
    returnString = returnString.split("");
    returnString = returnString.reverse();
    returnString = returnString.join("");
    console.log(returnString);
  }
}

longestCommonSuffix(sion);
// ension
longestCommonSuffix(station);
// station

console.log(22 % 4);
// 2
console.log(22 / 4);
// 5.5
console.log(Math.floor(22 / 4));
// 5

function ottersAndHerons(num) {
  if (num % 2 != 0) return "number must be divisible by 2";
  let min = 0;
  let max = 0;
  max = num / 2;
  let byFour = Math.floor(num / 4);
  let remainder = num % 4;
  let extra = remainder / 2;
  min = byFour + extra;
  return `max: ${max}, min: ${min}`;
}

// 22, max should be 11, min should be 6
console.log(ottersAndHerons(22));
// max: 11, min: 6

// 24, max should be 12, min should be 6
console.log(ottersAndHerons(24));
// max: 12, min: 6

// 30, max should be 15, min should be 8
console.log(ottersAndHerons(30));
// max: 15, min: 8

// 32, max should be 16, min should be 8
console.log(ottersAndHerons(32));
// max: 16, min: 8

// 33, should return "number must be divisible by 2"
console.log(ottersAndHerons(33));
// number must be divisible by 2

console.log(ottersAndHerons(9));
// number must be divisible by 2

const mellonTech = "Mellon-Tech";
console.log(mellonTech);
// Mellon-Tech

function splitString(string) {
  let i = 0;
  let array = [];
  for (; i < string.length; i++) {
    let char = string.charAt(i);
    array.push(char);
  }
  return array;
}

console.log(splitString("robot"));
// ['r', 'o', 'b', 'o', 't']
console.log(splitString(mellonTech));
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
const mellonTech2 = splitString(mellonTech);
console.log(mellonTech2);
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']

function reverseArray(array) {
  let temp = 0;
  let i = 0;
  let j = array.length - 1;
  for (; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(reverseArray(mellonTech2));
// ['h', 'c', 'e', 'T', '-', 'n', 'o', 'l', 'l', 'e', 'M']
console.log(mellonTech2);
// ['h', 'c', 'e', 'T', '-', 'n', 'o', 'l', 'l', 'e', 'M']

function joinArray(array) {
  let i = 0;
  let newString = "";
  for (; i < array.length; i++) {
    newString = newString.concat(array[i]);
  }
  return newString;
}

console.log(joinArray(mellonTech2));
// hceT-nolleM

function homeMadePalindrome(string) {
  let string2 = string;
  string2 = string2.toLowerCase();
  string = string.toLowerCase();
  let split = splitString(string);
  reverseArray(split);
  let join = joinArray(split);
  if (join == string2) {
    return `${string2} is a palindrome`;
  } else return `${string2} is not a palindrome`;
}

console.log(homeMadePalindrome("JT"));
// jt is not a palindrome
console.log(homeMadePalindrome("Racecar"));
// racecar is a palindrome
console.log(homeMadePalindrome("kayak"));
// kayak is a palindrome
console.log(homeMadePalindrome("webbex"));
// webbex is not a palindrome

const deliLine = [
  {
    name: "Sidney Lumet",
    orderNumber: 1
  },
  {
    name: "Martin Scorsese",
    orderNumber: 2
  },
  {
    name: "Woody Allen",
    orderNumber: 3
  },
  {
    name: "Arthur Penn",
    orderNumber: 4
  },
  {
    name: "William Friedkin",
    orderNumber: 5
  },
  {
    name: "Irwin Winkler",
    orderNumber: 6
  },
  {
    name: "Spike Lee",
    orderNumber: 7
  },
  {
    name: "Nora Ephron",
    orderNumber: 8
  },
  {
    name: "David Chase",
    orderNumber: 9
  },
  {
    name: "Michael Roskam",
    orderNumber: 10
  },
  {
    name: "Joshua Safdie",
    orderNumber: 11
  },
  {
    name: "Benny Safdie",
    orderNumber: 12
  },
  {
    name: "J.C. Chandor",
    orderNumber: 13
  },
  {
    name: "Noah Baumbach",
    orderNumber: 14
  }
];

// takeANumber --- adds customer to line. Returns customer's name
// and place in line.

// nowServing --- announces who they're serving, Returns customer's
// name they're serving then removing customer from line

// currentLine --- reads people in line. Returns a list of numbered
// names of all customers in line

let testPair = { name: "Bodhi", orderNumber: 1 };

console.log(testPair);
// { name: 'Bodhi', orderNumber: 1}
console.log(testPair.name);
// Bodhi
console.log(testPair.orderNumber);
// 1

const deliLine2 = [];

function takeANumber(name) {
  let count = 1;
  let newPair = { name: name, orderNumber: count };
  if (deliLine2.length >= 1) {
    newPair.orderNumber = deliLine2[deliLine2.length - 1].orderNumber + 1;
    deliLine2.push(newPair);
  } else deliLine2.push(newPair);
  return deliLine2;
}

console.log(takeANumber("Sidney Lumet"));
// name: 'Sidney Lumet', orderNumber: 1
console.log(takeANumber("Martin Scorsese"));
// name: 'Martin Scorsese', orderNumber: 2
console.log(takeANumber("Woody Allen"));
// name: 'Woody Allen', orderNumber: 3
console.log(takeANumber("Arthur Penn"));
// name: 'Arthur Penn, orderNumber: 4
console.log(takeANumber("William Friedkin"));
// name: 'William Friedkin', orderNumber: 5
console.log(takeANumber("Irwin Winkler"));
// name: 'Irwin Winkler', orderNumber: 6
console.log(takeANumber("Spike Lee"));
// name: 'Spike Lee', orderNumber: 7
console.log(takeANumber("Nora Ephron"));
// name: 'Nora Ephron', orderNumber: 8
console.log(takeANumber("David Chase"));
// name: 'David Chase', orderNumber: 9
console.log(takeANumber("Michael Roskam"));
// name: 'Michael Roskam', orderNumber: 10
console.log(takeANumber("Joshua Safdie"));
// name: 'Joshua Safdie', orderNumber: 11
console.log(takeANumber("Benny Safdie"));
// name: 'Benny Safdie', orderNumber: 12
console.log(takeANumber("J.C. Chandor"));
// name: 'J.C. Chandor', orderNumber: 13
console.log(takeANumber("Noah Baumbach"));
// name: 'Noah Baumbach', orderNumber: 14
console.log(deliLine2.length);
// 14

function nowServing(array) {
  if (array.length == 0) console.log("nobody left in line");
  else {
    let rString = `Now Serving, ${array[0].name}!`;
    array.splice(0, 1);
    console.log(rString);
    console.log("-------------------------");
    let i = 0;
    for (; i < array.length; i++) {
      console.log(`${array[i].name} : ${array[i].orderNumber}`);
    }
    console.log("--------------------------------");
  }
}

nowServing(deliLine2);
// Now Serving, Sidney Lumet!
nowServing(deliLine2);
// Now Serving, Martin Scorsese!
nowServing(deliLine2);
// Now Serving, Woody Allen!
nowServing(deliLine2);
// Now Serving, Arthur Penn!
nowServing(deliLine2);
// Now Serving, William Friedkin!
nowServing(deliLine2);
// Now Serving, Irwin Winkler!
nowServing(deliLine2);
// Now Serving, Spike Lee!
nowServing(deliLine2);
// Now Serving, Nora Ephron!
nowServing(deliLine2);
// Now Serving, David Chase!
nowServing(deliLine2);
// Now Serving, Michael Roskam!
nowServing(deliLine2);
// Now Serving, Joshua Safdie!
nowServing(deliLine2);
// Now Serving, Benny Safdie!
nowServing(deliLine2);
// Now Serving, J.C. Chandor!
nowServing(deliLine2);
// Now Serving, Noah Baumbach!
nowServing(deliLine2);
// nobody left in line

console.log(takeANumber("Norman Mailer"));
// name: 'Norman Mailer', orderNumber: 1
console.log(takeANumber("John Updike"));
// name: 'John Updike', orderNumber: 2
console.log(takeANumber("Jay McInerney"));
// name: 'Jay McInerney', orderNumber: 3
console.log(takeANumber("John Cheever"));
// name: 'John Cheever', orderNumber: 4
console.log(takeANumber("Truman Capote"));
// name: 'Truman Capote', orderNumber: 5
console.log(takeANumber("Philip Roth"));
// name: 'Philip Roth', orderNumber: 6

nowServing(deliLine2);
// Now Serving, Norman Mailer!
nowServing(deliLine2);
// Now Serving, John Updike!
nowServing(deliLine2);
// Now Serving, Jay McInerney!
nowServing(deliLine2);
// Now Serving, John Cheever!
nowServing(deliLine2);
// Now Serving, Truman Capote!
nowServing(deliLine2);
// Now Serving, Philip Roth!
nowServing(deliLine2);
// nobody left in line
