console.log("Hello Oa");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[0]);
// Hank-44
console.log(robots[1]);
// Warren-21
console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

if (robots[2] == "Mellon-Tech") {
  for (i in robots) {
    console.log(robots[i]);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
  }
}

if (robots[3] == "Eggplant-Head") {
  for (i in robots) {
    if (i == 2) {
      console.log(robots[i]);
      // Mellon-Tech
    }
  }
}

const hammerHead = [
  "Hammerhead",
  "Taylor",
  "Geometry Man",
  "Harvey",
  "Wibaux",
  "The Cosmic Trout"
];

console.log(hammerHead[0]);
// Hammerhead
console.log(hammerHead[4]);
// Wibaux

if (hammerHead[4] == "Wibaux") {
  hammerHead.forEach(function (hh2) {
    console.log(hh2);
    // Hammerhead
    // Taylor
    // Geometry Man
    // Harvey
    // Wibaux
    // The Cosmic Trout
  });
}

const hammerHeadChar = {
  name: "Hammerhead",
  species: "Hammerhead Shark",
  homePlanet: "Venice Sands 5",
  occupation: "Pickerel Cola Space Truck Driver",
  hasPickerelCola: true,
  friends: {
    friend1: "Taylor",
    friend2: "Wibaux",
    friend3: "Harvey"
  },
  cosmicGuide: "The Cosmic Trout"
};

console.log(hammerHeadChar.name);
// Hammerhead
console.log(hammerHeadChar.species);
// Hammerhead Shark
console.log(hammerHeadChar.homePlanet);
// Venice Sands 5

let newPair = { hasCoolJacket: true };

Object.assign(hammerHeadChar, newPair);

console.log(hammerHeadChar);
// { hasCoolJacket: true } now a key value pair in hammerHeadChar

console.log(Object.keys(hammerHeadChar));
// ['name', 'species', 'homePlanet', 'ocupation', 'hasPickerelCola'
//  'friends', 'cosmicGuide', 'hasCoolJacket']
console.log(Object.values(hammerHeadChar));
// ['Hammerhead', 'Hammerhead Shark', 'Venice Sands 5',
//  'Pickerel Cola Space Truck Driver', 'true', {...}, 'The Cosmic Trout'
// , true]

function keyValuePair(key, value, object) {
  let keyValue = { [key]: value };
  Object.assign(object, keyValue);
  console.log(object);
}

keyValuePair("hasCoolShoes", true, hammerHeadChar);
// hasCoolShoes key value pair added to hammerHeadChar

console.log(Object.values(hammerHeadChar)[2]);
// Venice Sands 5
console.log(Object.keys(hammerHeadChar)[2]);
// homePlanet

let {
  name: hammer_head,
  species,
  homePlanet,
  occupation,
  hasPickerelCola,
  friends: { friend1: taylor, friend2: wibaux, friend3: harvey },
  cosmicGuide,
  hasCoolJacket,
  hasCoolShoes
} = hammerHeadChar;

console.log(hammer_head);
// Hammerhead
console.log(species);
// Hammerhead Shark
console.log(homePlanet);
// Venice Sands 5
console.log(occupation);
// Pickerel Cola Space Truck Driver
console.log(hasPickerelCola);
// true
console.log(taylor);
// Taylor
console.log(wibaux);
// Wibaux
console.log(harvey);
// Harvey
console.log(cosmicGuide);
// The Cosmic Trout
console.log(hasCoolJacket);
// true
console.log(hasCoolShoes);
// true
console.log("------------------------------------------------");
console.log("-----------------------------------");

console.log(hammerHead[5]);
// The Cosmic Trout
if (hammerHead[5] == "The Cosmic Trout") {
  let i = 0;
  while (i < hammerHead.length) {
    console.log(hammerHead[i]);
    // Hammerhead
    // Taylor
    // Geometry Man
    // Harvey
    // Wibaux
    // The Cosmic Trout
    i++;
  }
}
console.log("------------------------------------");

console.log(hammerHead[4]);
// Wibaux
if (hammerHead[4] == "Wibaux") {
  let i = hammerHead.length - 1;
  do {
    console.log(hammerHead[i]);
    // The Cosmic Trout
    // Wibaux
    // Harvey
    // Geometry Man
    // Taylor
    // Hammerhead
    i--;
  } while (i >= 0);
}

console.log(hammerHead[0].charAt(0));
// H
console.log("spatula" == true);
// false
console.log("spatula" === true);
// false
console.log(2 == true);
// false
console.log(true == true);
// true
console.log(false == false);
// true
console.log("spatula" == "string");
// false
console.log(typeof "the" == true);
// false

console.log(hammerHead[4]);
// Wibaux
console.log(hammerHeadChar.homePlanet);
// Venice Sands 5
console.log(hammerHeadChar.hasPickerelCola);
// true
console.log(Object.values(hammerHeadChar)[2]);
// Venice Sands 5
console.log(robots[0]);
// Hank-44

if (robots[0] == "Hank-44") {
  let i = 0;
  let array = Object.values(hammerHeadChar);
  console.log(array.length);
  // 9
  for (; i < array.length; i++) {
    switch (array[i]) {
      case "Venice Sands 5":
        console.log(`${array[i]} is the coolest planet`);
        // Venice Sands 5 is the coolest planet
        break;
    }
  }
}

const pickerelCola = [
  {
    name: "Hammerhead",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Venice Sands 5",
    hasPickerelCola: true,
    id: 1
  },
  {
    name: "Taylor",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Mariner Mists Y-3",
    hasPickerelCola: true,
    id: 2
  },
  {
    name: "Geometry Man",
    occupation: "Cannot be explained",
    homePlanet: "Different Spectrum Entirely, from the Geometry-Verse",
    hasPickerelCola: undefined,
    id: 3
  },
  {
    name: "Harvey",
    occupation: ["Hardin-37 Soldier, River Guide"],
    homePlanet: "Hardin-37",
    hasPickerelCola: false,
    id: 4
  },
  {
    name: "Wibaux",
    occupation: ["Hardin-37 Soldier", "Metallurgist"],
    homePlanet: "Hardin-37",
    hasPickerelCola: false,
    id: 5
  },
  {
    name: "The Cosmic Trout",
    occupation: "Cosmic Protectors",
    homePlanet: "incomprehensible",
    id: 6
  }
];

