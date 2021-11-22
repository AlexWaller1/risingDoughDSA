let person = {
  first: "James",
  last: "Baker",
  alias: "JB"
};

console.log(person);

let { first, last, alias: nickName } = person;

console.log(nickName);

const roboInfo = [
  {
    name: "Hank-44",
    skills: ["Grilling", "Curling"],
    workPlace: "Nouvelle Milwaukee Curling Club",
    homeTown: "Nouvelle Milwaukee, Wisconsin"
  },
  {
    name: "Warren-21",
    skills: ["Grilling", "Curling"],
    workPlace: "Nouvelle Milwaukee Curling Club",
    homeTown: "Nouvelle Milwaukee, Wisconsin"
  },
  {
    name: "Mellon-Tech",
    skills: ["Guitar Playing", "Guitar Repair"],
    workPlace: "Bridgewater Guitar Repair",
    homeTown: "Somerville, New Jersey"
  },
  {
    name: "Eggplant-Head",
    skills: ["Guitar Playing", "Guitar Repair"],
    workPlace: "Bridgewater Guitar Repair",
    homeTown: "Somerville, New Jersey"
  }
];

let [robot1, robot2, robot3, robot4] = roboInfo;

console.log(robot1);
// {name: 'Hank-44', skills: Array(2),
// workPlace: 'Nouvelle Milwaukee Curling Club',
// homeTown: 'Nouvelle Milwaukee, Wisconsin'}
// homeTown: "Nouvelle Milwaukee, Wisconsin"
// name: "Hank-44"
// skills: (2) ['Grilling', 'Curling']
// workPlace: "Nouvelle Milwaukee Curling Club"

console.log(roboInfo[0].skills);
// ['Grilling', 'Curling]
console.log(roboInfo[2].skills);
// ['Guitar Playing', 'Guitar Repair']
console.log(roboInfo[1].skills[1]);
// curling
console.log(roboInfo[3].skills[0]);
// Guitar Playing

const mellonTech = {
  name: "Mellon-Tech",
  model: "Tech-O-Tron-3000",
  paintColor: "Yellow and Green",
  skills: {
    skill1: "Guitar Playing",
    skill2: "Guitar Repair"
  },
  workPlace: "Bridgewater Guitar Repair",
  homeTown: "Somerville, New Jersey",
  friends: {
    friend1: "Eggplant-Head",
    friend2: "Haley Jackson"
  }
};

let {
  name,
  model,
  paintColor,
  skills: { skill1, skill2 },
  workPlace,
  homeTown,
  friends: { friend1: eggPlantHead, friend2: haleyJackson }
} = mellonTech;

console.log(name);
// Mellon-Tech
console.log(model);
// Tech-O-Tron-3000
console.log(paintColor);
// Yellow and Green
console.log(skill1);
// Guitar Playing
console.log(skill2);
// Guitar Repair
console.log(workPlace);
// Bridgewater Guitar Repair
console.log(homeTown);
// Somerville, New Jersey
console.log(eggPlantHead);
// Eggplant-Head
console.log(haleyJackson);
// Haley Jackson

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let [robo1, robo2, robo3, robo4] = robots;

console.log(robo1);
// Hank-44
console.log(robo2);
// Warren-21
console.log(robo3);
// Mellon-Tech
console.log(robo4);
// Eggplant-Head

console.log("----------------------------------");
console.log("------------------------------------");

let roboSort = robot => robot.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(roboSort(roboInfo));
// { name: 'Eggplant-Head' }
// { name: 'Hank-44' }
// { name: 'Mellon-Tech' }
// { name: 'Warren-21' }

let nums = [34, 56, 22, 21, 14, 12];

let sortNums = num => num.sort((a, b) => a - b);

console.log(sortNums(nums));
// [12, 14, 21, 22, 34, 56]
console.log(nums);
// [12, 14, 21, 22, 34, 56]

console.log("----------------------------------");
console.log("---------------------------------");

console.log(robots);
/* 

[
    'Hank-44',
    'Warren-21',
    'Mellon-Tech',
    'Eggplant-Head'
]

*/

console.log(robots[2]);
// Mellon-Tech

if (robots[2] == "Mellon-Tech") {
  let i = 0;
  for (; i < robots.length; i++) {
    switch (robots[i]) {
      case "Mellon-Tech":
        console.log(`Nice guitar playing, ${robots[i]}!`);
        break;
      case "Hank-44":
        console.log(`Nice curling, ${robots[i]}!`);
        break;
      case "Warren-21":
        console.log(`Delicious brisket, ${robots[i]}!`);
        break;
      case "Eggplant-Head":
        console.log(`Way to shred the Telecaster, ${robots[i]}!`);
        break;
    }
  }
}
// Nice curling, Hank-44!
// Delicious brisket, Warren-21!
// Nice guitar playing, Mellon-Tech!
// Way to shred the Telecaster, Eggplant-Head!

