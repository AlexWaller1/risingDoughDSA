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