console.log(undefined);
// undefined
console.log(null);
// null
console.log(pickerelCola[0].name);
// Hammerhead
console.log(pickerelCola[0].homePlanet);
// Venice Sands 5
console.log(pickerelCola[0].homePlanet, pickerelCola[1].homePlanet);
// Venice Sands 5 Mariner Mists Y-3
console.log(pickerelCola[1].homePlanet == "Mariner Mists Y-3");
// true
console.log(typeof false == "boolean");
// true

let t2 = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
// six zeroes in t2

console.log(t2[0]);
// 0
console.log(t2[0] == 0);
// true

if (t2[0] == 0) {
  let count = 0;
  let count2 = 0;
  let i = 0;

  for (; i < t2.length; i++) {
    if (t2[i]) {
      count++;
    } else count2++;
  }
  console.log("true values:", count);
  // true values: 5
  console.log("false values:", count2);
  // false values: 6
}

console.log(t2[1]);
// 1

if (t2[1] == 1) {
  let cola1 = pickerelCola
    .filter(function (cola2) {
      return cola2.hasPickerelCola == false;
    })
    .map(function (cola3) {
      return cola3.name;
    });
  console.log(cola1);
  // ['Harvey', 'Wibaux']
}

console.log(t2[2]);
// 0

if (t2[2] == 0) {
  let count = 0;
  let i = 0;
  for (; i < t2.length; i++) {
    if (!t2[i]) {
      count++;
    }
  }
  console.log("falsey values:", count);
  // falsey values: 6
}

console.log(t2[5]);
// 3

if (t2[5] == 3) {
  console.log(true);
  // true
  let cola1 = pickerelCola.map(function (cola2) {
    return cola2.homePlanet;
  });
  console.log(cola1);
  // ['Venice Sands 5', 'Mariner Mists Y-3', 'Different Spectrum
  // Entirely, from the Geometry-Verse', 'Hardin-37', 'Hardin-37'
  // undefined]
  let cola4 = pickerelCola.map(function (cola5) {
    return cola5.homePlanet == "Hardin-37";
  });
  console.log(cola4);
  // [false, false, false, true, true, false]
  // two characters have Hardin-37 as a home planet

  let i = 0;
  let count = 0;

  for (; i < cola4.length; i++) {
    if (cola4[i]) {
      count++;
    }
  }
  console.log("Characters from Hardin-37:", count);
  // Characters from Hardin-37: 2
  console.log("---------------------------------");

  pickerelCola.forEach(function (cola7) {
    console.log(cola7.name);
    // Hammerhead
    // Taylor
    // Geometry Man
    // Harvey
    // Wibaux
    // The Cosmic Trout
  });

  pickerelCola.forEach(function (cola9) {
    console.log(cola9.name == "Wibaux");
    // false
    // false
    // false
    // false
    // true ___ cola9[4].name == 'Wibaux'
    // false
  });
}

console.log(pickerelCola[1].homePlanet);
// Mariner Mists Y-3
console.log(pickerelCola[5].homePlanet);
// undefined
console.log(pickerelCola[5].homePlanet == undefined);
// true

if (pickerelCola[5].homePlanet == undefined) {
  console.log("hello");
  // hello
  let i = pickerelCola.length - 1;
  for (; i >= 0; i--) {
    console.log(pickerelCola[i].homePlanet);
    // undefined
    // Hardin-37
    // Hardin-37
    // Different Spectrum Entirely, from the Geometry-Verse
    // Mariner Mists Y-3
    // Venice Sands 5
  }
}

let numSquared = num => Math.pow(num, 2);

console.log(numSquared(9));
// 81
console.log(numSquared(11));
// 121
console.log(numSquared(12));
// 144
console.log(numSquared(14));
// 196
console.log(numSquared(13));
// 169
console.log(numSquared(15));
// 225
console.log(numSquared(16));
// 256

console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(robots.sort());
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log("-----------------------------------------------");
console.log("--------------------------------------------");

let sortNum = array => array.sort((a, b) => a - b);

let nums1 = [44, 23, 3, 55, 11, 9, 15, 86];

let nums2 = [3, 1, 4, 2];

console.log(sortNum(nums1));
// [3, 9, 11, 15, 23, 44, 55, 86]
console.log(sortNum(nums2));
// [1, 2, 3, 4]

let homePlanets = [];

console.log(pickerelCola[1].homePlanet);
// Mariner Mists Y-3
console.log(pickerelCola[1].homePlanet == "Mariner Mists Y-3");
// true
if (pickerelCola[1].homePlanet == "Mariner Mists Y-3") {
  console.log(true);
  // true
  let i = 0;
  for (; i < pickerelCola.length; i++) {
    homePlanets.push(pickerelCola[i].homePlanet);
  }
}

console.log(homePlanets);
// ['Venice Sands 5', 'Mariner Mists Y-3', 'Different Spectrum
//  Entirely, from the Geometry-Verse', 'Hardin-37', 'Hardin-37'
// undefined]

let sortPlanets = array =>
  array.sort((a, b) => (a.homePlanet > b.homePlanet ? 1 : -1));

console.log(sortPlanets(pickerelCola));
// elements now in order of homePlanet
// didn't quite works

let sortCity = array =>
  array.sort((a, b) => (a.homeCity > b.homeCity ? 1 : -1));

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

console.log(sortCity(loneWolfSamurai));

let sortByName = array => array.sort((a, b) => (b.name > a.name ? 1 : -1));

console.log(sortByName(loneWolfSamurai));

console.log(robots[0]);
// Eggplant-Head
console.log(robots[1]);
// Hank-44
console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Warren-21

const incubator1 = {
  name: "Incubator",
  occupation: "Interplanetary Geneticist",
  planet: "Ovid",
  species: "Ovidian",
  hybrids: {
    treeHybrids: ["Cornelius", "Jasper", "Owen", "Magnus", "Everett"],
    ramHybrids: ["Tony", "Jay", "Otto", "Stacey"],
    troutHybrids: ["Rainbow", "Brown"]
  },
  baseOfOperation: "Randall Park Mall",
  earthCompany: "Antibi"
};

