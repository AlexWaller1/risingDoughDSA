// Exercises for Jan 5th
console.log("Hello Oa");
/* 

Create the function that takes an array with objects and 
returns the sum of people's budgets

*/

const gtFilms = [
  {
    title: "Shape of Water",
    budget: 20
  },
  {
    title: "Nightmare Alley",
    budget: 60
  },
  {
    title: "Hellboy",
    budget: 65
  },
  {
    title: "Pan's Labyrinth",
    budget: 19
  },
  {
    title: "Pacific Rim",
    budget: 200
  },
  {
    title: "Crimson Peak",
    budget: 55
  }
];
console.log(20 + 60 + 65 + 19 + 200 + 55);
// total budget is 419

const apFilms = [
  {
    title: "Election",
    budget: 25
  },
  {
    title: "About Schmidt",
    budget: 30
  },
  {
    title: "Sideways",
    budget: 16
  },
  {
    title: "The Descendants",
    budget: 20
  }
];
console.log(25 + 30 + 16 + 20);
// total budget is 91

const noBudget = [
  {
    name: "Up in the Air",
    year: 2009
  },
  {
    name: "Young Adult",
    year: 2011
  },
  {
    name: "Juno",
    year: 2007
  },
  {
    name: "Tully",
    year: 2018
  },
  {
    name: "The Front Runner",
    year: 2018
  }
];

function totalBudget(array) {
  if (!Object.keys(array[0]).includes("budget"))
    return "object must have budget key";
  let budgetSum = 0;
  let i = 0;
  for (; i < array.length; i++) {
    budgetSum = budgetSum + array[i].budget;
  }
  return `total budget is ${budgetSum} million`;
}

console.log(totalBudget(gtFilms));
// total budget is 419 million
console.log(totalBudget(apFilms));
// total budget is 91 million
console.log(totalBudget(noBudget));
// object must have budget key
console.log(Object.keys(gtFilms[0]));
// ['title', 'budget']
console.log("----------------------------------");
console.log("---------------------------------");
console.log(Math.max(37, 36));
// 37
console.log(Math.min(34, 35));
// 34
console.log(Math.pow(3, 2));
// 9
console.log(Math.round(9.65));
// 10
console.log(Math.floor(9.65));
// 9
console.log(67 % Math.sqrt(64));
// 3
// 67 - 3 = 64
console.log(27 % Math.sqrt(27));
// 1.02
console.log(51 % Math.sqrt(51));
// 1.01
console.log(7 % Math.sqrt(7));
// 1.70
console.log(8 % Math.sqrt(8));
// 2.34

let nums = [4, 7, 9, 12, 16, 21, 25, 29, 36, 42, 49, 56];
let nums2 = [43, 123, 149, 34, 12, 98];

function squareRootRounder(array) {
  let remainder = 0;
  let i = 0;
  for (; i < array.length; i++) {
    while (array[i] % Math.sqrt(array[i]) != 0) {
      array[i] = array[i] - 1;
    }
  }
  return array;
}

console.log(squareRootRounder(nums));
// [4, 4, 9, 9, 16, 16, 25, 25, 36, 36, 49, 49]
console.log(squareRootRounder(nums2));
// [36, 121, 144, 25, 9, 81]
const risingDough = "Rising Dough";
console.log(risingDough.charAt(risingDough.length - 1));
// h
console.log(nums);
// [4, 4, 9, 9, 16, 16, 25, 25, 36, 36, 49, 49]
console.log(nums2);
// [36, 121, 144, 25, 9, 81]

let nums3 = [5, 20, 31, 56, 85, 120, 139, 95, 79];
let nums4 = [2, 7, 61, 41, 50, 37, 89, 99, 98, 43];

function squareRootRounder2(array) {
  let i = 0;
  let j = 0;
  let newNum = 0;
  let newNum2 = 0;
  for (; i < array.length; i++) {
    newNum = array[i];
    newNum2 = array[i];
    while (
      newNum % Math.sqrt(newNum) != 0 &&
      newNum2 % Math.sqrt(newNum2) != 0
    ) {
      newNum = newNum + 1;
      newNum2 = newNum2 - 1;
    }
    if (newNum % Math.sqrt(newNum) == 0) {
      array[i] = newNum;
    }
    if (newNum2 % Math.sqrt(newNum2) == 0) {
      array[i] = newNum2;
    }
  }
  return array;
}

