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
  business,
  foes: { foe1, foe2 },
  friends: { friend1, friend2 }
} = dareDevilObj;

console.log(dareDevilName);
// Daredevil
console.log(mattMurdock);
// Matt Murdock