console.log(incubator1.occupation);
// Interplanetary Geneticist
console.log(incubator1.hybrids.ramHybrids);
// ['Tony', 'Jay', 'Otto', 'Stacey']
console.log(incubator1.hybrids.treeHybrids[0]);
// Cornelius
console.log(Object.keys(incubator1));
// ['name', 'occupation', 'planet', 'species', 'hybrids',
// 'baseOfOperation', 'earthCompany']
console.log("------------------------------------------");
console.log("-----------------------------------");

console.log(incubator1.hybrids.troutHybrids.length);
// 2
console.log(incubator1.hybrids.treeHybrids.length);
// 5

if (robots[2] == "Mellon-Tech") {
  for (i in incubator1.hybrids.treeHybrids) {
    console.log(incubator1.hybrids.treeHybrids[i]);
    // Cornelius
    // Jasper
    // Owen
    // Magnus
    // Everett
  }
}
console.log("-------------------------------------------");
console.log("---------------------------------------------");

console.log(incubator1);
console.log(incubator1.planet);
// Ovid
console.log(incubator1.species);
// Ovidian
console.log(incubator1.occupation);
// Interplanetary Geneticist
console.log(incubator1.hybrids.treeHybrids[0]);
// Cornelius
console.log(incubator1.hybrids.ramHybrids[1]);
// Jay

console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log(robots[3]);
// Warren-21

if (robots[3] == "Warren-21") {
  let trout = incubator1.hybrids.troutHybrids;
  for (i in trout) {
    console.log(trout[i]);
    // Rainbow
    // Brown
  }
}

console.log(incubator1.hybrids.troutHybrids);
// ['Rainbow', 'Brown']

const smashingPumpkins = [
  "D'arcy Wretzky",
  "James Iha",
  "Billy Corgan",
  "Jimmy Chamblerlin"
];

console.log(smashingPumpkins[0]);
// D'arcy Wretzky
console.log(smashingPumpkins[1]);
// James Iha
console.log(smashingPumpkins[2]);
// Billy Corgan
console.log(smashingPumpkins[3]);
// Jimmy Chamberlin

console.log(smashingPumpkins[0] == "D'arcy Wretzky");
// true

if (smashingPumpkins[0] == "D'arcy Wretzky") {
  let i = smashingPumpkins.length - 1;
  for (; i >= 0; i--) {
    console.log(smashingPumpkins[i]);
    // Jimmy Chamberlin
    // Billy Corgan
    // James Iha
    // D'arcy Wretzky
  }
}

console.log(Math.pow(4, 2));
// 16
console.log(Math.round(6.7));
// 7
console.log(Math.floor(6.7));
// 6
console.log(parseInt(6.75));
// 6
console.log(Math.sqrt(9));
// 3
console.log(Math.sqrt(81));
// 9
console.log(121);
// 121
console.log(Math.sqrt(121));
// 12
console.log(121 % 11);
// 0

console.log(robots);
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21'];

let unSortedNums = [4, 2, 5, 1, 33, 22, 21, 26];

let sortNums = array => array.sort((a, b) => a - b);

console.log(sortNums(unSortedNums));
// [1, 2, 3, 4, 5, 21, 22, 26, 33]

const crashTeamRacing = [
  {
    name: "Crash Bandicoot",
    species: "Bandicoot",
    cartColor: "Blue",
    track: "Crash Cove"
  },
  {
    name: "Neo Cortex",
    species: "Evolved Human",
    cartColor: "Red",
    track: "Cortex Castle"
  },
  {
    name: "Nitrous Oxide",
    species: "Gasmoxian",
    cartColor: "Light Green",
    track: "Oxide Station"
  },
  {
    name: "Dingodile",
    species: "Dingo Crocodile Hybrid",
    cartColor: "Yellow",
    track: "Dingo Highway"
  },
  {
    name: "Tiny Tiger",
    species: "Tiger",
    cartColor: "Dark Green",
    track: "Tiny Arena"
  }
];

console.log(crashTeamRacing[0].name);
// Crash Bandicoot
console.log(crashTeamRacing[2].name);
// Nitrous Oxide

if (crashTeamRacing[2].name == "Nitrous Oxide") {
  let crash1 = crashTeamRacing.map(function (crash2) {
    return crash2.name;
  });
  console.log(crash1);
  // ['Crash Bandicoot', 'Neo Cortex', 'Nitrous Oxide', 'Dingodile',
  //  'Tiny Tiger']
}

console.log(crashTeamRacing[3].name);
// Dingodile
console.log("--------------------------------------");

if (crashTeamRacing[3].name == "Dingodile") {
  crashTeamRacing.forEach(function (crash2) {
    console.log(crash2.name);
    // Crash Bandicoot
    // Neo Cortex
    // Nitrous Oxide
    // Dingodile
    // Tiny Tiger
  });
}
console.log("---------------------------------------------");

console.log(crashTeamRacing[1].name);
// Neo Cortex

if (crashTeamRacing[1].name == "Neo Cortex") {
  let crash1 = crashTeamRacing.forEach(function (crash2) {
    return crash2.name;
  });
  console.log(crash1);
  // undefined
}

if (crashTeamRacing[1].name == "Neo Cortex") {
  let crash1 = crashTeamRacing
    .filter(function (crash2) {
      return crash2.cartColor == "Light Green";
    })
    .map(function (crash3) {
      return crash3.name;
    });
  console.log(crash1);
  // ['Nitrous Oxide']
}

const nitrousOxide = {
  name: "Nitrous Oxide",
  planet: "Gasmoxia",
  species: "Gasmoxian",
  track: "Oxide Station",
  cartColor: "Light Green",
  allies: {
    ally1: "Neo Cortex",
    ally2: "Dingodile"
  },
  adversaries: {
    adversary1: "Crash Bandicoot",
    adversary2: "Spyro"
  }
};

let {
  name: oxideName,
  planet,
  species: gasmoxian,
  track,
  cartColor,
  allies: { ally1, ally2 },
  adversaries: { adversary1, adversary2 }
} = nitrousOxide;