console.log(squareRootRounder2(nums3));
// [4, 16, 36, 49, 81, 121, 144, 100, 81]
console.log(squareRootRounder2(nums4));
// [1, 9, 64, 36, 49, 36, 81, 100, 100, 49]
console.log(43 / Math.sqrt(43));

function squareRootRounder3(array) {
  let i = 0;
  for (; i < array.length; i++) {
    array[i] = array[i] / Math.sqrt(array[i]);
    array[i] = Math.round(array[i]);
    array[i] = Math.pow(array[i], 2);
  }
  return array;
}

let nums5 = [5, 40, 43, 60, 83, 101, 119];
let nums6 = [143, 130, 20, 23, 65, 79, 37, 21];

console.log(squareRootRounder3(nums5));
// [4, 36, 49, 64, 81, 100, 121]
console.log(squareRootRounder3(nums6));
// [144, 121, 16, 25, 64, 81, 36, 25]
console.log("-----------------------------------------------");
console.log("--------------------------------------------");

console.log(2.5 % 2);
// .5
console.log(6.3 % 6);
// .2999999999
console.log(parseFloat(".55"));
// 0.55
console.log("-------------------------------------------");

function roundNum(num) {
  num = num.toString();
  let decimalIndex = 0;
  let decimalNum = ".";
  let i = 0;
  let j = 0;
  for (; i < num.length; i++) {
    if (num.charAt(i) == ".") {
      decimalIndex = i;
    }
  }
  for (; j < num.length; j++) {
    if (j > decimalIndex) {
      decimalNum = decimalNum.concat(num.charAt(j));
    }
  }
  decimalNum = parseFloat(decimalNum);

  num = parseFloat(num);
  let wholeNum = num - decimalNum;
  let remainder = 0;
  let rNum = 0;
  if (decimalNum > 0.5) {
    let newDecimal = 1 - decimalNum;
    rNum = num + newDecimal;
  }
  if (decimalNum < 0.5) {
    rNum = num - decimalNum;
  }
  return rNum;
}

console.log(roundNum(4.55));
// 5
console.log(roundNum(4.44));
// 4
console.log(roundNum(9.89));
// 10
console.log(roundNum(4.5697));
// 5
console.log("-------------------------------------");
console.log("--------------------------------");

console.log(typeof 2.5 == "number");
// true
console.log(typeof 0.6 == "number");
// true
console.log(parseFloat("ab"));
// NaN
console.log(isNaN(245));
// false
console.log(isNaN("rt5"));
// true
let numTest = 594;
console.log(isNaN(numTest));
// false
console.log(isNaN("4"));
// false
console.log("-----------------------------------");
console.log("---------------------------------");

function arrayAndStringLength(param) {
  let length = 0;
  let i = 0;
  let j = 0;

  for (; i < param.length; i++) {
    length = length + 1;
  }
  return length;
}

console.log(arrayAndStringLength("hello"));
// 5
let rTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rTest2 = [30, 31, 32, 33, 34, 35, 36, 37, 38];
let rTest3 = [401, 402];
console.log(arrayAndStringLength(rTest));
// 10
console.log(rTest[10]);
// undefined

function arrayLength2(param) {
  let i = 0;
  let length = 0;
  let reader = "";
  while (reader != undefined) {
    reader = param[i];
    length = length + 1;
    i++;
  }
  return length - 1;
}

console.log(arrayLength2(rTest));
// 10
console.log(arrayLength2(rTest2));
// 9
console.log(arrayLength2(rTest3));
// 2

console.log("-----------------------------------");
console.log("----------------------------------");

let rt5 = "rt5";
console.log(rt5.charAt(2));
// 5
let batMan = "Batman";
let twoFace = "Two Face";
let theRedHood = "The Red Hood";

function stringLength(string) {
  let reader = "a";
  let count = 0;
  let i = 0;
  while (reader) {
    reader = string.charAt(i);
    count = count + 1;
    i++;
  }
  return count - 1;
}

console.log(stringLength(rt5));
// 3
console.log(stringLength(batMan));
// 6
console.log(stringLength(twoFace));
// 8
console.log(twoFace.length);
// 8
console.log(stringLength(theRedHood));
// 12
console.log(theRedHood.length);
// 12

console.log("--------------------------------");
console.log("-------------------------------");

console.log(typeof rTest);
// object
console.log(undefined);
// undefined
let undefinedArray = [undefined, undefined, undefined];
console.log(undefinedArray.length);
// 3

