console.log("Hello Oa");

const spiderVerse = [];

class SpiderClone {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }

  spiderVerseNew() {
    let newPair = { name: this.name, alias: this.alias };
    spiderVerse.push(newPair);
    console.log(spiderVerse);
  }

  greetings() {
    console.log(`Welcome to the Spiderverse, ${this.alias}!`);
  }
}

let spiderDR = new SpiderClone("Peni Parker", "SP//dr:");

spiderDR.spiderVerseNew();
// [{name: 'Peni Parker', alias: 'SP//dr:'}]
spiderDR.greetings();
// Welcome to the Spiderverse, SP//dr:!

let spiderManNoir = new SpiderClone("Peter Parker", "Spider-Man Noir");

spiderManNoir.spiderVerseNew();
// updated array
spiderManNoir.greetings();
// Welcome to the Spiderverse, Spider-Man Noir!

let scarletSpider = new SpiderClone("Ben Reilly", "Scarlet Spider");

scarletSpider.spiderVerseNew();
// updated array
scarletSpider.greetings();
// Welcome to the Spiderverse, Scarlet Spider!

console.log("---------------------------------------");
console.log("--------------------------------------------");

let nums = { name: "one", num: 1 };

let newPair = { negative: -1 };

Object.assign(nums, newPair);

console.log(nums);
// {name: "one", num: 1, negative: -1}

class OryxClone {
  constructor(name) {
    this.name = name;
    this.oryx = { name: this.name };
  }
  greetings() {
    console.log(`Welcome to the World, ${this.name}!`);
  }

  qualityAdder(key, value) {
    let newPair = { [key]: value };
    Object.assign(this.oryx, newPair);
    console.log(this.oryx);
  }
}

const thierry = new OryxClone("Thierry");

thierry.greetings();
// Welcome to the World, Thierry!
thierry.qualityAdder("country", "France");
// {name: 'Thierry', country: 'France'}
console.log(thierry.oryx.name);
// Thierry
console.log(thierry.oryx.country);
// France
thierry.qualityAdder("friends", ["Laurent", "Antoine"]);
// {name: 'Thierry', country: 'France', friends: Array(2)}
console.log(thierry.oryx.friends[0]);
// Laurent
console.log(thierry.oryx.friends[1]);
// Antoine

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

  includes(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.array[i] == element) {
        return true;
      }
    }
    return false;
  }

  indexOf(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.array[i] == element) {
        return i;
      }
    }
    return -1;
  }

  reverse() {
    let i = 0;
    let j = this.length - 1;
    let temp = 0;
    for (; i < j; i++, j--) {
      temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
    }
    return this.array;
  }

  slice(index1, index2) {
    let newArray = new ArrayMaker();
    let i = 0;
    for (; index1 < index2; index1++) {
      newArray.push(this.array[index1]);
    }
    return newArray;
  }
}

const robots = new ArrayMaker();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.array);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.length);
// 4
console.log(robots.array[0]);
// Hank-44
console.log(robots.array[1]);
// Warren-21
console.log(robots.array[2]);
// Mellon-Tech
console.log(robots.array[3]);
// Eggplant-Head

const robots2 = {};
robots2[0] = "Hank-44";
robots2[1] = "Warren-21";
robots2[2] = "Mellon-Tech";
robots2[3] = "Eggplant-Head";

console.log(robots2);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots2[0]);
// Hank-44
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("Bender"));
// false
console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.reverse());
// {0: 'Eggplant-Head', 1: 'Mellon-Tech', 2: 'Warren-21', 3: 'Hank-44'}
console.log(robots.reverse());
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}
console.log(robots.slice(0, 2));
// {0: 'Hank-44', 1: 'Warren-21'}
console.log(robots.slice(0, 3));
let roboClones1 = robots.slice(0, 3);

console.log(roboClones1);

console.log(roboClones1.array);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech'}
console.log(roboClones1.length);
// 3
console.log("-----------------------------------------------");
console.log("----------------------------------------------");

const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  " ",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  ";",
  ":",
  "?",
  "/",
  "<",
  ">",
  ".",
  "~",
  "`"
];

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86
];

console.log(numbers.length);
// 86