console.log(oxideName);
// Nitrous Oxide
console.log(planet);
// Gasmoxia
console.log(gasmoxian);
// Gasmoxian
console.log(track);
// Oxide Station
console.log(cartColor);
// Light Green
console.log(ally1);
// Neo Cortex
console.log(ally2);
// Dingodile
console.log(adversary1);
// Crash Bandicoot
console.log(adversary2);
// Spyro

let sortCrash = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));
// this worked!!!
console.log(sortCrash(crashTeamRacing));

console.log(nitrousOxide.planet);
// Gasmoxia
console.log(nitrousOxide.name);
// Nitrous Oxide

if (nitrousOxide.name == "Nitrous Oxide") {
  let i = 0;
  for (; i < crashTeamRacing.length; i++) {
    switch (crashTeamRacing[i].name) {
      case "Crash Bandicoot":
        console.log(`${crashTeamRacing[i].name} is an enthusiastic Bandicoot!`);
        // Crash Bandicoot is an enthusiastic Bandicoot!
        break;
      case "Nitrous Oxide":
        console.log(`${crashTeamRacing[i].name} is the ultimate racer!`);
        // Nitrous Oxide is the ultimate racer!!!
        break;
      default:
        console.log(`${crashTeamRacing[i].name} is a great racer!!!`);
        // Dingodile is a great racer!!!
        // Neo Cortex is a great racer!!!
        // Tiny Tiger is a great racer!!!
        break;
    }
  }
}

console.log(nitrousOxide);

newPair = { firstAppearance: "Crash Team Racing" };

Object.assign(nitrousOxide, newPair);
console.log(nitrousOxide);
// newPair now a key-value pair of nitrousOxide object

console.log(Object.keys(nitrousOxide));
// ['name', 'planet', 'species', 'track', 'cartColor', 'allies',
//  'adversaries', 'firstAppearance']
console.log(Object.values(nitrousOxide));
// array of all the values

const movies2021 = [
  {
    name: "White Tiger",
    director: "Ramin Bahrani",
    candidate: true
  },
  {
    name: "The Little Things",
    director: "John Lee Hancock",
    candidate: true
  },
  {
    name: "Nomadland",
    director: "Chloe Zhao",
    candidate: false
  },
  {
    name: "Judas and the Black Messiah",
    director: "Shaka King",
    candidate: false
  },
  {
    name: "The Mauritanian",
    director: "Kevin MacDonald",
    candidate: false
  },
  {
    name: "French Exit",
    director: "Azazel Jacobs",
    candidate: false
  },
  {
    name: "Land",
    director: "Robin Wright",
    candidate: false
  },
  {
    name: "Silk Road",
    director: "Tiller Russel",
    candidate: false
  },
  {
    name: "Tom & Jerry",
    director: "Tim Story",
    candidate: true
  },
  {
    name: "Cherry",
    director: "Joe and Anthony Russo",
    candidate: true
  },
  {
    name: "Crisis",
    director: "Nicholas Jarecki",
    candidate: true
  },
  {
    name: "Moxie",
    director: "Amy Poehler",
    candidate: false
  },
  {
    name: "Boogie",
    director: "Eddie Huang",
    candidate: false
  },
  {
    name: "Zack Snyder's Justice League",
    director: "Zack Snyder",
    candidate: true
  },
  {
    name: "City of Lies",
    director: "Brad Furman",
    candidate: true
  },
  {
    name: "Godzilla vs. Kong",
    director: "Adam Wingard",
    candidate: false
  },
  {
    name: "Concrete Cowboy",
    director: "Ricky Staub",
    candidate: false
  },
  {
    name: "Voyagers",
    director: "Neil Burger",
    candidate: false
  },
  {
    name: "Mortal Kombat",
    director: "Simon McQuoid",
    candidate: false
  },
  {
    name: "Together Together",
    director: "Nikole Beckwith",
    candidate: false
  },
  {
    name: "Wrath of Man",
    director: "Guy Ritchie",
    candidate: true
  },
  {
    name: "Army of the Dead",
    director: "Zack Snyder",
    candidate: true
  },
  {
    name: "Those Who Wish Me Dead",
    director: "Taylor Sheridan",
    candidate: false
  },
  {
    name: "The Woman in the Window",
    director: "Joe Wright",
    candidate: false
  },
  {
    name: "F9",
    director: "Justin Lin",
    candidate: false
  },
  {
    name: "Black Window",
    director: "Cate Shortland",
    candidate: true
  },
  {
    name: "Snake Eyes",
    director: " Robert Schwentke",
    candidate: true
  },
  {
    name: "Old",
    director: "M. Night Shyamalan",
    candidate: false
  },
  {
    name: "Midnight in the Switchgrass",
    director: "Randall Emmett",
    candidate: false
  },
  {
    name: "Stillwater",
    director: "Thomas McCarthy",
    candidate: false
  },
  {
    name: "The Green Knight",
    director: "David Lowery",
    candidate: true
  },
  {
    name: "Suicide Squad",
    director: "James Gunn",
    candidate: false
  },
  {
    name: "Reminiscence",
    director: "Lisa Joy",
    candidate: false
  },
  {
    name: "The Protege",
    director: "Martin Campbell",
    candidate: false
  },
  {
    name: "The Night House",
    director: "David Bruckner",
    candidate: false
  },
  {
    name: "Shang Chi and the Legend of the Ten Rings",
    director: "Deston Daniel Cretton",
    candidate: false
  },
  {
    name: "Worth",
    director: "Sara Colangelo",
    candidate: true
  },
  {
    name: "Kate",
    director: "Cedric Nicolas-Troyan",
    candidate: true
  },
  {
    name: "Queenpins",
    director: "Aron Gaudet and Gita Pullapilly",
    candidate: true
  },
  {
    name: "The Card Counter",
    director: "Paul Schrader",
    candidate: true
  },
  {
    name: "Small Engine Repair",
    director: "John Pollono",
    candidate: false
  },
  {
    name: "Cry Macho",
    director: "Clint Eastwood",
    candidate: false
  },
  {
    name: "Best Sellers",
    director: "Lina Roessler",
    candidate: true
  },
  {
    name: "The Guilty",
    director: "Antoine Fuqua",
    candidate: false
  },
  {
    name: "Venom: Let There Be Carnage",
    director: "Andy Serkis",
    candidate: false
  },
  {
    name: "The Many Saints of Newark",
    director: "Alan Taylor",
    candidate: true
  },
  {
    name: "No Time to Die",
    director: "Cary Joji Fukunaga",
    candidate: false
  },
  {
    name: "The Last Duel",
    director: "Ridley Scott",
    candidate: true
  },
  {
    name: "Antlers",
    director: "Scott Cooper",
    candidate: true
  },
  {
    name: "Spencer",
    director: "Pablo Larrain",
    candidate: false
  },
  {
    name: "Power of the Dog",
    director: "Jane Campion",
    candidate: false
  },
  {
    name: "Bruised",
    director: "Halle Berry",
    candidate: true
  },
  {
    name: "King Richard",
    director: "Reinaldo Marcus Green",
    candidate: false
  },
  {
    name: "C'mon C'mon",
    director: "Mike Mills",
    candidate: true
  },
  {
    name: "House of Gucci",
    director: "Ridley Scott",
    candidate: true
  },
  {
    name: "The Humans",
    director: "Stephen Karam",
    candidate: false
  },
  {
    name: "Mixtape",
    director: "Valerie Weiss",
    candidate: true
  },
  {
    name: "Don't Look Up",
    director: "Adam McKay",
    candidate: false
  },
  {
    name: "Being the Ricardos",
    director: "Aaron Sorkin",
    candidate: false
  },
  {
    name: "Nightmare Alley",
    director: "Guillermo Del Toro",
    candidate: true
  },
  {
    name: "The Matrix Resurrections",
    director: "Lana Wachowski",
    candidate: true
  }
];