console.log(undefinedArray[0] == undefined);
// true
console.log(undefinedArray[2]);
// undefined
console.log(undefinedArray[3]);
// undefined
console.log(undefinedArray[4]);
// undefined
console.log(undefinedArray[5]);
// undefined

if (undefinedArray[0] == undefined) {
  let i = 0;
  let length = 0;
  for (; i < undefinedArray.length; i++) {
    if (undefinedArray[i]) {
      length = length + 1;
    }
  }
  console.log(length);
  // length will be 0 because undefined is a falsey value
}

let fiveNum = [1, 2, 3, 4, 5];
console.log(fiveNum[fiveNum.length]);
// undefined
let nullArray = [null, null, null, null];
console.log(nullArray);
// [null, null, null, null]
console.log(nullArray.length);
// 4
console.log(nullArray[0]);
// null
console.log(nullArray[0] == null);
// true
if (nullArray[0] == null) {
  let i = 0;
  let length = 0;
  for (; i < nullArray.length; i++) {
    if (nullArray[i]) {
      length++;
    }
  }
  console.log(length);
}
// 0
// length will be 0 because null is a falsey value

function allMultiples(num) {
  let newArray = [];
  let i = 0;
  let squareRoot = num / Math.sqrt(num);
  console.log(squareRoot);
  for (; i <= squareRoot; i++) {
    if (num % i == 0 && i != squareRoot) {
      newArray.push(i);
      let fellowMultiple = num / i;
      newArray.push(fellowMultiple);
    }
    if (num % i == 0 && i == squareRoot) {
      newArray.push(i);
    }
  }
  console.log(newArray);
}

allMultiples(36);
// [1, 36, 2, 18, 3, 12, 4, 9, 6]
allMultiples(44);
// [1, 44, 2, 22, 4, 11]
allMultiples(49);
// [1, 49, 7]
allMultiples(100);
// [1, 100, 2, 50, 4, 25, 5, 20, 10];
allMultiples(121);
// [1, 121, 11]
allMultiples(144);
// [1, 144, 2, 72, 3, 48, 4, 36, 6, 24, 8, 18, 9, 16, 12]

function isPalindrome(string) {
  string = string.toLowerCase();
  let first = 0;
  let last = string.length - 1;
  let rString = `${string} is a palindrome`;
  let i = 0;
  for (; first < last; first++, last--) {
    console.log(first);
    console.log(last);
    console.log("--------------------------");
    if (string.charAt(first) != string.charAt(last)) {
      rString = `${string} is not a palindrome`;
    }
  }
  console.log(rString);
}

isPalindrome("Boba");
// boba is not a palindrome
isPalindrome("racecar");
// racecar is a palindrome
isPalindrome("webbex");
// webbex is not a palindrome
isPalindrome("xebbex");
// xebex is a palindrome
console.log("------------------------------------------------");
console.log("---------------------------------------------------");

let upperCase = [
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
  "Z"
];

console.log(upperCase.length);
// 26

let lowerCase = [
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
  "z"
];

console.log(lowerCase.length);
// 26
const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

function findIndex(array, element) {
  let i = 0;
  let rNum = -1;
  for (; i < array.length; i++) {
    if (array[i] == element) {
      rNum = i;
    }
  }
  return rNum;
}

console.log(findIndex(robots, "Hank-44"));
// 0
console.log(findIndex(robots, "Warren-21"));
// 1
console.log(findIndex(robots, "Mellon-Tech"));
// 2
console.log(findIndex(robots, "Eggplant-Head"));
// 3
console.log(findIndex(robots, "Cornelius"));
// -1

console.log(typeof robots[0].charAt(0) == "string");
// true

function lowerCaseClone(string) {
  let i = 0;
  for (; i < string.length; i++) {
    if (upperCase.includes(string.charAt(i))) {
      let index = findIndex(upperCase, string.charAt(i));
      string = string.replace(string.charAt(i), lowerCase[index]);
    }
  }
  return string;
}

console.log(lowerCaseClone("Pickerel"));
// pickerel
console.log(lowerCaseClone("TIMBER-TRON"));
// timber-tron
console.log(lowerCaseClone("Lake Cushetunk"));
// lake cushetunk

function upperCaseClone(string) {
  let i = 0;
  for (; i < string.length; i++) {
    if (lowerCase.includes(string.charAt(i))) {
      let index = findIndex(lowerCase, string.charAt(i));
      string = string.replace(string.charAt(i), upperCase[index]);
    }
  }
  return string;
}