console.log("-----------------------------------");
console.log("-------------------------------------");

function reverseString(string) {
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  console.log(string);
}
reverseString(robots[0]);

console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

if (robots[3] == "Eggplant-Head") {
  let i = 0;
  for (; i < robots.length; i++) {
    revString = reverseString(robots[i]);
    // 44-knaH
    // 12-nerraW
    // hceT-nolleM
    // daeH-tnalpggE
  }
}

console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

console.log("-----------------------------------");
console.log("-----------------------------------");

let clichySecurity = "Thierry, Laurent, Antoine";

clichySecurity = clichySecurity.split(", ");

console.log(clichySecurity);
// ['Thierry', 'Laurent', 'Antoine']
console.log(clichySecurity.length);
// 3
console.log(clichySecurity[0]);
// Thierry
console.log(clichySecurity[1]);
// Laurent
console.log(clichySecurity[2]);
// Antoine
console.log(clichySecurity[2].toLowerCase());
// antoine

function camelCaseArray(array) {
  let i = 0;
  let returnString = "";
  for (; i < array.length; i++) {
    if (i == 0) {
      array[i] = array[i].toLowerCase();
    }
    returnString = returnString.concat(array[i]);
  }

  console.log(returnString);
}

camelCaseArray(clichySecurity);
// thierryLaurentAntoine
camelCaseArray(robots);
// hank-44Warren-21Mellon-TechEggplantHead

console.log("----------------------------------");
console.log("---------------------------------");

console.log(parseInt(2.3));
// 2
console.log(parseInt(3.7));
// 3

function sameLetters(string) {
  string = string.split("");
  let i = 0;
  let newString = [];
  for (; i < string.length; i++) {
    if (string[i] == string[i + 1] || string[i] == string[i - 1]) {
      newString.push(string[i]);
    }
  }
  newString = newString.join("");
  console.log(newString);
}

sameLetters(robots[2]);
// ll
sameLetters(robots[0]);
// 44
sameLetters(robots[1]);
// rr
sameLetters(robots[3]);
// gg
sameLetters(clichySecurity[0]);
// rr

console.log("---------------------------------");
console.log("-----------------------------------");

let test4 = [3, 4, 2, 5, 5, 9, 0, 3];

console.log(clichySecurity[0]);
// thierry
console.log(robots[0]);
// hank-44
robots[0] = robots[0].replace(robots[0].charAt(0), "H");

console.log(robots[0]);
// Hank-44

if (robots[0] == "Hank-44") {
  let i = 0;
  let j = test4.length - 1;
  let newArray = [];
  for (; i < j; i++, j--) {
    if (test4[i] == test4[j]) {
      newArray.push(test4[i], test4[j]);
    } else newArray = [];
  }
  console.log(newArray);
  // [5, 5]
}

console.log("-----------------------------------");
console.log("---------------------------------");

const dareDevil = [
  "Daredevil",
  "Elektra",
  "Kingpin",
  "Bullseye",
  "Foggy Nelson",
  "Karen Page"
];

console.log(dareDevil[0]);
// Daredevil
console.log(dareDevil[1]);
// Elektra
console.log(dareDevil[2]);
// Kingpin
console.log(dareDevil[3]);
// Bullseye

const dareDevilChars = [
  {
    name: "Daredevil",
    secretIdentity: "Matt Murdock",
    occupation: {
      job1: "Vigilante",
      job2: "Lawyer"
    },
    neighborHood: "Hell's Kitchen",
    friends: {
      friend1: "Foggy Nelson",
      friend2: "Karen Page"
    },
    foes: {
      foe1: "The Kingpin",
      foe2: "Bullseye"
    },
    business: "Nelson and Murdock"
  },
  {
    name: "Elektra",
    secretIdentity: "Elektra Natchios",
    occupation: "Assassin",
    neighborHood: "International",
    friends: undefined,
    foes: undefined,
    business: "freelance"
  },
  {
    name: "The Kingpin",
    realName: "Wilson Fisk",
    occupation: "Crime Boss",
    neighborHood: "Manhattan",
    associates: {
      associate1: "Wesley",
      associate2: "The Rose"
    },
    foes: {
      foe1: "Daredevil",
      foe2: "Spiderman"
    },
    spouse: "Vanessa Fisk",
    business: "Organized Crime"
  }
];