console.log(movies2021.length);
// 61

console.log(robots);

console.log(robots[0]);
// Eggplant-Head
console.log(robots[0] == "Eggplant-Head");
// true
let favorites = [];
if (robots[0] == "Eggplant-Head") {
  let i = 0;
  for (; i < movies2021.length; i++) {
    if (movies2021[i].candidate) {
      favorites.push(movies2021[i]);
    }
  }
  console.log(favorites);
}

console.log(favorites.length);
// 26

/* 


Next Round: 

1. The Little Things

2. Cherry

3. Crisis

4. Zack Snyder's Justice League

5. City of Lies

6. Army of the Dead

7. Snake Eyes

8. The Green Knight

9. Kate

10. The Card Counter

11. The Many Saints of Newark

12. The Last Duel

13. Antlers

14. Last Night in Soho

15. Bruised

16. House of Gucci

17. The Matrix Resurrections

18. Nightmare Alley



*/

const coolFilms = [
  {
    name: "The Little Things",
    id: 1
  },
  {
    name: "Cherry",
    id: 2
  },
  {
    name: "Crisis",
    id: 3
  },
  {
    name: "Zack Snyder's Justice League",
    id: 4
  },
  {
    name: "City of Lies",
    id: 5
  },
  {
    name: "Army of the Dead",
    id: 6
  },
  {
    name: "Snake Eyes",
    id: 7
  },
  {
    name: "The Green Knight",
    id: 8
  },
  {
    name: "Kate",
    id: 9
  },
  {
    name: "The Card Counter",
    id: 10
  },
  {
    name: "The Many Saints of Newark",
    id: 11
  },
  {
    name: "The Last Duel",
    id: 12
  },
  {
    name: "Antlers",
    id: 13
  },
  {
    name: "Last Night in Soho",
    id: 14
  },
  {
    name: "Bruised",
    id: 15
  },
  {
    name: "House of Gucci",
    id: 16
  },
  {
    name: "The Matrix Resurrections",
    id: 17
  },
  {
    name: "Nightmare Alley",
    id: 18
  },
  {
    name: "C'mon C'mon",
    id: 19
  }
];

let movies1 = coolFilms.map(m1 => m1.name);
console.log(movies1);
let honorableMentions = [];

function removeListItem(array, string) {
  if (!movies1.includes(string)) return "movie not found";
  let listNum = 0;
  let i = 0;
  let j = 0;
  for (; i < array.length; i++) {
    if (array[i].name == string) {
      listNum = array[i].id;
      honorableMentions.push(array[i].name);
      array.splice(i, 1);
      movies1.splice(i, 1);
    }
  }
  for (; j < array.length; j++) {
    if (array[j].id > listNum) {
      array[j].id = array[j].id - 1;
    }
  }
  return array;
}

console.log(removeListItem(coolFilms, "Antlers"));
// Antlers removed
console.log(coolFilms.length);
// 18
console.log(movies1.length);
// 18
console.log(removeListItem(coolFilms, "Crisis"));
// Crisis removed
console.log(coolFilms.length);
// 17
console.log(movies1.length);
// 17
console.log(removeListItem(coolFilms, "City of Lies"));
// City of Lies removed
console.log(coolFilms.length);
// 16
console.log(movies1.length);
// 16
console.log(removeListItem(coolFilms, "The Green Knight"));
// The Green Knight removed
console.log(coolFilms.length);
// 15
console.log(movies1.length);
// 15
console.log(removeListItem(coolFilms, "Nightmare Alley"));
// Nightmare Alley removeds
console.log(coolFilms.length);
// 14
console.log(movies1.length);
// 14
console.log(removeListItem(coolFilms, "Snake Eyes"));
// Snake Eyes removed
console.log(coolFilms.length);
// 13
console.log(movies1.length);
// 13
console.log(removeListItem(coolFilms, "C'mon C'mon"));
// C'mon C'mon removed
console.log(coolFilms.length);
// 12
console.log(movies1.length);
// 12
console.log(removeListItem(coolFilms, "House of Gucci"));
// House of Gucci removed
console.log(coolFilms.length);
// 11
console.log(movies1.length);
// 11
console.log(removeListItem(coolFilms, "The Many Saints of Newark"));
// The Many Saints of Newark removed
console.log(coolFilms.length);
// 10
console.log(movies1.length);
// 10
console.log(removeListItem(coolFilms, "The Town"));
// movie not found
console.log(honorableMentions.length);
// 9
console.log(honorableMentions);
console.log("-----------------------------------------");
console.log("----------------------------------------");
console.log("---------------------------------------");
console.log(coolFilms);

console.log("-------------------------------------------");

let sortId = array => array.sort((a, b) => (a.id > b.id ? 1 : -1));

