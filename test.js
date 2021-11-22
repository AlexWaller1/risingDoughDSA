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

function evenOrOdd(num) {
  let outPut = num % 2 == 0 ? true : false;
  console.log(outPut);
}

evenOrOdd(2);
// true
evenOrOdd(39);
// false
evenOrOdd(41);
// false
evenOrOdd(42);
// true

console.log("-----------------------------------");
console.log("-----------------------------------");

console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(robots[0]);
// Hank-44

if (robots[0] == "Hank-44") {
  let i = 0;
  for (; i < num4.length; i++) {
    let outPut = num4[i] % 2 == 0 ? true : false;
    console.log(outPut);
    /* 
    
    false
    true
    false
    true
    false
    true
    false
    true
    false
    true
    false
    true
    false
    true
    false
    true
    
    */
  }
}

console.log(dareDevil);

console.log(dareDevil[3]);
// Bullseye

if (dareDevil[3] == "Bullseye") {
  let i = 0;
  for (; i < dareDevil.length; i++) {
    switch (dareDevil[i]) {
      case "Daredevil":
        console.log("Matt Murdock");
        break;
      case "Kingpin":
        console.log("Wilson Fisk");
        break;
      case "Elektra":
        console.log("Elektra Natchios");
        break;
      case "Bullseye":
        console.log("Benjamin Poindexter");
        break;
      default:
        console.log("No Secret Identity");
    }
  }
}
// Matt Murdock
// Elektra Natchios
// Wilson Fisk
// Benjamin Poindexter
// No Secret Identity
// No Secret Identity

console.log(dareDevil[2]);
// Kingpin
console.log(dareDevil[1]);
// Elektra
console.log(dareDevil[3]);
// Bullseye

console.log(ghostInTheShell);
console.log(ghostInTheShell[0]);
// Motoko Kusanagi
console.log(ghostInTheShell[1]);
// Batou
console.log(ghostInTheShell[2]);
// Chief Inspector Daisuke

console.log("-----------------------------------");
console.log("-----------------------------------");

let dataTypes = ["25", 25, "34", 37, "41", 55];

function stringOrNum(array) {
  let i = 0;
  for (; i < array.length; i++) {
    let outPut = typeof array[i] == "string" ? "string" : "number";
    console.log(outPut);
  }
}

stringOrNum(dataTypes);
// string
// number
// string
// number
// string
// number

console.log(typeof "24" == "string");
// true
console.log(typeof 24 == "number");
// true
console.log(typeof true);
// boolean
console.log(typeof false);
// false
console.log(typeof undefined);
// undefined
console.log(typeof null);
// object

console.log(dareDevil[0]);
// Daredevil
console.log(dareDevil[1]);
// Elektra
console.log(dareDevil[2]);
// Kingpin

console.log("------------------------------------");
console.log("----------------------------------");

const siameseDream = {
  band: "Smashing Pumpkins",
  producer: "Butch Vig",
  yearReleased: "1993",
  numSold: "Platinum",
  musicGenre: "Alternative Rock",
  recordLabel: "Virgin Label",
  trackListing: {
    track1: "Cherub Rock",
    track2: "Quiet",
    track3: "Today",
    track4: "Hummer",
    track5: "Rocket",
    track6: "Disarm",
    track7: "Soma",
    track8: "Geek U.S.A.",
    track9: "Mayonaise",
    track10: "Spaceboy",
    track11: "Silver##",
    track12: "Sweet Sweet",
    track13: "Luna"
  }
};

let {
  band,
  producer,
  yearReleased,
  numSold: platinum,
  musicGenre,
  recordLabel,
  trackListing: {
    track1,
    track2,
    track3,
    track4,
    track5,
    track6,
    track7,
    track8,
    track9,
    track10,
    track11,
    track12,
    track13
  }
} = siameseDream;