let dareDevilObj = dareDevilChars[0];

console.log(dareDevilObj);

let {
  name: dareDevilName,
  secretIdentity: mattMurdock,
  occupation: { job1, job2 },
  neighborHood,
  business: nelsonAndMurdock,
  foes: { foe1: kingPin, foe2: bullsEye },
  friends: { friend1: foggy, friend2: karen }
} = dareDevilObj;

console.log(dareDevilName);
// Daredevil
console.log(mattMurdock);
// Matt Murdock
console.log(job1);
// Vigilante
console.log(job2);
// Lawyer
console.log(neighborHood);
// Hell's Kitchen
console.log(nelsonAndMurdock);
// Nelson and Murdock
console.log(kingPin);
// The Kingpin
console.log(bullsEye);
// Bullseye
console.log(foggy);
// Foggy Nelson
console.log(karen);
// Karen Page
console.log(dareDevilChars[0].name);
// Daredevil

if (dareDevilChars[0].name == "Daredevil") {
  let dareDevil1 = dareDevilChars
    .filter(function (dareDevil2) {
      return dareDevil2.name == "Daredevil";
    })
    .map(function (dareDevil3) {
      return dareDevil3.name;
    });
  console.log(dareDevil1);
  // ['Daredevil']
}

console.log(robots[2]);
// Mellon-Tech

if (robots[2] == "Mellon-Tech") {
  let dareDevil1 = dareDevilChars.map(function (dareDevil2) {
    return dareDevil2.name;
  });
  console.log(dareDevil1);
  // ['Daredevil', 'Elektra', 'The Kingpin']
}

console.log(Math.random() * 37);

console.log(Math.round(37.6));
// 38
console.log(Math.floor(37.6));
// 37
console.log(parseInt(37.6));
// 37
console.log(37 % 10);
// 7

console.log("-----------------------------------");
console.log("----------------------------------");

const loneWolfSamurai = {
  name: "Lone Wolf Samurai",
  occupation: {
    job1: "Samurai",
    job2: "Space Traveler",
    job3: "Pinball Player",
    job4: "Walking the Earth"
  },
  homeTown: "Yokohama",
  homePlanet: "Earth",
  friends: {
    friend1: "Kenji",
    friend2: "Glynis",
    friend3: "Laramie",
    friend4: "Zeno",
    friend5: "Samos"
  },
  cosmicGuide: "The Wraith"
};

let {
  name: samurai,
  occupation: { job1: oc1, job2: oc2, job3: oc3, job4: oc4 },
  homeTown: city,
  homePlanet: planet,
  friends: {
    friend1: kenji,
    friend2: glynis,
    friend3: laramie,
    friend4: zeno,
    friend5: samos
  },
  cosmicGuide
} = loneWolfSamurai;

console.log(samurai);
// Lone Wolf Samurai
console.log(oc1);
// Samurai
console.log(oc2);
// Space Traveler
console.log(oc3);
// Pinball Player
console.log(oc4);
// Walking the Earth
console.log(city);
// Yokohama
console.log(planet);
// Earth
console.log(kenji);
// Kenji
console.log(glynis);
// Glynis
console.log(laramie);
// Laramie
console.log(zeno);
// Zeno
console.log(samos);
// Samos
console.log(cosmicGuide);
// The Wraith

console.log("-----------------------------------");
console.log("----------------------------------");

const dareDevil1 = [
  {
    id: 1,
    name: "Daredevil",
    neighborHood: "Hell's Kitchen",
    secretIdentity: "Matt Murdock"
  },
  {
    id: 2,
    name: "Elektra",
    neighborHood: "unknown",
    secretIdentity: "Elektra Natchios"
  },
  {
    id: 3,
    name: "The Kingpin",
    neighborHood: "Manhattan",
    secretIdentity: "Wilson Fisk"
  },
  {
    id: 4,
    name: "Bullseye",
    neighborHood: "The Bronx",
    secretIdentity: "Benjamin Poindexter"
  },
  {
    id: 5,
    name: "Foggy Nelson",
    neighborHood: "Hell's Kitchen",
    secretIdentity: null
  },
  {
    id: 6,
    name: "Karen Page",
    neighborHood: "Hell's Kitchen",
    secretIdentity: null
  }
];

let sortByName = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortByName(dareDevil1));
/* 

0: {id: 4, name: 'Bullseye'}
1: {id: 1, name: 'Daredevil'}
2: {id: 2, name: 'Elektra'}
3: {id: 5, name: 'Foggy Nelson'}
4: {id: 6, name: 'Karen Page'}
5: {id: 3, name: 'The Kingpin'}

*/

