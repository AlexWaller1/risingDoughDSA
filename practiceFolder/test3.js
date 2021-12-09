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
