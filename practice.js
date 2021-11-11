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

console.log("---------------------------------");
console.log("-----------------------------");

console.log(2 == undefined);
// false

const timesNum = [
  {
    times: 2,
    num: 4
  },
  {
    times: 5,
    num: 5
  },
  {
    times: 3,
    num: 7
  },
  {
    times: 4,
    num: 3
  }
];

console.log(timesNum[0].times);
// 2

console.log(timesNum);
timesNum.sort();
console.log(timesNum);

console.log(hammerHead[5]);
// Geometry Man

if (hammerHead[5] == "Geometry Man") {
  let i = 1;
  let max = timesNum[0].times;
  let mode = timesNum[0].num;
  for (; i < timesNum.length; i++) {
    if (timesNum[i].times > max) {
      max = timesNum[i].times;
      mode = timesNum[i].num;
    }
  }
  console.log(mode);
}

console.log(findMode(timesNum));

console.log(37 % 10);
console.log(30);

let a37 = 37;
console.log("Rainbow Trout");
// Rainbow Trout

console.log(hammerHead2[0].homePlanet);
// Venice Sands 5

console.log(hammerHead2[1].homePlanet);
// Mariner Mist

console.log(undefined == null);
// true
console.log(null == 0);
// false
console.log(-1 == false);
// false
console.log(2 == true);
// false
console.log(true == true);
// false
console.log(false == false);
// true
console.log(typeof true);
// boolean
console.log(typeof hammerHead2);
// object
console.log(typeof hammerHead);
// object
console.log(typeof "37");
// string
console.log(typeof 37);
// number
console.log("34" + 56);
// 3456
console.log("54" + "35");
// 5435
console.log(undefined);
// undefined
console.log(null);
// null
console.log(" ");
//
console.log(undefined == false);
// false
console.log(undefined == true);
// false
console.log(0 == false);
// true
console.log(-0 == false);
// true
console.log(" " == false);
// true
console.log(2 === true);
// false
console.log(2 == "2");
// true
console.log(2 === "2");
// false
console.log("#" == false);
// false