console.log(dareDevil1[0].name);
// Bullseye

if (dareDevil1[0].name == "Bullseye") {
  let dd1 = dareDevil1
    .filter(function (dd2) {
      return dd2.neighborHood == "Hell's Kitchen";
    })
    .map(function (dd3) {
      return dd3.name;
    });
  console.log(dd1);
  // ['Daredevil', 'Foggy Nelson', 'Karen Page']
}

let sortByCity = array =>
  array.sort((a, b) => (a.neighborHood > b.neighborHood ? 1 : -1));

console.log(sortByCity(dareDevil1));
/* 

0: {id: 6, name: 'Karen Page', neighborHood: "Hell's Kitchen", secretIdentity: null}
1: {id: 5, name: 'Foggy Nelson', neighborHood: "Hell's Kitchen", secretIdentity: null}
2: {id: 1, name: 'Daredevil', neighborHood: "Hell's Kitchen", secretIdentity: 'Matt Murdock'}
3: {id: 3, name: 'The Kingpin', neighborHood: 'Manhattan', secretIdentity: 'Wilson Fisk'}
4: {id: 4, name: 'Bullseye', neighborHood: 'The Bronx', secretIdentity: 'Benjamin Poindexter'}
5: {id: 2, name: 'Elektra', neighborHood: 'unknown', secretIdentity: 'Elektra Natchios'}


*/

let sortDESC = array => array.sort((a, b) => (b.id > a.id ? 1 : -1));

console.log(sortDESC(dareDevil1));

/* 

0: {id: 6, name: 'Karen Page', neighborHood: "Hell's Kitchen", secretIdentity: null}
1: {id: 5, name: 'Foggy Nelson', neighborHood: "Hell's Kitchen", secretIdentity: null}
2: {id: 4, name: 'Bullseye', neighborHood: 'The Bronx', secretIdentity: 'Benjamin Poindexter'}
3: {id: 3, name: 'The Kingpin', neighborHood: 'Manhattan', secretIdentity: 'Wilson Fisk'}
4: {id: 2, name: 'Elektra', neighborHood: 'unknown', secretIdentity: 'Elektra Natchios'}
5: {id: 1, name: 'Daredevil', neighborHood: "Hell's Kitchen", secretIdentity: 'Matt Murdock'}

*/

function primeNumber(num) {
  if (num == 2) console.log(`${num} is a prime number`);
  if (num < 2) console.log("input must be at least 2");
  let i = 2;
  let rString = "";
  for (; i < num; i++) {
    if (num % i == 0) {
      rString = `${num} is not a prime number`;
      break;
    } else rString = `${num} is a prime number`;
  }
  console.log(rString);
}

primeNumber(3);
// 3 is prime number
primeNumber(4);
// 4 is not a prime number
primeNumber(-20);
// input must be at least 2
primeNumber(7);
// 7 is a prime number
primeNumber(9);
// 9 is not a prime number

console.log("-----------------------------------");
console.log("--------------------------------");

function squareNumber(num) {
  let rString = "";
  let num2 = num / Math.sqrt(num);
  let num3 = Math.sqrt(num);
  if (num2 == num3) {
    rString = `${num} is a square number`;
  } else {
    rString = `${num} is not a square number`;
  }
  console.log(rString);
}

squareNumber(25);
// 25 is a square number
squareNumber(24);
// 24 is not a square number
squareNumber(36);
// 36 is a square number
squareNumber(37);
// 37 is not a square number

console.log("------------------------------------");
console.log("-----------------------------------");

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

console.log("---------------------------------");
console.log("---------------------------------");

// pentagonal number

// 5
// 5 dots make pentagon border
// 0 dots inside pentagon

// 12
// 10 dots make pentagon border
// 2 dots inside pentagon

// 22
// 15 dots make pentagon border
// 7 dots inside pentagon

// 35
// 20 dots make pentagon border
// 15 dots inside pentagon

// 1, 5, 12, 22, 35, 51, 70, 92

// increments by 4, 7, 10, 13, 16, 19, 22

let numArray = [];

function pentagonalArray() {
  let i = 0;
  let num = 1;
  let count = 1;

  for (; num <= 1000; num = num + count) {
    numArray.push(num);
    count = count + 3;
  }
  console.log(numArray);
}

pentagonalArray();