let string1 = "";
string1 = string1.concat(86);
console.log(string1);
string1 = string1.concat(99);
console.log(string1);
// 8699

class HashTable {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(element) {
    let rString = "";
    let i = 0;
    for (; i < element.length; i++) {
      let index = chars.indexOf(element.charAt(i));
      let num = numbers[index];
      rString = rString.concat(num);
    }
    let rNum = parseInt(rString);
    return rNum;
  }

  set(key, value) {
    let index = this.hash(key);
    this.container[index] = value;
    this.size++;
  }

  get(key) {
    let index = this.hash(key);
    return this.container[index];
  }

  delete(key) {
    let index = this.hash(key);
    delete this.container[index];
    this.size--;
  }
}

let spiderVerse5 = new HashTable();

console.log(spiderVerse5.hash("test"));
// 20511920
console.log(spiderVerse5.hash("test"));
// 20511920
console.log(spiderVerse5.hash("Axel"));
// 2724512
console.log(spiderVerse5.hash("Axel"));
// 2724512
const hammerHead5 = new HashTable();

hammerHead5.set("name", "Hammerhead");
hammerHead5.set("species", "Hammerhead Shark");
hammerHead5.set("homePlanet", "Venice Sands 5");
hammerHead5.set("occupation", "Pickerel Cola Truck Driver");

console.log(hammerHead5.get("name"));
// Hammerhead
console.log(hammerHead5.get("species"));
// Hammerhead Shark
console.log(hammerHead5.get("homePlanet"));
// Venice Sands 5
console.log(hammerHead5.get("occupation"));
// Pickerel Cola Truck Driver
console.log(hammerHead5);
console.log(hammerHead5.size);
// 4
hammerHead5.set("test", "test");
console.log(hammerHead5.size);
// 5
console.log(hammerHead5.get("test"));
// test
hammerHead5.delete("test");
console.log(hammerHead5.get("test"));
// undefined
console.log(hammerHead5.size);
// 4
console.log("Mellon-Tech");
// Mellon-Tech

console.log("-----------------------------------------------");
console.log("------------------------------------------------");

const laurent = {};

laurent["name"] = "Laurent";
laurent["species"] = "Canine";
laurent["employer"] = "Clichy Security Solutions";
laurent["friends"] = ["Antoine", "Thierry"];
laurent["adversaries"] = ["Gilgamesh", "Hunzuu"];

console.log(laurent);

let { name, species, employer, friends, adversaries } = laurent;

console.log(name);
// Laurent
console.log(species);
// Canine
console.log(employer);
// Clichy Security Solutions
console.log(friends);
// ['Antoine', 'Thierry']
console.log(friends[0]);
// Antoine
console.log(friends[1]);
// Thierry

console.log("------------------------------------------------");
console.log("----------------------------------------------");

function inOrder(array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

let nums10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let nums12 = [4, 2, 3, 1, 7, 5];

console.log(inOrder(nums10));
// true
console.log(inOrder(nums12));
// false

let jack = "Jack";
let kirby = "Kirby";

console.log(jack + kirby);
// JackKirby
console.log(jack + " " + kirby);
// Jack Kirby
console.log(jack == "Jack");
// true

let xMen = [
  {
    name: "Scott Summers",
    alias: "Cyclops",
    id: 1
  },
  {
    name: "Jean Grey",
    alias: "none",
    id: 2
  },
  {
    name: "Logan",
    alias: "Wolverine",
    id: 3
  },
  {
    name: "Kurt Wagner",
    alias: "NightCrawler",
    id: 4
  },
  {
    name: "Kitty Pryde",
    alias: "Shadow Cat",
    id: 5
  }
];

console.log(xMen[0].alias);
// Cyclops

if (xMen[0].alias == "Cyclops") {
  let xMen1 = xMen.map(s1 => s1.id);
  console.log(xMen1);
  // [1, 2, 3, 4, 5]

  let reducer1 = (a, b) => a + b;

  let xMen2 = xMen1.reduce(reducer1);

  console.log(xMen2);
  // 15

  let reducer2 = (a, b) => a.id + b.id;

  let xMen3 = xMen.reduce(reducer2);
  console.log(xMen3);

  console.log(xMen[0].id);
  // 1
}

console.log(robots.array);
console.log(robots.array[0]);
// Hank-44

const pickerel = {
  name: "Croix James",
  species: "Pickerel",
  hasPickerelCola: true
};

console.log(pickerel["name"]);
// Croix James
console.log(pickerel.name);
// Croix James
pickerel["homeState"] = "Maine";

console.log(pickerel);

const pisces = [
  "Galahad",
  "Governal",
  "Hadrian",
  "Aetius",
  "Urbicus",
  "Berinon",
  "Forthwind"
];

if (pisces[0] == "Galahad") {
  let reducer1 = (a, b) => a + " " + b;
  let pisces1 = pisces.reduce(reducer1);
  console.log(pisces1);
  // Galahad Governal Hadrian Aetius Urbicus Berinon Forthwind
}

console.log(pisces[1]);
// Governal

let date1 = new Date();

console.log(date1);

console.log("6" * "5");
// 30
console.log("6" * 4);
// 24
console.log(Math.max(37, 34));
// 37

function mathDotMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  if (num2 > num1) {
    return num2;
  }
  if (num1 == num2) {
    return "no max number";
  }
}

