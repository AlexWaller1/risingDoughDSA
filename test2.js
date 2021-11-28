// slice takes a copy of the array
let array = [1, 2, 3, 4, 5];

let result = array.slice(0, 3);

console.log(result, array);
// [1, 2, 3]

result = array.splice(0, 3);

console.log(result, array);

let array2 = [7, 8, 9, 10];

let array3 = [...array2, "x", ...array];
// spread operator

console.log(array3);

// local storage is an api from the browser

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const greenEgg = ["Green Egg"];

const robots2 = [...robots, ...greenEgg];

console.log(robots2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head',
// 'Green Egg']

console.log(robots2[4]);
// Green Egg
result = robots2.slice(3, 4);

console.log(result);
// ['Eggplant-Head']
result = robots2.slice(2, 4);

console.log(result);
// ['Mellon-Tech', 'Eggplant-Head']

result = robots2.slice(3, 5);

console.log(result);
// ['Eggplant-Head', 'Green Egg']

const numbers = [1, 2, 3, 4, 5];

result = numbers.pop();

console.log(result);
// 5
console.log(numbers);
// [1, 2, 3, 4]
result = numbers.push(5);

console.log(result);
// 5
console.log(numbers);
// [1, 2, 3, 4, 5]

// when using push() and pop() methods we are essentially using the
// array as a stack.

console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

console.log(robots2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head', 'Green Egg']

let [hank44, warren21, mellonTech, eggPlantHead, greenEgg1] = robots2;

console.log(hank44);
// Hank-44
console.log(warren21);
// Warren-21
console.log(mellonTech);
// Mellon-Tech
console.log(eggPlantHead);
// Eggplant-Head
console.log(greenEgg1);
// Green Egg

const hybrids = {
  ramHybrids: {
    ramHybrid1: "Stacey",
    ramHybrid2: "Jay",
    ramHybrid3: "Tony",
    ramHybrid4: "Otto"
  },
  treeHybrids: {
    treeHybrid1: "Cornelius",
    treeHybrid2: "Owen",
    treeHybrid3: "Magnus",
    treeHybrid4: "Everett",
    treeHybrid5: "Jasper"
  },
  troutHybrids: {
    troutHybrid1: "Rainbow",
    troutHybrid2: "Brown"
  },
  incubator: "Incubator"
};

let {
  ramHybrids: {
    ramHybrid1: stacey,
    ramHybrid2: jay,
    ramHybrid3: tony,
    ramHybrid4: otto
  },
  treeHybrids: {
    treeHybrid1: cornelius,
    treeHybrid2: owen,
    treeHybrid3: magnus,
    treeHybrid4: everett,
    treeHybrid5: jasper
  },
  troutHybrids: { troutHybrid1: rainbow, troutHybrid2: brown },
  incubator
} = hybrids;

console.log(stacey);
// Stacey
console.log(jay);
// Jay
console.log(tony);
// Tony
console.log(otto);
// Otto
console.log(cornelius);
// Cornelius
console.log(owen);
// Owen
console.log(magnus);
// Magnus
console.log(everett);
// Everett
console.log(jasper);
// Jasper
console.log(rainbow);
// Rainbow
console.log(brown);
// Brown
console.log(incubator);
// Incubator

console.log("---------------------------------------------------------------");
console.log("--------------------------------------------------------------");

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
  let indices = [];
  for (; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum = sum + array[j];
      if (sum > max) {
        max = sum;
        indices = [i, j];
      }
    }
  }
  console.log(max, indices);
}

largestSubArray(testArray);
// 7, [2, 6]

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