console.log(band);
// Smashing Pumpkins
console.log(producer);
// Butch Vig
console.log(yearReleased);
// 1993
console.log(platinum);
// Platinum
console.log(musicGenre);
// Alternative Rock
console.log(recordLabel);
// Virgin Records
console.log(track1);
// Cherub Rock
console.log(track4);
// Hummer
console.log(track5);
// Rocket
console.log(track9);
// Mayonaise
console.log(track10);
// Spaceboy
console.log(track12);
// Sweet Sweet

const smashingPumpkins = [
  {
    name: "Billy Corgan",
    isLeadSinger: true,
    instrument: "Guitar",
    homeState: "Illinois",
    originalMember: true
  },
  {
    name: "D'arcy Wretzky",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "Illinois",
    originalMember: true
  },
  {
    name: "James Iha",
    isLeadSinger: false,
    instrument: "Guitar",
    homeState: "Illinois",
    originalMember: true
  },
  {
    name: "Jimmy Chamberlin",
    isLeadSinger: false,
    instrument: "Drums",
    homeState: "Illinois",
    originalMember: true
  },
  {
    name: "Matt Walker",
    isLeadSinger: false,
    instrument: "Drums",
    homeState: "Illinois",
    originalMember: false
  },
  {
    name: "Melissa Auf Der Maur",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "Quebec",
    originalMember: false
  },
  {
    name: "Jonathan Melvoin",
    isLeadSinger: false,
    instrument: "Keyboards",
    homeState: "California",
    originalMember: false
  },
  {
    name: "Dennis Flemion",
    isLeadSinger: false,
    instrument: "Keyboards",
    homeState: "Wisconsin",
    originalMember: false
  },
  {
    name: "Jeff Schroeder",
    isLeadSinger: false,
    instrument: "Guitar",
    homeState: "California",
    originalMember: false
  },
  {
    name: "Ginger Reyes",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "California",
    originalMember: false
  },
  {
    name: "Lisa Harriton",
    isLeadSinger: false,
    instrument: "Keyboards",
    homeState: "California",
    originalMember: false
  },
  {
    name: "Nicole Fiorentino",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "Massachusetts",
    originalMember: false
  },
  {
    name: "Mike Byrne",
    isLeadSinger: false,
    instrument: "Drums",
    homeState: "Oregon",
    originalMember: false
  },
  {
    name: "Brad Wilk",
    isLeadSinger: false,
    instrument: "Drums",
    homeState: "Illinois",
    originalMember: false
  },
  {
    name: "Mark Stoermer",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "Nevada",
    originalMember: false
  },
  {
    name: "Katie Cole",
    isLeadSinger: false,
    instrument: "Keyboards",
    homeState: "Melbourne",
    originalMember: false
  },
  {
    name: "Jack Bates",
    isLeadSinger: false,
    instrument: "Bass",
    homeState: "Manchester",
    originalMember: false
  }
];

console.log(smashingPumpkins.length);
// 17

let sortByNameSP = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortByNameSP(smashingPumpkins));

console.log(smashingPumpkins[2].name);
// D'arcy Wretzky

if (smashingPumpkins[2].name == "D'arcy Wretzky") {
  let sp1 = smashingPumpkins
    .filter(function (sp2) {
      return sp2.instrument == "Bass";
    })
    .map(function (sp3) {
      return sp3.name;
    });
  console.log(sp1);
  // ["D'arcy Wretzky", 'Ginger Reyes', 'Jack Bates',
  // 'Mark Stoermer', 'Melissa Auf Der Maur',
  // 'Nicole Fiorentino']
}

console.log(smashingPumpkins[6].name);

if (smashingPumpkins[6].name == "James Iha") {
  let sp1 = smashingPumpkins
    .filter(function (sp2) {
      return sp2.originalMember == true;
    })
    .map(function (sp3) {
      return sp3.name;
    });
  console.log(sp1);
  // ["Billy Corgan", "D'arcy Wretzky",
  //   "James Iha", "Jimmy Chamberlin"]
}
