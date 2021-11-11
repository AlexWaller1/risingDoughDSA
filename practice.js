console.log("Hello Oa");

console.log(100 * 52);

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const robots2 = [
  {
    name: "Hank-44",
    homeTown: "Nouvelle Milwaukee"
  },
  {
    name: "Warren-21",
    homeTown: "Nouvelle Milwaukee"
  },
  {
    name: "Mellon-Tech",
    homeTown: "Somerville"
  },
  {
    name: "Eggplant-Head",
    homeTown: "Somerville"
  }
];

const hammerHead = [
  "Hammerhead",
  "Taylor",
  "Geometry Man",
  "Harvey",
  "Wibaux",
  "The Cosmic Trout"
];

const hammerHead2 = [
  {
    name: "Hammerhead",
    hasPickerelCola: true,
    career: "Pickerel Cola Truck Driver",
    homePlanet: "Venice Sands 5"
  },
  {
    name: "Taylor",
    hasPickerelCola: true,
    career: "Pickerel Cola Truck Driver",
    homePlanet: "Mariner Mist"
  },
  {
    name: "Harvey",
    hasPickerelCola: false,
    career: "Soldier/Fishing Guide",
    homePlanet: "Hardin-37"
  },
  {
    name: "Wibaux",
    hasPickerelCola: false,
    career: "Soldier/Minimart Manager",
    homePlanet: "Hardin-37"
  },
  {
    name: "Geometry Man",
    hasPickerelCola: undefined,
    career: undefined,
    homePlanet: "Geometry-Verse"
  },
  {
    name: "The Cosmic Trout",
    hasPickerelCola: undefined,
    career: undefined,
    homePlanet: undefined
  }
];

if (robots[2] == "Mellon-Tech") {
  let i = 0;
  for (; i < robots.length; i++) {
    console.log(robots[i]);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
  }
}

if (robots[3] == "Eggplant-Head") {
  let i = 0;
  while (i < robots.length) {
    console.log(robots[i]);
    i++;
  }
  // Hank-44
  // Warren-21
  // Mellon-Tech
  // Eggplant-Head
}

if (robots[0] == "Hank-44") {
  let i = 0;
  do {
    console.log(robots[i]);
    i++;
  } while (i < robots.length);
  // Hank-44
  // Warren-21
  // Mellon-Tech
  // Eggplant-Head
}

if (robots[1] == "Warren-21") {
  let i = robots.length - 1;
  for (; i >= 0; i--) {
    console.log(robots[i]);
    // Eggplant-Head
    // Mellon-Tech
    // Warren-21
    // Hank-44
  }
}

console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

if (robots[0] == "Hank-44") {
  let robo1 = robots2
    .filter(function (robo2) {
      return robo2.homeTown == "Somerville";
    })
    .map(function (robo3) {
      return robo3.name;
    });
  console.log(robo1);
  // ['Mellon-Tech', 'Eggplant-Head']
}

if (robots[1] == "Warren-21") {
  let i = 0;
  let nouvelleMilwaukee = [];
  for (; i < robots2.length; i++) {
    if (robots2[i].homeTown == "Nouvelle Milwaukee") {
      console.log(robots2[i].name);
      // Hank-44
      // Warren-21
      nouvelleMilwaukee.push(robots2[i].name);
    }
  }
  console.log(nouvelleMilwaukee);
  // ['Hank-44', 'Warren-21']
}

console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head
console.log(robots[0]);
// Hank-44

console.log(hammerHead2[5].name);
// The Cosmic Trout
console.log(hammerHead2[1].hasPickerelCola);
// true
console.log(hammerHead2[0].homePlanet);
// Venice Sands 5

let descendingOrder2 = array => array.sort((a, b) => b - a);

console.log(descendingOrder2(hammerHead));
// doesn't do anything for strings.

const nums1 = [2, 1, 44, 34, 23, 96, 7, 100];

console.log(descendingOrder2(nums1));
// [100, 96, 44, 34, 23, 7, 2, 1]

let hammerHeadBackWards = hammerHead.sort();
hammerHeadBackWards = hammerHeadBackWards.reverse();
console.log(hammerHeadBackWards);
// ['Wibaux', 'The Cosmic Trout', 'Taylor', 'Harvey', 'Hammerhead', 'Geometry Man']

console.log(hammerHead[0]);
// Wibaux
console.log(hammerHead[0] == "Wibaux");
// true

if (hammerHead[0] === "Wibaux") {
  let shark1 = hammerHead2
    .filter(function (shark2) {
      return shark2.name == "Hammerhead";
    })
    .map(function (shark3) {
      return shark3.homePlanet;
    });
  console.log(shark1);
  // ['Venice Sands 5']
}

console.log(hammerHead[1]);
// The Cosmic Trout

if (hammerHead[1] === "The Cosmic Trout") {
  let shark1 = hammerHead2.map(function (shark2) {
    return shark2.homePlanet;
  });
  console.log(shark1);
  // ['Venice Sands 5', 'Mariner Mist', 'Hardin-37', 'Hardin-37', 'Geometry-Verse', undefined]
}

let count1 = [1, 2, 3, 4, 5];

if (1 != 2) {
  let i = 0;
  for (; i < count1.length; i++) {
    let count = 0;
    count = count + count1[i];
    console.log(count);
    // 1
    // 2
    // 3
    // 4
    // 5
  }
}

let counters = [1, 1, 1, 2, 2];

if (2 == "2") {
  let i = 0;
  let count = 1;
  for (; i < counters.length - 1; i++) {
    if (counters[i] == counters[i + 1]) {
      count++;
    } else count = 1;
  }
  console.log(count);
}

console.log("-------------------------------");
console.log("----------------------------");

let counters2 = [3, 3, 3, 4, 4, 4, 4];
let counters3 = [4, 4, 5, 5, 5, 5, 5];
let counters4 = [2, 2, 3, 3, 3];
let counters5 = [1, 2, 2];

function countNums(array) {
  let i = 0;
  let count = 1;
  let keyValue = {};
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
  console.log(array2);
}

//countNums(counters2);
// 4

countNums(counters3);
// // 5
// countNums(counters4);
// // 3
// countNums(counters5);
// // 2

console.log(2 == undefined);
// false
