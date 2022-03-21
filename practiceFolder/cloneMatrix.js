// cloneMatrix.js

console.log("Hello Oa");

const risingDough = {};

risingDough["name"] = "Rising Dough";

console.log(risingDough.name);
// Rising Dough

risingDough["robotType"] = "Window Cleanse 10.5";

console.log(risingDough.robotType);
// Window Cleanse

risingDough["favoriteFood"] = "Pizza";

console.log(risingDough.favoriteFood);
// Pizza

risingDough["favoriteSoda"] = "Pickerel Cola";

console.log(risingDough.favoriteSoda);
// Pickerel Cola

console.log(risingDough);
// {name: 'Rising Dough', robotType: 'Window Cleanse 10.5',
//  favoriteFood: 'Pizza', favoriteSoda: 'Pickerel Cola'}

console.log(Object.keys(risingDough));
// ['name', 'robotType', 'favoriteFood', 'favoriteSoda']
console.log(Object.values(risingDough));
// ['Rising Dough', 'Window Cleanse 10.5', 'Pizza', 'Pickerel Cola']

risingDough["friends"] = [
  "Brooke Nevins",
  "Brayden Saskatoon",
  "Dex Garrity",
  "Sal Campana"
];

console.log(risingDough.friends[0]);
// Brooke Nevins
console.log(risingDough.friends[1]);
// Brayden Saskatoon
console.log(risingDough.friends[2]);
// Dex Garrity
console.log(risingDough.friends[3]);
// Sal Campana
console.log("----------------------------------------");
console.log("--------------------------------------------");

class Robot {
  constructor(name, model, paintColor) {
    this.name = name;
    this.model = model;
    this.paintColor = paintColor;
  }

  changeName(newName) {
    if (typeof newName == "string") {
      this.name = newName;
    } else return "Name must be a string";
  }

  changeModel(newModel) {
    if (typeof newModel == "string") {
      this.model = newModel;
    } else return "New Model Name must be a string";
  }

  changePaintColor(newColor) {
    if (typeof newColor == "string") {
      this.paintColor = newColor;
    }
  }
}

const mellonTech = new Robot("Mellon-Tech", "Modified-Air-Io", "Yellow");

console.log(mellonTech.name);
// Mellon-Tech
console.log(mellonTech.model);
// Moified-Air-Io
console.log(mellonTech.paintColor);
// Yellow
mellonTech.changePaintColor("Yellow and Green");
console.log(mellonTech.paintColor);
// Yellow and Green
mellonTech.changeModel("Air-Io-29");
console.log(mellonTech.model);
// Air-Io-29

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let roboJSON = JSON.stringify(robots);

localStorage.setItem("robots-list", roboJSON);

console.log(localStorage);

console.log(localStorage.getItem("robots-list"));
// ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"]
// in JSON

let roboData1 = localStorage.getItem("robots-list");

let roboData2 = JSON.parse(roboData1);