console.log(mathDotMax(37, 34));
// 37
console.log(mathDotMax(72, 94));
// 94
console.log(mathDotMax(45, 45));
// no max number

function findAllFactors(num) {
  let rArray = [];
  let i = 0;
  let sqrt = Math.sqrt(num);

  for (; i <= sqrt; i++) {
    if (num % i == 0) {
      rArray.push(i);
      if (i != sqrt) {
        let j = num / i;
        rArray.push(j);
      }
    }
  }
  return rArray;
}
console.log(findAllFactors(36));
// [1, 36, 2, 18, 3, 12, 4, 9, 6]
console.log(findAllFactors(49));
// [1, 49, 7]
console.log(findAllFactors(25));
// [1, 25, 5]
console.log(findAllFactors(24));

console.log("------------------------------------------");
console.log("----------------------------------------");

let duplicates1 = [4, 3, 2, 7, 8, 2, 3, 1];

let duplicates2 = [1, 1, 2];

let duplicates3 = [1];

function duplicateArray(array) {
  let numsMap = new Map();
  let rArray = [];
  let i = 0;
  for (; i < array.length; i++) {
    if (numsMap.get(array[i]) != undefined) {
      rArray.push(array[i]);
    } else {
      numsMap.set(array[i], i);
    }
  }
  return rArray;
}

console.log(duplicateArray(duplicates1));
// [2, 3]
console.log(duplicateArray(duplicates2));
// [1]
console.log(duplicateArray(duplicates3));
// []

console.log("---------------------------------------");
console.log("-------------------------------------------");

console.log(robots);
console.log(robots.array);

const risingDough = {};

console.log(risingDough);
// {}

risingDough["name"] = "Rising Dough";
risingDough["robot"] = true;
risingDough["model"] = "Window Cleanse 10.5";
risingDough["favoriteFood"] = "Pizza";
risingDough["favoriteSoda"] = "Pickerel Cola";

console.log(risingDough);

console.log(Object.keys(risingDough));
// ['name', 'robot', 'model', 'favoriteFood', 'favoriteSoda']
let keys1 = Object.keys(risingDough);
console.log(keys1.length);
// 5
console.log(keys1[3]);
// favoriteFood
console.log(keys1[4]);
// favoriteSoda

console.log(risingDough[0]);
// undefined

let apples = [];
let apples2 = ["red apple", "green apple", "crab apple"];

apples["red"] = "red apple";
apples["green"] = "green apple";
apples["crab"] = "crab apple";

console.log(apples);

console.log(apples.indexOf("red apple"));
console.log(apples2.indexOf("red apple"));
// 0
console.log(121 % 10);
// 1
console.log(19 % 10);
// 9
console.log(121 / 10);
// 12.1
console.log(Math.floor(121 / 10));
// 12