// function shiftElement(array, string, num) {
//   // edge cases
//   if (num > 10 || num < 1) return "number must be between 1 and 10";
//   if (!movies1.includes(string)) return "film not found";
//   //...........................................................
//   let film1 = array.map(m1 => m1.name);
//   // array of just the names

//   let index = film1.indexOf(string);

//   array[index].id = num;
//   // setting array element its new id

//   let i = 0;
//   for (; i < array.length; i++) {
//     if (i < index && array[i].name != string) {
//       array[i].id = array[i].id + 1;
//     }
//     if (num > i && array[i].name != string) {
//       array[i].id = array[i].id - 1;
//     }
//   }
//   array = sortId(array);
//   return array;
// }

// console.log(shiftElement(coolFilms, "Cherry", 7));

/* 

1. A
2. B
3. C
4. D
5. E

Move A to 4

num is 4, index is 0
num > index

every element whose index is less than num needs to move down
one spot, so their id needs to be subtracted by 1


1. A
2. B
3. C
4. D
5. E

Move D to 1

So we would have...

num is 1, index is 3

1. D
1. A
2. B
3. C
4.
5. E

if i is less than index and the element name does not equal the input string

increase the id by 1

========================================================================


let test24 [
    {
        name: A,
        id: 1
    },
    {
        name: B,
        id: 2
    },
    {
        name: C,
        id: 3
    },
    {
        name: D,
        id: 4
    }
    
]

- let's say we wanted to D to have the id of 1

- A, B, C's ids will all have to icrement by 1

- Nothing needs to be done to E

- A's current index is 3, and the id will be 1

- start point for i needs to be the index of where the current holder
  of the id is

- the current holder of 1 is at index 0

-   i = id - 1







*/

console.log("---------------------------------------------");

const test15 = [0, 1, 2, 3, 4, 5];

let spliceNum = (array, num) => array.splice(num, 1);

console.log(spliceNum(test15, 0));

console.log(test15);
// [1, 2, 3, 4, 5]
console.log(spliceNum(test15, 0));

console.log(test15);
// [2, 3, 4, 5]

const test16 = [1, 2, 3, 4, 5];

console.log(spliceNum(test16, 0));

console.log("--------------------------------------------");
console.log("--------------------------------------");

function shiftElement2(array, string, num) {
  let names = array.map(n1 => n1.name);
  let index = names.indexOf(string);
  // original id for "C" was 3
  array[index].id = num;
  // new id for "C" is 1

  // elements between test24[0] and test24[2] need to change
  // element test24[3] does not need to change

  let i = num - 1;
  // index for where id is being replaced
  if (index > num) {
    for (; i <= index; i++) {
      if (array[i].name != string) {
        array[i].id = array[i].id + 1;
      }
    }
  }
  if (num > index) {
    i = index;
    for (; i < num; i++) {
      if (array[i].name != string) {
        array[i].id = array[i].id - 1;
      }
    }
  }
  if (index == num) {
    array[index - 1].id = array[index - 1].id + 1;
  }
  array = sortId(array);
  console.log(array);
}

let test24 = [
  {
    name: "A",
    id: 1
  },
  {
    name: "B",
    id: 2
  },
  {
    name: "C",
    id: 3
  },
  {
    name: "D",
    id: 4
  }
];

shiftElement2(test24, "C", 1);
// i = 0
// index = 2
// index > i
// worked
shiftElement2(test24, "B", 1);
// i = 0
// index = 2
// index > i
// worked
shiftElement2(test24, "C", 4);
// worked
shiftElement2(test24, "A", 3);
// worked
shiftElement2(test24, "A", 1);
// worked
console.log(coolFilms);

shiftElement2(coolFilms, "Kate", 1);
// worked
shiftElement2(coolFilms, "Army of the Dead", 10);
// worked
shiftElement2(coolFilms, "Zack Snyder's Justice League", 2);
// worked
shiftElement2(coolFilms, "Cherry", 3);
// worked
shiftElement2(coolFilms, "Bruised", 9);
// worked
shiftElement2(coolFilms, "The Matrix Resurrections", 7);
// worked

console.log(test24);

honorableMentions.push("The White Tiger");

console.log(honorableMentions);

/* 

current array is [
    {
        name: "B",
        id: 1
    },
    {
        name: "C",
        id: 2
    },
    {
        name: "A",
        id: 3
    },
    {
        name: "D",
        id: 4
    }

]

let's day we want to change the id of "C" from 2 to 4

"A" and "D"'s ids will need to subtract by 1

"B" is out of scope and doesn't need to be included

"C"'s index is 1 and the target id is 4

we'll iterate from the "C" index to the index of the id

the other elements iterated over will subtract their id by 1

*/

const jonnJonzz = {
  name: "J'onn J'onzz",
  alias: "Martian Manhunter",
  species: "Martian",
  homePlanet: "Mars",
  team: "The Justice League",
  abilities: {
    ability1: "Telepathy",
    ability2: "Transparency",
    ability3: "Shapeshifter",
    ability4: "Flight"
  }
};

console.log(jonnJonzz.name);
// J'onn J'onzz
console.log(jonnJonzz.alias);
// Martian Manhunter
console.log(jonnJonzz.species);
// Martian
console.log(jonnJonzz.homePlanet);
// Mars
console.log(jonnJonzz.team);
// The Justice League
console.log(jonnJonzz.abilities.ability1);
// Telepathy
console.log(jonnJonzz.abilities.ability2);
// Transparency
console.log(jonnJonzz.abilities.ability3);
// Shapeshifter
console.log(jonnJonzz.abilities.ability4);
// Flight

let {
  name: jonnJonzzName,
  alias: martianManhunter,
  species: martian,
  homePlanet: mars,
  team: jL,
  abilities: { ability1, ability2, ability3, ability4 }
} = jonnJonzz;

console.log(jonnJonzzName);
// J'onn J'onzz
console.log(martianManhunter);
// Martian Manhunter
console.log(martian);
// Martian
console.log(mars);
// Mars
console.log(jL);
// The Justice League
console.log(ability1);
// Telepathy
console.log(ability2);
// Transparency
console.log(ability3);
// Shapeshifter
console.log(ability4);
// Flight

