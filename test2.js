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

let leapYears = [2000, 2004, 2008, 2012, 2016, 2020, 2024];

function leapYear(array) {
  let rString = "";
  let i = 0;
}

console.log(2000 / 400);
// 5
console.log(2000 / 4);
// 500
console.log(2000 / 100);
// 20

let result3 = 2;

console.log(result3.length);
// undefined

let test5 = [1, [2, 3]];

console.log(robots[3]);
// Eggplant-Head

if (robots[3] == "Eggplant-Head") {
  let i = 0;
  for (; i < test5.length; i++) {
    console.log(test5[i]);
  }
}

console.log(typeof robots);
// object
console.log(typeof 1);
// number
console.log("a".length);
// 1
console.log(typeof 1 == "number");
// true
console.log(typeof "Dachshund" == "string");
// true
console.log(typeof 2 == "boolean");
// false
console.log(typeof false == "boolean");
// true

console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head]
console.log(greenEgg);
// ['Green Egg']
const robots12 = [...robots, ...greenEgg];

console.log(robots12);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head',
// 'Green Egg']

console.log(robots12[4]);
// Green Egg

if (robots12[4] == "Green Egg") {
  console.log("Labrador, Kate Bishop, and Hawkeye");
  // Labrador, Kate Bishop, and Hawkeye
  console.log("....................................");
  let i = 0;
  while (i < robots12.length) {
    console.log(robots12[i]);
    i++;
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
    // Green Egg
  }
}

console.log("==================");

console.log(robots12[2]);
// Mellon-Tech

console.log("====================");

if (robots12[2] == "Mellon-Tech") {
  let i = 0;

  do {
    console.log(robots12[i]);
    i++;
  } while (i < robots12.length);
  // Hank-44
  // Warren-21
  // Mellon-Tech
  // Eggplant-Head
  // Green Egg
}

console.log("=================================");

console.log(robots12[3]);
// Eggplant-Head
console.log("==========================");

if (robots12[3] == "Eggplant-Head") {
  let i = robots12.length - 1;
  do {
    console.log(robots12[i]);
    i--;
  } while (i >= 0);
}
// Green Egg
// Eggplant-Head
// Mellon-Tech
// Warren-21
// Hank-44

console.log("**************************************");

const crashBandicoot = {
  name: "Crash Bandicoot",
  animalSpecies: "Bandicoot",
  cartColor: "Blue"
};

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

const loneWolfSamurai = [
  {
    name: "Lone Wolf Samurai",
    homeCity: "Yokohama",
    occupations: {
      job1: "Walker of the Earth",
      job2: "Star Wanderer",
      job3: "Samurai",
      job4: "Pinball Player"
    },
    friends: {
      kenji: "Kenji",
      laramie: "Laramie",
      glynis: "Glynis",
      zeno: "Zeno",
      samos: "Samos"
    },
    cosmicGuide: "The Wraith",
    rival: "Wushu Lizard"
  },
  {
    name: "Kenji the Crane",
    homeCity: "Kyoto",
    occupations: {
      job1: "Champion Crane Fighter",
      job2: "Star Wanderer",
      job3: "Pinball Player",
      job4: "Tekken Enthusiast"
    },
    friends: {
      glynis: "Glynis",
      laramie: "Laramie",
      zeno: "Zeno",
      samos: "Samos",
      loneWolfSamurai: "Lone Wolf Samurai"
    },
    cosmicGuide: "The Wraith",
    rival: "Jin Oshinobu"
  },
  {
    name: "Glynis",
    homeCity: "Calumet Freeze 9",
    occupations: {
      job1: "Scrap Collector",
      job2: "Pinball Player",
      job3: "Tekken Champion"
    },
    friends: {
      laramie: "Laramie",
      samos: "Samos",
      zeno: "Zeno",
      kenji: "Kenji",
      loneWolfSamurai: "Lone Wolf Samurai"
    },
    cosmicGuide: "The Wraith",
    rival: null
  },
  {
    name: "Laramie",
    homeCity: "Jasper Casper C",
    occupations: {
      job1: "Scrap Collector",
      job2: "Pinball Champion",
      job3: "Tekken Enthusiast"
    },
    friends: {
      glynis: "Glynis",
      zeno: "Zeno",
      samos: "Samos",
      loneWolfSamurai: "Lone Wolf Samurai",
      kenji: "Kenji"
    },
    cosmicGuide: "The Wraith",
    rival: null
  },
  {
    name: "Samos",
    homeCity: "Crete",
    occupations: {
      job1: "Philosopher",
      job2: "Cosmic Wanderer",
      job3: "Seeker of Truth",
      job4: "Tekken Enthusiast",
      job5: "Piball Player"
    },
    friends: {
      zeno: "Zeno",
      glynis: "Glynis",
      laramie: "Laramie",
      kenji: "Kenji",
      loneWolfSamurai: "Lone Wolf Samurai"
    },
    cosmicGuide: "The Wraith",
    rival: null
  },
  {
    name: "Zeno",
    homeCity: "Crete",
    occupations: {
      job1: "Philosopher",
      job2: "Cosmic Wanderer",
      job3: "Seeker of Truth",
      job4: "Tekken Enthusiast",
      job5: "Pinball Player"
    },
    friends: {
      zeno: "Zeno",
      glynis: "Glynis",
      laramie: "Laramie",
      kenji: "Kenji",
      loneWolfSamurai: "Lone Wolf Samurai"
    },
    cosmicGuide: "The Wraith",
    rival: null
  }
];