function reverseNum(num) {
  let remainder = 0;
  let rNum = 0;

  for (; num > 0; num = Math.floor(num / 10)) {
    remainder = num % 10;
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNum(73));
// 37
console.log(reverseNum(759));
// 957
console.log(reverseNum(501));
// 105

console.log("------------------------------------------");
console.log("------------------------------------------");

function squareRootFinder(num) {
  let num2 = num;
  for (; num > 0; num--) {
    if (num2 / num == num) {
      return num;
    }
  }
}

console.log(squareRootFinder(64));
// 8
console.log(squareRootFinder(81));
// 9

// can test for whole number square root but nothing else

console.log("-----------------------------------------");
console.log("--------------------------------------");

function printChars2(string) {
  let firstIndex = 0;
  let i = 0;
  let rString = "";
  for (; i < string.length; i++) {
    rString = rString.concat(string.charAt(i));

    if (i == string.length - 1 && string.length > 1) {
      string = string.substr(firstIndex++, string.length);
      console.log(string.charAt(0));
      i = 0;
      rString = "";
    }
  }
}

printChars2("Bodhi");

console.log("------------------------------------------");

function printChars(string) {
  let i = 0;

  for (; i < string.length; i++) {
    let s1 = string.charAt(i);

    let j = i + 1;
    for (; j < string.length; j++) {
      s1 = s1.concat(string.charAt(j));
      console.log(s1);
    }
  }
}

printChars("Bodhi");
// B
// o
// d
// h
// i
printChars("Wubba");
// W
// u
// b
// b
// a

console.log("------------------------------------");

const mellonTech9 = "Mellon-Tech";
console.log(mellonTech9.includes("Tech"));
// true
console.log(mellonTech9.includes("on"));
// true

function stringIncludes(string1, string2) {
  let i = 0;
  let j = i + 1;
  let s1 = "";

  for (; i < string1.length; i++) {
    s1 = string1.charAt(i);
    let s2 = "";
    for (; j < string1.length; j++) {
      s1 = s1.concat(string1.charAt(j));
      if (s1 == string2) {
        return true;
      }
    }
  }
  return false;
}

console.log(stringIncludes(mellonTech9, "Tech"));

console.log("----------------------------------------");
console.log("----------------------------------------");

function stringIncludes2(string, string2) {
  let firstIndex = 0;
  let i = 0;
  let rString = "";
  for (; i < string.length; i++) {
    rString = rString.concat(string.charAt(i));
    console.log(rString);
    if (rString == string2) {
    }

    if (i == string.length - 1 && string.length > 0) {
      string = string.substr(firstIndex++, string.length);
      i = 0;
      rString = "";
    }
  }
}

console.log("-------------------------------------");
console.log("----------------------------------------");

let bodhi1 = "Bodhi";

bodhi1 = bodhi1.substr(0, bodhi1.length);

console.log(bodhi1);
// Bodhi
bodhi1 = bodhi1.substr(1, bodhi1.length);

console.log(bodhi1);

let bodhi2 = "Bodhi";

console.log(bodhi2);
// Bodhi
console.log(bodhi2.length);
// 5

bodhi2 = bodhi2.replace(bodhi2.charAt(0), "");

console.log(bodhi2);
// odhi
console.log(bodhi2.length);
// 4

console.log("-----------------------------------");
console.log("-------------------------------------");

// this is the one that works
function stringIncludes3(string, subString) {
  let rString = "";
  let i = 0;
  let len1 = string.length;
  let string2 = string;
  let combos = [];

  string2 = string2.replace(string2.charAt(0), "");

  let j = 0;
  let rString2 = "";

  for (; j < string2.length; j++) {
    rString2 = rString2.concat(string2.charAt(j));
    combos.push(rString2);
  }

  for (; i < len1; i++) {
    rString = rString.concat(string.charAt(i));
    combos.push(rString);

    if (i == len1 - 1) {
      string = string.replace(string.charAt(0), "");
      // console.log(string);
      rString = "";
      len1--;
      i = 0;
    }
  }

  if (combos.includes(subString)) {
    return true;
  } else return false;
}

console.log(stringIncludes3("test", "es"));
// true
console.log(stringIncludes3("Mellon-Tech", "-T"));
// true
console.log(stringIncludes3("Mellon-Tech", "-"));
// true
console.log(stringIncludes3("Mellon-Tech", "-R"));
// false
console.log(stringIncludes3("Bodhi", "o"));
// true
console.log("------------------------------------");
console.log("------------------------------------");

let jonnJonzz1 = "J'onn J'onzz";

console.log(jonnJonzz1.includes(" "));
// true