console.log(upperCaseClone("pickerel"));
// PICKEREL
console.log(upperCaseClone("Bodhi"));
// BODHI
console.log(upperCaseClone("Chipper"));
// CHIPPER
console.log(upperCaseClone("Beezer"));
// BEEZER

console.log("-----------------------------------------------------");
console.log("----------------------------------------------------");

let helloOa = ["H", "e", "l", "l", "o", " ", "O", "a"];
let helloOa2 = "Hello Oa";

let tomarRe = ["T", "o", "m", "a", "r", "-", "R", "e"];
let tomarRe2 = "Tomar-Re";

function splitString(string) {
  let charArray = [];
  let i = 0;
  for (; i < string.length; i++) {
    charArray.push(string.charAt(i));
  }
  return charArray;
}

console.log(splitString("Blue Jay"));
// ['B', 'l', 'u', 'e', ' ', 'J', 'a', 'y']
console.log("Blue Jay".split(""));

console.log("---------------------------------------");
console.log("-------------------------------------");

function joinString(array) {
  let rString = "";
  let i = 0;
  for (; i < array.length; i++) {
    rString = rString.concat(array[i]);
  }
  return rString;
}

console.log(joinString(helloOa));
// Hello Oa
console.log(joinString(tomarRe));
// Tomar-Re

console.log("----------------------------------------");
console.log("------------------------------------------");

function replaceChar(string, index, newChar) {
  let i = 0;
  let temp = "";
  stringArr = splitString(string);

  stringArr[index] = newChar;

  let string2 = joinString(stringArr);
  return string2;
}

console.log(replaceChar(helloOa2, 5, "-"));
// Hello-Oa
console.log(helloOa2);
// Hello Oa
helloOa2 = replaceChar(helloOa2, 5, "-");
console.log(helloOa2);
// Hello-Oa
console.log(tomarRe2);
// Tomar-Re
tomarRe2 = replaceChar(tomarRe2, 5, "--");
console.log(tomarRe2);
// Tomar--Re
console.log("-------------------------------------");
console.log("-------------------------------------------");

// concat

const chaselon = ["c", "h", "a", "s", "e", "l", "o", "n"];

let chaselonSub = `${chaselon[0]}${chaselon[1]}`;
console.log(chaselonSub);
// ch
console.log(tomarRe2);
// Tomar--Re
let tomarTu = "Tomar-Tu";
console.log(tomarTu);
// Tomar-Tu
console.log(tomarRe2.concat(tomarTu));
// Tomar--ReTomar-Tu
console.log(tomarRe2);
// Tomar--Re
console.log(tomarTu);
// Tomar-Tu
const jonnJonzz = "J'onn J'onzz";
console.log(jonnJonzz);
// J'onn J'onzz

function concatString(string1, string2) {
  return `${string1}${string2}`;
}

console.log(concatString(tomarRe2, tomarTu));
// Tomar--ReTomarTu
console.log(tomarTu);
// Tomar-Tu

function subString(num1, num2, string) {
  let rString = "";

  for (; num1 <= num2; num1++) {
    rString = concatString(rString, string.charAt(num1));
  }
  return rString;
}

console.log(subString(0, 4, tomarTu));
// Tomar
console.log(subString(0, 4, tomarRe2));
// Tomar
console.log(subString(6, 11, jonnJonzz));
// J'onzz
console.log("----------------------------------------");
console.log("------------------------------------------");

console.log(Math.pow(6, 0));
// 1
console.log(Math.pow(6, 1));
// 6
console.log(Math.pow(6, 2));
// 36
console.log(Math.pow(6, 3));
// 216
console.log(Math.pow(7, 0));
// 1
console.log(Math.pow(7, 1));
// 7
console.log(Math.pow(7, 2));
// 49
console.log(Math.pow(7, 3));
// 343
console.log("-------------------------");

function mathDotPow(num1, num2) {
  let num3 = num1;
  if (num2 == 0) return 1;
  if (num2 == 1) return num1;
  let i = 2;
  for (; i <= num2; i++) {
    num1 = num1 * num3;
  }
  return num1;
}

console.log(mathDotPow(6, 0));
// 1
console.log(mathDotPow(6, 1));
// 6
console.log(mathDotPow(6, 2));
// 36
console.log(mathDotPow(6, 3));
// 216
console.log(mathDotPow(7, 0));
// 1
console.log(mathDotPow(7, 1));
// 7
console.log(mathDotPow(7, 2));
// 49
console.log(mathDotPow(7, 3));
// 343
console.log("---------------------------------------");
console.log("----------------------------------------");
