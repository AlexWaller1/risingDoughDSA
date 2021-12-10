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