const greenLanternCorps = [
  {
    name: "John Stewart",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Salaak",
    homePlanet: "Slyggia",
    base: "Oa",
    sector: "Space Sector 1418"
  },
  {
    name: "Hal Jordan",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Isamot Kol",
    homePlanet: "Thanagar",
    base: "Oa",
    sector: "Space Sector 2682"
  },
  {
    name: "Chaselon",
    homePlanet: "Barrio III",
    base: "Oa",
    sector: "Space Sector 1416"
  },
  {
    name: "G'Nort Esplanade G'neeshmacher",
    homePlanet: "G'Newt",
    base: "Oa",
    sector: "Space Sector 2112"
  },
  {
    name: "Jessica Cruz",
    homePlanet: "Earth",
    base: "Oa",
    sector: " Space Sector 2814"
  },
  {
    name: "Kilowog",
    homePlanet: "Bolovax",
    base: "Oa",
    sector: "Space Sector 0674"
  },
  {
    name: "Tomar-Re",
    homePlanet: "Xudar",
    base: "Oa",
    sector: "Space Sector 2813"
  },
  {
    name: "Abin Sur",
    homePlanet: "Ungara",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Kyle Rayner",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Guy Gardner",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Simon Baz",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Mogo",
    homePlanet: "Mogo",
    base: "Oa",
    sector: "Space Sector 2261"
  },
  {
    name: "Vath Sarn",
    homePlanet: "Rann",
    base: "Oa",
    sector: "Space Sector 2682"
  },
  {
    name: "Xax",
    homePlanet: "Xaos",
    base: "Oa",
    sector: "Space Sector 3500"
  },
  {
    name: "Jade",
    homePlanet: "Earth",
    base: "Oa",
    sector: "Space Sector 2814"
  },
  {
    name: "Boodika",
    homePlanet: "Bellatrix",
    base: "Oa",
    sector: "Space Sector 1414"
  },
  {
    name: "Green Man",
    homePlanet: "Uxor",
    base: "Oa",
    sector: "Space Sector 3009"
  },
  {
    name: "Kraken",
    homePlanet: "Apokolips",
    base: "Oa",
    sector: "Space Sector 0038"
  },
  {
    name: "Varix",
    homePlanet: "Naktos",
    base: "Oa",
    sector: "Space Sector 0069"
  }
];

console.log(greenLanternCorps.length);
// 21

console.log(greenLanternCorps);

console.log(greenLanternCorps[3].name == "Isamot Kol");
// true
console.log(greenLanternCorps[3].name);
// Isamot Kol
console.log("---------------------------------");
console.log("-------------------------------");

if (greenLanternCorps[3].name == "Isamot Kol") {
  let i = 0;
  for (; i < greenLanternCorps.length; i++) {
    if (greenLanternCorps[i].homePlanet != "Earth") {
      console.log(greenLanternCorps[i].name);
      // Salaak
      // Isamot Kol
      // Chaselon
      // G'Nort Esplanade G'neeshmacher
      // Kilowog
      // Tomar-Re
      // Abin Sur
      // Mogo
      // Vath Sarn
      // Xax
      // Boodika
      // Green Man
      // Kraken
      // Varix
    }
  }
  console.log("-------------------------------------");
  console.log("-----------------------------------");
  let j = greenLanternCorps.length - 1;
  while (j >= 0) {
    if (greenLanternCorps[j].homePlanet == "Earth") {
      console.log(greenLanternCorps[j].name);
      // Jade
      // Simon Baz
      // Guy Gardner
      // Kyle Rayner
      // Jessica Cruz
      // Hal Jordan
      // John Stewart
    }
    j--;
  }
}

console.log("-----------------------------------------");
console.log("---------------------------------------");

const croixJames = "Croix James";
console.log(croixJames);
// Croix James
console.log(croixJames == "Croix James");
// true
const risingDough = "Rising Dough";

const rogueTrooper = "Rogue Trooper";

const bandicoot = "Bandicoot";

function switchTwoWords(string) {
  if (!string.includes(" ")) {
    console.log("string must have a space");
  }
  let concatString = "";
  let i = 0;
  for (; i < string.length; i++) {
    if (string.charAt(i) == " ") {
      break;
    } else {
      concatString = concatString.concat(string.charAt(i));

      // string = string.replace(string.charAt(i), "");
    }
  }
  string = string.replace(concatString, "");
  string = string.replace(string.charAt(0), "");
  let rString = `${string} ${concatString}`;
  console.log(rString);
}

switchTwoWords(croixJames);
// James Croix
switchTwoWords(risingDough);
// Dough Rising
switchTwoWords(rogueTrooper);
// Trooper Rogue
switchTwoWords(bandicoot);

console.log(risingDough);
// Rsing Dough
console.log(risingDough == "Rising Dough");
// true
if (risingDough == "Rising Dough") {
  let lanterns1 = greenLanternCorps
    .filter(g2 => g2.homePlanet != "Earth")
    .map(g3 => g3.name);
  console.log(lanterns1);
  /* 
  
  ['Salaak', 'Isamot Kol', 'Chaselon', "G'Nort Esplanade 
  G'neeshmacher", 'Tomar-Re', 'Abin-Sur', 'Mogo', 'Vath Sarn',
  'Xax', 'Boodika', 'Green Man', 'Kraken', 'Varix']
  
  */
  let lanterns2 = greenLanternCorps
    .filter(g4 => g4.homePlanet == "Earth")
    .map(g5 => g5.name);
  console.log(lanterns2);
  /* 
  
  ['John Stewart', 'Hal Jordan', 'Jessica Cruz', 'Kyle Rayner',
   'Guy Gardner', 'Simon Baz', 'Jade']
  
  */
}

console.log(Object.keys(jonnJonzz));
// ['name', 'alias', 'species', 'homePlanet', 'team', 'abilities']
console.log(Object.values(jonnJonzz));
//
console.log(Object.values(jonnJonzz)[0]);
// J'onn J'onzz
console.log(Object.values(jonnJonzz)[1]);
// Martian Manhunter
console.log(Object.values(jonnJonzz)[2]);
// Martian
console.log(Object.values(jonnJonzz)[3]);
// Mars
console.log(Object.values(jonnJonzz)[4]);
// The Justice League
console.log(Object.values(jonnJonzz)[0] == "J'onn J'onzz");
// true
if (Object.values(jonnJonzz)[0] == "J'onn J'onzz") {
  let gLantern1 = greenLanternCorps
    .filter(g1 => g1.homePlanet == "Earth")
    .map(g2 => g2.name);

  gLantern1.forEach(function (glantern2) {
    console.log(glantern2);
    // John Stewart
    // Hal Jordan
    // Jessica Cruz
    // Kyle Rayner
    // Guy Gardner
    // Simon Baz
    // Jade
  });
}