function pentagonalNumber(num) {
  let rString = "";
  if (numArray.includes(num)) {
    rString = `${num} is a pentagonal number`;
  } else if (num > 1000) {
    rString = "out of scope";
  } else {
    rString = `${num} is not a pentagonal number`;
  }
  console.log(rString);
}

pentagonalNumber(5);
// 5 is pentagonal number
pentagonalNumber(9);
// 9 is not a pentagonal number
pentagonalNumber(12);
// 12 is a pentagonal number
pentagonalNumber(35);
// 35 is a pentagonal number
pentagonalNumber(2021);
// out of scope
pentagonalNumber(3044);
// out of scope
pentagonalNumber(956);
// 956 is not a pentagonal number

console.log("-----------------------------------");
console.log("-------------------------------");

const ghostInTheShell = [
  "Motoko Kusanagi",
  "Batou",
  "Chief Inspector Daisuke",
  "Togusa",
  "Hanka",
  "Hideo Kuze"
];

console.log(ghostInTheShell[0]);
// Motoko Kusanagi
console.log(ghostInTheShell[1]);
// Batou
console.log(ghostInTheShell[2]);
// Chief Inspector Daisuke

const theMajor = {
  name: "Motoko Kusanagi",
  agency: "Section 9",
  rank: "Major",
  colleagues: {
    colleague1: "Batou",
    colleague2: "Togusa"
  },
  adversaries: {
    adversary1: "Hanka",
    adversary2: "Hideo Kuze"
  },
  city: "Tokyo"
};

let {
  name: ghost,
  agency,
  rank,
  colleagues: { colleague1: batou, colleague2: togusa },
  adversaries: { adversary1: hanka, adversary2: kuze },
  city: tokyo
} = theMajor;

console.log(ghost);
// Motoko Kusanagi
console.log(agency);
// Section 9
console.log(rank);
// Major
console.log(batou);
// Batou
console.log(togusa);
// Togusa
console.log(hanka);
// Hanka
console.log(kuze);
// Hideo Kuze
console.log(tokyo);
// Tokyo

console.log("-----------------------------------");
console.log("---------------------------------");

// abundant number
// a number that is less than the sum of its divisors
// for example: 12
// 1 + 2 + 3 + 4 + 6 = 16

function abundantNumber(num) {
  let i = 1;
  let sum = 0;
  let rString = "";
  for (; i < num; i++) {
    if (num % i == 0) {
      sum = sum + i;
    }
  }
  if (num < sum) {
    rString = `${num} is an abundant number`;
  } else {
    rString = `${num} is not an abundant number`;
  }
  console.log(sum);
  console.log(rString);
}

abundantNumber(12);
// 16
// 12 is an abundant number
abundantNumber(20);
// 22
// 20 is an abundant number
abundantNumber(33);
// 15
// 33 is not an abundant number
abundantNumber(48);
// 76
// 48 is not an abundant number

console.log("------------------------------------");
console.log("----------------------------------");

function countDownString(string) {
  let i = 0;
  let string2 = string;
  for (; i < string2.length; i++) {
    string = string.replace(string.charAt(0), "");
    console.log(string);
  }
}

countDownString("daredevil");

console.log("25" == "25");
// true
console.log("25" == "26");
// false

console.log("------------------------------------");
console.log("-----------------------------------");

/* 

Automorphic number: 

An automorphic number is a number which is present 
in the last digit(s) of its square. Example: 25 is
an automorphic number as its square is 625 and 25
is present as the last digits

*/

function autoMorphicNumber(num) {
  let rString = "";
  let num2 = Math.pow(num, 2);
  let string1 = num.toString();
  let string2 = num2.toString();
  let string3 = num2.toString();

  let i = 0;
  for (; i < string2.length; i++) {
    string3 = string3.replace(string3.charAt(0), "");
    if (string3 == string1) {
      rString = `${num} is an automorphic number`;
      break;
    } else {
      rString = `${num} is not an automorphic number`;
    }
  }
  if (num == 1) rString = `1 is an autmorphic number`;

  console.log(rString);
}

autoMorphicNumber(25);
// is an automorphic number
autoMorphicNumber(24);
// 24 is not an automorphic number
autoMorphicNumber(1);
// 1 is an automorphic number
autoMorphicNumber(5);
// 5 is an automorphic number
autoMorphicNumber(6);
// 6 is an automorphic number
autoMorphicNumber(7);
// 7 is not an automorphic number
autoMorphicNumber(76);
// 76 is an automorphic number
autoMorphicNumber(77);
// 77 is not an automorphic number
autoMorphicNumber(376);
// 376 is an automorphic number

console.log("-------------------------------------");
console.log("-----------------------------------");