console.log(roboData2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(roboData2[0]);
// Hank-44
console.log(roboData2[1]);
// Warren-21
console.log(roboData2[2]);
// Mellon-Tech
console.log(roboData2[3]);
// Eggplant-Head

console.log(robots == roboData2);
// false
console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head'];
console.log(roboData2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head'];
console.log(robots[2] == roboData2[2]);
// true
console.log("----------------------------------------------");
console.log("----------------------------------------");

const spiderVerse = {};

spiderVerse[0] = { name: "Peter Parker", alias: "Spider-Man" };

spiderVerse[1] = { name: "Ben Reilly", alias: "Scarlett Spider" };

console.log(spiderVerse);
/* 

{
    0: {name: "Peter Parker", alias: "Spider-Man"}
    1: {name: "Ben Reilly", alias: "Scarlet Spider"}
}

*/

console.log(spiderVerse[0]);
// {name: 'Peter Parker', alias: 'Spider-Man'}
console.log(spiderVerse[1]);
// {name: 'Ben Reilly', alias: 'Scarlet Spider'}
spiderVerse[2] = { name: "Logan", alias: "Wolverine" };
console.log(spiderVerse);
/* 

0: {name: 'Peter Parker', alias: 'Spider-Man'}
1: {name: 'Ben Reilly', alias: 'Scarlett Spider'}
2: {name: 'Logan', alias: 'Wolverine'}

*/
console.log(spiderVerse[1].alias);
// Scarlett Spider
delete spiderVerse[2];
console.log(spiderVerse);
/* 

0: {name: 'Peter Parker', alias: 'Spider-Man'}
1: {name: 'Ben Reilly', alias: 'Scarlett Spider'}

*/
console.log("-----------------------------------------------");
console.log("---------------------------------------------");

class ArrayMaker {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  push(element) {
    this.array[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.array[this.length - 1];
    this.length--;
  }
}

const batClones = new ArrayMaker();

console.log(batClones.length);
// 0
console.log(batClones.array);
// {}
batClones.push({ name: "Bruce Wayne", alias: "Batman Beyond" });
console.log(batClones.array);
/* 

{
    0: {name: 'Bruce Wayne', alias: 'Batman Beyond'}
}

*/
console.log(batClones.length);
// 1
console.log(batClones.array[0]);
// {name: 'Bruce Wayne', alias: 'Batman Beyond'}
console.log(batClones.array[0].name);
// Bruce Wayne
batClones.push({ name: "Jean-Paul Valley", alias: "Batman" });
console.log(batClones.length);
// 2
batClones.push({ name: "Terry McGinnis", alias: "Batman Beyond" });

batClones.push({ name: "Oswald Cobblepot", alias: "The Penguin" });

console.log(batClones.length);
// 4
console.log(batClones);
batClones.pop();
console.log(batClones.length);
// 3
console.log(batClones);

console.log("----------------------------------------");
console.log("-------------------------------------------");

let nums = {};

nums[0] = 0;

console.log(nums[0]);
nums[1] = { name: "zero" };
console.log(nums[1].name);
// zero
console.log(parseInt("Batman"));
// NaN
console.log("----------------------------------------------------");
console.log("--------------------------");

const hammerHead = {};

console.log(hammerHead);

hammerHead["name"] = "Hammerhead";
hammerHead["species"] = "Hammerhead Shark";
hammerHead["occupation"] = "Pickerel Cola Space Truck Driver";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["friends"] = ["Taylor", "Harvey", "Wibaux"];
hammerHead["cosmicGuides"] = ["The Geometry Man", "The Cosmic Trout"];
hammerHead["hasCoolJacket"] = true;
hammerHead["hasPickerelCola"] = true;
hammerHead["hasCoolExoSkeleton"] = false;
hammerHead["hasCoolHat"] = false;
hammerHead["hasCoolTail"] = true;

console.log(hammerHead);
console.log(Object.keys(hammerHead));
console.log(Object.values(hammerHead));
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.hasPickerelCola);
// true

const wibaux2 = {};

console.log(wibaux2);
// {}

wibaux2["name"] = "Wibaux";
wibaux2["species"] = "Whitefish";
wibaux2["occupation"] = "River Guide";
wibaux2["homePlanet"] = "Hardin-37";
wibaux2["friends"] = ["Harvey", "Taylor", "Hammerhead"];
wibaux2["cosmicGuides"] = ["The Cosmic Trout", "The Geometry Man"];
wibaux2["hasCoolJacket"] = false;
wibaux2["hasPickerelCola"] = true;
wibaux2["hasCoolExoSkeleton"] = true;
wibaux2["hasCoolHat"] = false;
wibaux2["hasCoolTail"] = true;

const harvey2 = {};

harvey2["name"] = "Harvey";
harvey2["species"] = "Beaver";
harvey2["occupation"] = "Dam Builder";
harvey2["homePlanet"] = "Hardin-37";
harvey2["friends"] = ["Wibaux", "Hammerhead", "Taylor"];
harvey2["cosmicGuides"] = ["The Cosmic Trout", "The Geometry Man"];
harvey2["hasCoolJacket"] = false;
harvey2["hasPickerelCola"] = true;
harvey2["hasCoolExoSkeleton"] = true;
harvey2["hasCoolHat"] = false;
harvey2["hasCoolTail"] = true;

const taylor2 = {};

taylor2["name"] = "Taylor";
taylor2["species"] = "Albatross";
taylor2["occupation"] = "Pickerel Cola Space Truck Driver";
taylor2["homePlanet"] = "Mariner Mists";
taylor2["friends"] = ["Hammerhead", "Wibaux", "Harvey"];
taylor2["cosmicGuides"] = ["The Geometry Man", "The Cosmic Trout"];
taylor2["hasCoolJacket"] = false;
taylor2["hasPickerelCola"] = true;
taylor2["hasCoolExoSkeleton"] = false;
taylor2["hasCoolHat"] = true;
taylor2["hasCoolTail"] = false;

const cosmicShark = [];

cosmicShark.push(hammerHead);
cosmicShark.push(wibaux2);
cosmicShark.push(harvey2);
cosmicShark.push(taylor2);

console.log(cosmicShark[1].name);
// Wibaux
console.log(cosmicShark[1].name == "Wibaux");
// true

if (cosmicShark[1].name == "Wibaux") {
  let shark1 = cosmicShark
    .filter(s1 => s1.hasCoolJacket == true)
    .map(s2 => s2.name);
  console.log(shark1);
  // ['Hammerhead']
  let shark2 = cosmicShark
    .filter(s1 => s1.hasPickerelCola == true)
    .map(s2 => s2.name);
  console.log(shark2);
  // ['Hammerhead', 'Wibaux', 'Harvey', 'Taylor']
  cosmicShark.forEach(s1 => console.log(s1.cosmicGuides[0]));
  // The Geometry Man
  // The Cosmic Trout
  // The Cosmic Trout
  // The Geometry Man
}

let productNums = [
  {
    num: 1,
    word: "one"
  },
  {
    num: 2,
    word: "two"
  }
];

let json1 = JSON.stringify(productNums);

console.log(json1);
// in JSON: [{"num":1,"word":"one"},{"num":2,"word":"two"}]
let json2 = JSON.parse(json1);
console.log(json2);
// back to being a JavaScript array

class roboMold {
  constructor(name, model, paintColor) {
    this.name = name;
    this.model = model;
    this.paintColor = paintColor;
    this.robots = {};
    this.length = 0;
  }

  greetings() {
    return `Greetings, ${this.name}!`;
  }
}

const hank44 = new roboMold("Hank-44", "Brew-Tron-4400", "Cool Silver");

console.log(hank44.greetings());
// Greetings, Hank-44
console.log(hank44.name);
// Hank-44
console.log(hank44.model);
// Brew-Tron-4400
console.log(hank44.paintColor);
// Cool Silver

const axelOtter = {};

axelOtter["name"] = "Axel";
axelOtter["species"] = "Otter";
axelOtter["homeTown"] = "St. Xavier";
axelOtter["homeState"] = "Montana";
axelOtter["friends"] = ["Marek", "Radek", "Columbus", "Ace"];
axelOtter["test"] = "test";

console.log(axelOtter);

delete axelOtter["test"];

console.log(axelOtter);
// axelOtter no longer has the "test" property
console.log(mellonTech);

const mellonTech2 = "Mellon-Tech";

console.log(mellonTech2.substr(0, 6));
// Mellon

function subString(string, index1, index2) {
  if (typeof string != "string") return "first param must be string data type";

  if (index1 > index2) return "first index must be less than second index";

  let rString = "";

  for (; index1 < index2; index1++) {
    rString = rString.concat(string.charAt(index1));
  }
  return rString;
}

console.log(subString(mellonTech2, 0, 6));
// Mellon
console.log(subString(45, 0, 6));
// first param must be string data type
console.log("D-Bob", 5, 4);
// D-Bob 5 4
console.log(subString("D-Bob", 6, 0));
// first index must be less than the second index

let mellonTech3 = "Mellon-Tech";

mellonTech3 = mellonTech3.split("");

console.log(mellonTech3);
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
mellonTech3 = mellonTech3.join("");

console.log(mellonTech3);
// Mellon-Tech
mellonTech3 = mellonTech3.split("-");
console.log(mellonTech3);
// ['Mellon', 'Tech']
mellonTech3 = mellonTech3.join("-");
console.log(mellonTech3);
// Mellon-Tech
mellonTech3 = mellonTech3.split("e");
console.log(mellonTech3);
// ['M', 'llon-T', 'ch']

function dotSplit(string, splitBy) {
  if (splitBy == "") {
    let j = 0;
    let rArray2 = [];
    for (; j < string.length; j++) {
      rArray2.push(string.charAt(j));
    }
    return rArray2;
  }

  let rString = "";
  let rArray = [];
  let i = 0;

  for (; i < string.length; i++) {
    if (string.charAt(i) != splitBy) {
      rString = rString.concat(string.charAt(i));
    }
    if (string.charAt(i) == splitBy) {
      rArray.push(rString);
      rString = "";
    }
    if (i == string.length - 1) {
      rArray.push(rString);
    }
  }
  return rArray;
}

console.log(dotSplit("Mellon-Tech", ""));
// ['M', 'e', 'l', 'l', 'o', 'n', '-', 'T', 'e', 'c', 'h']
console.log(dotSplit("Mellon-Tech", "-"));
// ['Mellon', 'Tech']
console.log(dotSplit("Mellon-Tech", "e"));
// ['M', 'llon-T', 'ch']
let mellonTech4 = dotSplit("Mellon-Tech", "e");

console.log(mellonTech4);
// ['M', 'llon-T', 'ch']
mellonTech4 = mellonTech4.join("e");
console.log(mellonTech4);
// Mellon-Tech

function dotJoin(array, joinBy) {
  if (joinBy == "") {
    let rString2 = "";
    let j = 0;
    for (; j < array.length; j++) {
      rString2 = rString2.concat(array[j]);
    }
    return rString2;
  }
  //..................................................
  let rString = "";
  let i = 0;

  for (; i < array.length; i++) {
    if (i == array.length - 1) {
      rString = rString.concat(array[i]);
    } else {
      rString = rString.concat(array[i]);
      rString = rString.concat(joinBy);
    }
  }
  return rString;
}

const eggPlantHead = "Eggplant-Head";

let eggPlantHead2 = dotSplit(eggPlantHead, "");

console.log(eggPlantHead2);
// ['E', 'g', 'g', 'p', 'l', 'a', 'n', 't', '-', 'H', 'e', 'a', 'd']

console.log(dotJoin(eggPlantHead2, ""));
// Eggplant-Head

let mellonTech9 = "Mellon-Tech";

let mellonTech14 = dotSplit(mellonTech9, "e");
console.log(mellonTech14);
// ['M', 'llon-T', 'ch']
console.log(dotJoin(mellonTech14, "e"));
// Mellon-Tech

console.log(1 === "1");
// false
console.log(3 === 3);
// true
console.log(3 == "3");
// true
console.log(parseFloat("3.54"));
// 3.54