console.log(risingDough);
// Rising Dough
console.log(typeof risingDough == "string");
// true
if (typeof risingDough == "string") {
  greenLanternCorps.forEach(g1 => console.log(g1.name));
  // John Stewart
  // Salaak
  // Hal Jordan
  // Isamot Kol
  // Chaselon
  // G'Nort Esplanade G'neeshmacher
  // Jessica Cruz
  // Kilowog
  // Tomar-Re
  // Abin Sur
  // Kyle Rayner
  // Guy Gardner
  // Simon Baz
  // Mogo
  // Vath Sarn
  // Xax
  // Jade
  // Boodika
  // Green Man
  // Kraken
  // Varix
  let lantern1 = greenLanternCorps
    .filter(g1 => g1.name == "Tomar-Re")
    .map(g2 => g2.name);
  console.log(lantern1);
  // ['Tomar-Re']
}

const captainAtom = "Captain Atom";
console.log(captainAtom);
// Captain Atom
console.log(captainAtom.length);
// 12
console.log(captainAtom.substr(8, 11));
// Atom
console.log(captainAtom.includes("Captain"));
// true
console.log(captainAtom.includes("captain"));
// false
console.log(typeof (typeof captainAtom == "boolean") == "boolean");
// true
console.log(captainAtom.indexOf("Atom"));
// 8
console.log(captainAtom.indexOf("tom"));
// 9
let nine = 9;
console.log(nine);
// 9
console.log(nine.toString());
// 9 but as a string instead of number
console.log(459 % 10);
// 9
console.log(parseInt("5"));
// 5 as a number data type

function reverseNum(num) {
  num = num.toString();
  let remainder = 0;
  let rNum = "";
  let i = num.length - 1;
  for (; i >= 0; i--) {
    rNum = rNum.concat(num.charAt(i));
  }
  rNum = parseInt(rNum);
  return rNum;
}

console.log(reverseNum(984));
// 489
console.log(reverseNum(456));
// 654
console.log(reverseNum(650));
// 56
console.log(36 % Math.sqrt(36) == 0);
// true
console.log(39 % Math.sqrt(39) == 0);
// false
console.log(39 % Math.sqrt(39));
// 1.53
console.log(Math.sqrt(39));
// 6.24
console.log(Math.sqrt(28));
// 5.29
console.log(risingDough);
// Rising Dough
const neoCortex = "Neo Cortex";
switchTwoWords(neoCortex);
// Cortex Neo
const masterChief = "Master Chief";
switchTwoWords(masterChief);
// Chief Master

const pizzaWarriors = [
  {
    name: "Rising Dough",
    species: "Robot: Window Cleanse 10.5"
  },
  {
    name: "Brooke Nevins",
    species: "Human"
  },
  {
    name: "Bodhi",
    species: "Dachshund"
  },
  {
    name: "Timber-Tron",
    species: "Robot: Timber_Io 34"
  },
  {
    name: "Sal Campana",
    species: "Human"
  },
  {
    name: "Chipper",
    species: "Dachshund"
  },
  {
    name: "Stokes Mitchell",
    species: "Human"
  },
  {
    name: "Croix James",
    species: "Pickerel"
  },
  {
    name: "Laila Blanco",
    species: "Human"
  },
  {
    name: "Beezer",
    species: "Dachshund"
  },
  {
    name: "Dex Garrity",
    species: "Robot: Robo-Welder 4000"
  },
  {
    name: "Brayden Saskatoon",
    species: "Black Bear"
  }
];

console.log(pizzaWarriors.length);
// 12
console.log(pizzaWarriors[11].name);
// Brayden Saskatoon
console.log(pizzaWarriors[11].species);
// Black Bear
console.log(pizzaWarriors[11].name == "Brayden Saskatoon");
// true

if (pizzaWarriors[11].name == "Brayden Saskatoon") {
  let i = 0;
  for (; i < pizzaWarriors.length; i++) {
    switch (pizzaWarriors[i].name) {
      case "Brayden Saskatoon":
        console.log(`${pizzaWarriors[i].name} is a fun dude!`);
        // Brayden Saskatoon is a fun dude!
        break;
      case "Beezer":
        console.log(`${pizzaWarriors[i].name} loves to run
              in the country!`);
        // Beezer loves to run in the country!
        break;
      case "Bodhi":
        console.log(`${pizzaWarriors[i].name} loves to chase
              squirrels!`);
        // Bodhi loves to chase squirrels!
        break;
      case "Chipper":
        console.log(`${pizzaWarriors[i].name} can be really
              stubborn but is a great hunter!`);
        // Chipper can be really stubborn but is a great hunter!
        break;
      case "Rising Dough":
        console.log(`${pizzaWarriors[i].name} is a pizza loving
              robot!`);
        // Rising Dough is a pizza loving robot!
        break;
      case "Croix James":
        console.log(`${pizzaWarriors[i].name} is the CEO of
              Pickerel Cola!`);
        // Croix James is the CEO of Pickerel Cola!
        break;
      case "Dex Garrity":
        console.log(`${pizzaWarriors[i].name} can build or fix
              anything!`);
        // Dex Garrity can build or fix anything!
        break;
      default:
        console.log(`${pizzaWarriors[i].name} is a character in
              Pizza Warriors!`);
        // Brooke Nevins is a character in Pizza Warriors
        // Timber-Tron is a character in Pizza Warriors
        // Sal Campana is a character in Pizza Warriors
        // Stokes Mitchell is a character in Pizza Warriors
        // Laila Blanco is a character in Pizza Warriors
        break;
    }
  }
}

console.log(parseInt("2.4"));
// 2
console.log(parseFloat("2.4"));
// 2.4
console.log(2.5 % 2);
// 0.5