console.log(loneWolfSamurai[1].rival);
// Jin Oshinobu
console.log(loneWolfSamurai[1].friends.laramie);
// Laramie
console.log(loneWolfSamurai[2].rival);
// null
console.log(loneWolfSamurai[3].name);
// Laramie
console.log(loneWolfSamurai[4].name);
// Samos
console.log(loneWolfSamurai[2].name);
// Glynis
console.log(loneWolfSamurai[2].occupations.job1);
// Scrap Collector

if (loneWolfSamurai[2].name == "Glynis") {
  let robo1 = loneWolfSamurai
    .filter(function (robo2) {
      return robo2.cosmicGuide == "The Wraith";
    })
    .map(function (robo3) {
      return robo3.name;
    });
  console.log(robo1);
  // ['Lone Wolf Samurai', 'Kenji the Crane', 'Glynis',
  // 'Laramie', 'Samos', 'Zeno']
}

console.log(loneWolfSamurai[3].name);
// Laramie

if (loneWolfSamurai[3].name == "Laramie") {
  let robo1 = loneWolfSamurai
    .filter(function (robo2) {
      return robo2.rival == "Wushu Lizard";
    })
    .map(function (robo3) {
      return robo3.name;
    });
  console.log(robo1);
  // ['Lone Wolf Samurai']
}

let ternary = loneWolfSamurai[3].name == "Laramie" ? true : false;

console.log(ternary);
// true

ternary = loneWolfSamurai[0].rival == "Wushu Lizard" ? true : false;
console.log(ternary);
// true

if (loneWolfSamurai[0].rival == "Wushu Lizard") {
  let newArray = [];
  let i = 0;
  for (; i < loneWolfSamurai.length; i++) {
    loneWolfSamurai[i].rival == "Wushu Lizard"
      ? newArray.push(loneWolfSamurai[i].name)
      : "no";
  }
  console.log(newArray);
  // ['Lone Wolf Samurai']
}

console.log(loneWolfSamurai[5].name);
// Zeno

if (loneWolfSamurai[5].name == "Zeno") {
  let i = 0;
  for (; i < loneWolfSamurai.length; i++) {
    switch (loneWolfSamurai[i].rival) {
      case null:
        console.log(`${loneWolfSamurai[i].name} has no qualms
        with anybody!`);
        // Glynis has no qualms with anybody!
        // Laramie has no qualms with anybody!
        // Samos has no qualms with anybody!
        // Zeno has no qualms with anybody!
        break;
      case "Wushu Lizard":
        console.log(`${loneWolfSamurai[i].name} is rivals
        with ${loneWolfSamurai[i].rival}!`);
        // Lone Wolf Samurai is rivals with Wushu Lizard!
        break;
    }
  }
}

console.log(loneWolfSamurai[1].name);
// Kenji the Crane
console.log(loneWolfSamurai[1].rival);
// Jin Oshinobu

if (loneWolfSamurai[1].rival == "Jin Oshinobu") {
  let robo1 = loneWolfSamurai.map(function (robo2) {
    return robo2.cosmicGuide;
  });
  console.log(robo1);
  // ['The Wraith', 'The Wraith', 'The Wraith', 'The Wraith',
  // 'The Wraith', 'The Wraith']
}

const wushuLizard = {
  name: "Wushu Lizard",
  martialArt: "Wushu",
  homeCountry: "Guyana",
  species: "Collared Lizard"
};

let wushuRival = { rival: "Lone Wolf Samurai" };

Object.assign(wushuLizard, wushuRival);

console.log(wushuLizard);
// wushuRival key value pair added to wushuLizard object

console.log(wushuLizard.homeCountry);
// Guyana
console.log(wushuLizard.species);
// Collared Lizard

if (wushuLizard.homeCountry == "Guyana") {
  let i = 0;
  for (; i < loneWolfSamurai.length; i++) {
    console.log(loneWolfSamurai[i].name);
    // Lone Wolf Samurai
    // Kenji the Crane
    // Glynis
    // Laramie
    // Samos
    // Zeno
  }
}

console.log(Math.floor(2.3));
// 2
console.log(parseInt(2.3));
// 2
console.log(Math.round(2.3));
// 2
console.log(Math.round(2.5));
// 3
console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head
console.log(robots[1]);
// Warren-21
console.log(robots[0]);
// Hank-44
console.log(greenEgg);
// ['Green Egg']
console.log(robots12);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head',
// 'Green Egg']

console.log(robots12[4]);
// Green Egg

if (robots12[4] == "Green Egg") {
  let i = 0;
  for (; i < robots12.length; i++) {
    switch (robots12[i]) {
      case "Hank-44" || "Warren-21":
        console.log(`Nice curling, ${robots12[i]}!`);
        // Nice curling, Hank-44!
        // didn't do anything for Warren-21
        break;
      case "Mellon-Tech" || "Eggplant-Head":
        console.log(`Nice guitar playing, ${robots[i]}!`);
        // Nice guitar playing, Mellon-Tech!
        // didn't do anything for Eggplant-Head
        break;
      case "Green Egg":
        console.log(`The ${robots12[i]} makes a great brisket!`);
        // The Green Egg makes a great brisket
        break;
    }
  }
}
