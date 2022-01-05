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

console.log("--------------------------------");
console.log("-------------------------------");
