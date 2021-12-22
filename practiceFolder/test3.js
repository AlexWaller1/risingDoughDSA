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
