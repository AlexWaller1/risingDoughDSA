console.log("Hello Oa");

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

  indexOf(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.array[i] == element) {
        return i;
      }
    }
    return -1;
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

  slice(index1, index2) {
    let cloneArray = new ArrayMaker();
    for (; index1 < index2; index1++) {
      cloneArray.push(this.array[index1]);
    }
    return cloneArray;
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
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("Bender"));
// -1
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Bender"));
// false
robots.push("Bender");
console.log(robots.array[4]);
// Bender
console.log(robots.length);
// 5
robots.push("test");
console.log(robots.length);
// 6
robots.pop();
console.log(robots.length);
// 5
console.log(robots.slice(0, 2));
let roboClone1 = robots.slice(0, 2);
console.log(roboClone1.array);
// {0: 'Hank-44', 1: 'Warren-21'}
console.log(roboClone1.length);
// 2

console.log("----------------------------------------");
console.log("--------------------------------------");

const letters = [
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
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  " ",
  ":",
  ";",
  "'",
  "/",
  "?",
  ">",
  "<",
  ",",
  "~",
  "`"
];

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86
];

class HashMap {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(element) {
    let i = 0;
    let rString = "";
    for (; i < element.length; i++) {
      let char = element.charAt(i);
      let index = letters.indexOf(char);
      let numChar = numbers[index];
      rString = rString.concat(numChar);
    }
    let rNum = parseInt(rString);
    return rNum;
  }

  set(key, value) {
    let hashKey = this.hash(key);
    this.container[hashKey] = value;
    this.size++;
  }

  get(key) {
    let hashKey = this.hash(key);
    return this.container[hashKey];
  }

  has(key) {
    let hashKey = this.hash(key);
    if (this.container[hashKey] != undefined) {
      return true;
    } else {
      return false;
    }
  }

  delete(key) {
    let hashKey = this.hash(key);
    delete this.container[hashKey];
    this.size--;
  }
}

const shoppingList = new HashMap();

console.log(shoppingList.hash("Bodhi"));
// 2815489
console.log(shoppingList.hash("Bodhi"));
// 2815489
console.log(shoppingList.hash("Chipper"));
// 29891616518
console.log(shoppingList.hash("Chipper"));
// 29891616518
console.log(shoppingList.hash("Beezer"));
// 285526518
console.log(shoppingList.hash("Beezer"));
// 285526518
shoppingList.set("Apples", 5);
shoppingList.set("Oranges", 10);
shoppingList.set("Asparagus", 15);
console.log(shoppingList.get("Apples"));
// 5
console.log(shoppingList.get("Oranges"));
// 10
console.log(shoppingList.get("Asparagus"));
// 15
console.log(shoppingList.size);
// 3
console.log(shoppingList.has("Apples"));
// true
console.log(shoppingList.has("Oranges"));
// true
console.log(shoppingList.has("Mango"));
// false
console.log(shoppingList.has("Asparagus"));
// true
console.log(shoppingList.has("Jolly Ranchers"));
// false
shoppingList.set("test", "test");
console.log(shoppingList.has("test"));
// true
console.log(shoppingList.get("test"));
// test
shoppingList.delete("test");
console.log(shoppingList.has("test"));
// false
console.log(shoppingList.get("test"));
// undefined

console.log("-------------------------------------");
console.log("------------------------------------");

console.log(robots.array);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head', 4: 'Bender'}
console.log(robots.array[0]);
// Hank-44
console.log(robots.array[1]);
// Warren-21
console.log(robots.array[2]);
// Mellon-Tech
console.log(robots.array[3]);
// Eggplant-Head
console.log(robots.array[4]);
// Bender

const spiderVerse = new ArrayMaker();

let spider1 = { name: "Peter Parker", alias: "Spider-Man" };

let spider2 = { name: "Ben Reilly", alias: "Scarlett Spider" };

let spider3 = { name: "Gwen Stacey", alias: "Spider-Gwen" };

let spider4 = { name: "Miguel O'Hara", alias: "Spider-Man 2099" };

let spider5 = { name: "Peni Parker", alias: "SP//dr:" };

let spider6 = { name: "Peter Porker", alias: "Spider-Ham" };

let spider7 = { name: "Otto Octavius", alias: "Superior Spider-Man" };

let spider8 = { name: "Cindy Moon", alias: "Silk" };

let spider9 = { name: "Miles Morales", alias: "Spider-Man" };

let spider10 = { name: "Jessica Drew", alias: "Spider-Woman" };

spiderVerse.push(spider1);
spiderVerse.push(spider2);
spiderVerse.push(spider3);
spiderVerse.push(spider4);
spiderVerse.push(spider5);
spiderVerse.push(spider6);
spiderVerse.push(spider7);
spiderVerse.push(spider8);
spiderVerse.push(spider9);
spiderVerse.push(spider10);

console.log(spiderVerse.array);
console.log(spiderVerse.length);
// 10
console.log(spiderVerse.array[6].name);
// Otto Octavius
console.log(spiderVerse.array[1].alias);
// Scarlett Spider
console.log(spiderVerse.array[1].alias == "Scarlett Spider");
// true
console.log(spiderVerse.length == 10);
// true

if (spiderVerse.length == 10) {
  let i = 0;

  for (; i < spiderVerse.length; i++) {
    switch (spiderVerse.array[i].alias) {
      case "Scarlett Spider":
        console.log(`${spiderVerse.array[i].name} is a clone`);
        // Ben Reilly is a clone
        break;
      default:
        console.log("Spiderverse is Awesome!!!");
        // Spiderverse is awesome!!! * 9
        break;
    }
  }
}

const pisces = [
  "Galahad",
  "Governal",
  "Hadrian",
  "Aetius",
  "Urbicus",
  "Berinon",
  "Forthwind"
];

let pisces1 = pisces.filter(s1 => s1 == "Hadrian").map(s2 => s2);

console.log(pisces1);
// ['Hadrian']

let pisces2 = pisces.filter(s1 => s1 == "Galahad");

console.log(pisces2);
// ['Galahad']

console.log(3 % 10);
// 3

console.log(3 / 10);
// 0.3
console.log(parseInt(3 / 10));
// 0
console.log(parseInt(21 / 10));
// 2

let pisces3 = pisces.filter(s1 => s1.length <= 6);

console.log(pisces3);
// ['Aetius']

let dog = "Dog";

let dogStar = "Dogstar";

console.log(dogStar.indexOf(dog));
// 0

console.log("---------------------------------------");
console.log("----------------------------------");

function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;

  for (; i < j; i++, j--) {
    if (string.charAt(i) != string.charAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("dog"));
// false
console.log(isPalindrome("racecar"));
// true
console.log(isPalindrome("webbex"));
// false
console.log(isPalindrome("kayak"));
// true
console.log(isPalindrome("civic"));
// true
console.log(isPalindrome("level"));
// true
console.log(isPalindrome("playstation"));
// false

let usaCurling = "USA Curling";

let usaC2 = usaCurling.substring(0, usaCurling.length);

console.log(usaC2);
// USA Curling
let usaC3 = usaCurling.substring(0, usaCurling.length - 1);

console.log(usaC3);
// USA Curlin

let usaC4 = usaCurling.substring(1, usaCurling.length - 1);

console.log(usaC4);
// SA Curlin
console.log("----------------------------------------");

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

  return combos;
}

console.log(stringIncludes3("jjkayakn"));

console.log("-----------------------------------------");

function palindromeSubString(string) {
  let combos = stringIncludes3(string);
  let rString = "";
  let i = 0;

  for (; i < combos.length; i++) {
    if (isPalindrome(combos[i]) && combos[i].length > rString.length) {
      rString = combos[i];
    }
  }
  return rString;
}

console.log(palindromeSubString("bkayaks"));
// kayak
console.log(palindromeSubString("bbkayake"));
// kayak
console.log(palindromeSubString("racecardriver"));
// racecar

console.log("----------------------------------------");
console.log("----------------------------------------");

const hammerHead = {};

hammerHead["name"] = "Hammerhead";
hammerHead["occupation"] = "Pickerel Cola Space Truck Driver";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["friends"] = ["Taylor", "Harvey", "Wibaux"];
hammerHead["hasPickerelCola"] = true;
hammerHead["hasCoolJacket"] = true;

console.log(hammerHead);
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.occupation);
// Pickerel Cola Space Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Harvey
console.log(hammerHead.friends[2]);
// Wibaux

console.log("--------------------------------------");
console.log("------------------------------------");

let nums1 = [4, 1, 1, 2, 3];
// desired output = [4, 0, 0, 2, 3]
let nums2 = [3, 5, 5, 2];
// desired output = [1, 2, 2, 0]
let nums3 = [6, 7, 3, 2];
// desired output = [2, 3, 1, 0]

function greaterThanCounter(array) {
  let rArray = [];
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    numsMap.set(i, array[i]);
  }
  return numsMap;
}

console.log(greaterThanCounter(nums1));

console.log("----------------------------------------");
console.log("--------------------------------------");

console.log(robots.array);

console.log(robots.array[0]);
// Hank-44
console.log(robots.array[1]);
// Warren-21
console.log(robots.array[2]);
// Mellon-Tech
console.log(robots.array[3]);
// Eggplant-Head

const kenji = {
  name: "Kenji",
  species: "Red Crowned Crane",
  homeCity: "Saitama",
  fightingStyle: "Fujian White Crane",
  favoriteGame: "Tekken",
  friends: ["Lone Wolf Samurai", "Laramie", "Zeno", "Samos"]
};

let {
  name: kenjiName,
  species: kenjiSpecies,
  homeCity: kenjiCity,
  fightingStyle: kenjiStyle,
  favoriteGame: kenjiGame,
  friends: kenjiFriends
} = kenji;

console.log(kenjiName);
// Kenji
console.log(kenjiSpecies);
// Red Crowned Crane
console.log(kenjiCity);
// Saitama
console.log(kenjiStyle);
// Fujian White Crane
console.log(kenjiGame);
// Tekken
console.log(kenjiFriends[0]);
// Lone Wolf Samurai
console.log(kenjiFriends[1]);
// Laramie
console.log(kenjiFriends[2]);
// Zeno
console.log(kenjiFriends[3]);
// Samos
console.log(Object.values(kenji)[0]);
// Kenji
console.log(Object.values(kenji)[1]);
// Red Crowned Crane
console.log(Object.values(kenji)[2]);
// Saitama
console.log(Object.values(kenji));
console.log(Object.values(kenji)[5][1]);
// Laramie

let integers = new Object();

integers[0] = 1;
integers[1] = 2;
integers[2] = 3;
integers[3] = 4;
integers[4] = 5;

console.log(integers);
console.log(integers[0]);
// 1
console.log(integers[1]);
// 2
console.log(integers[2]);
// 3

console.log("--------------------------------------");
console.log("--------------------------------------");

class Batman {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }

  present() {
    return {
      name: this.name,
      alias: this.alias
    };
  }
}

const bruceWayne = new Batman("Bruce Wayne", "Batman");

console.log(bruceWayne.present());
// {name: 'Bruce Wayne', alias: 'Batman'}

const jasonTodd = new Batman("Jason Todd", "The Red Hood");

console.log(jasonTodd.present());
// {name: 'Jason Todd', alias: 'The Red Hood'}

console.log("---------------------------------------");
console.log("-----------------------------");

let combos1 = ["#", "#", "#", "#"];

let combos2 = ["%", "*", "*", "@"];

let combos3 = ["%", "%", "%", "%"];

let combos4 = ["!", "#", "@", "@"];

let combos5 = ["!", "!", "!", "!"];

let combos6 = ["*", "*", "*", "*"];

let combos7 = [1, 2, 3, 4, 5, 6];

let combos8 = [];

let combos9 = [5, 10, 15, 20, 25, 30, 35, 40];

let combos10 = [1, 2];

function slotMachine(array) {
  if (typeof array != "object") return "param must be an array";

  if (array.length != 4) return "array must have 4 elements";

  let i = 0;
  for (; i < array.length - 1; i++) {
    if (array[i] != array[i + 1]) {
      return "sorry, please enter more quarters to play again";
    }
  }
  return "You Win!";
}

console.log(slotMachine(combos1));
// You Win!
console.log(slotMachine(combos2));
// sorry, please enter more quarters to play again
console.log(slotMachine(combos3));
// You Win!
console.log(slotMachine(combos4));
// sorry, please enter more quarters to play again
console.log(slotMachine(combos5));
// You Win!
console.log(slotMachine(combos6));
// You Win!
console.log(slotMachine(combos7));
// array must have 4 elements
console.log(slotMachine(combos8));
// array must have 4 elements
console.log(slotMachine(combos9));
// array must have 4 elements
console.log(slotMachine(combos10));
// array must have 4 elements
console.log(slotMachine("test"));
// param must be an array;
console.log(slotMachine(true));
// param must be an array
console.log(slotMachine(22));
// param must be an array

console.log("----------------------------");
console.log("----------------------------------");

let testMap = new Map();

console.log(typeof testMap);
// object
console.log(typeof true);
// boolean
console.log(typeof 1);
// number
console.log(typeof "1");
// string

let testString1 = "{ Hello, Oa }";

console.log(testString1.indexOf("{"));
// 0
console.log(testString1.indexOf("}"));
// 12
let testIndex1 = testString1.indexOf("{");

let testIndex2 = testString1.indexOf("}");

console.log(testIndex1 > testIndex2);
// false
console.log(testIndex2 > testIndex1);
// true
console.log(testIndex1 < testIndex2);
// true
console.log(testString1.includes("{"));
// true
console.log(testString1.includes("}"));
// true
console.log(testString1.includes("["));
// false
console.log("---------------------------------------");
console.log("---------------------------------------");

let testNums1 = [2, 4, 6, 8, 10];

let testNums2 = [3, 6, 9, 12, 15];

let testNums3 = [4, 5, 7, 12, 20];

let testNums4 = [6, 12, 18, 24, 30];

let testNums5 = [10, 15, 20, 25, 31];

let testNums6 = [10, 15, 20, 25, 30];

function increaseBySame(array) {
  let rArray = [];
  let difference = 0;
  let i = 0;

  for (; i < array.length - 1; i++) {
    difference = array[i + 1] - array[i];
    rArray.push(difference);
  }

  let j = 0;

  for (; j < rArray.length - 1; j++) {
    if (rArray[j] != rArray[j + 1]) {
      return false;
    }
  }
  return true;
}

console.log(increaseBySame(testNums1));
// true
console.log(increaseBySame(testNums2));
// true
console.log(increaseBySame(testNums3));
// false
console.log(increaseBySame(testNums4));
// true
console.log(increaseBySame(testNums5));
// false
console.log(increaseBySame(testNums6));
// true

console.log("-----------------------------------------");
console.log("----------------------------------------");

console.log(39 % 12);
// 3
console.log(39 / 12);
// 3.25
console.log(70 / 12);
// 5.8

function feetInches(num) {
  let feet = Math.floor(num / 12);
  let inches = num % 12;

  if (inches != 0) {
    return `${feet} feet ${inches} inches`;
  } else {
    return `${feet} feet`;
  }
}

console.log(feetInches(70));
// 5 feet 10 inches
console.log(feetInches(72));
// 6 feet
console.log(feetInches(74));
// 6 feet 2 inches
console.log(feetInches(83));
// 6 feet 11 inches
console.log(feetInches(84));
// 7 feet

console.log("--------------------------------------");
console.log("--------------------------------------");

let nums30 = [1, 2, 3, 4, 5];

let nums31 = [6, 4, 7, 2, 9];

let nums32 = [11, 12, 13, 14, 15];

let nums33 = [19, 9, 7, 20, 15, 21];

let nums34 = [41, 42, 43, 44, 45];

function inOrder(array) {
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(inOrder(nums30));
// true
console.log(inOrder(nums31));
// false
console.log(inOrder(nums32));
// true
console.log(inOrder(nums33));
// false
console.log(inOrder(nums34));
// true
console.log("-----------------------");

console.log(inOrder(nums31) == true);
// false
console.log(inOrder(nums30) == true);
// true

console.log("----------------------------------");

function sortWithoutSort(array) {
  let temp = 0;
  let i = 0;

  for (; i < array.length - 1; i++) {
    if (inOrder(array) == true) {
      return array;
    }
    if (array[i] > array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
    if (i == array.length - 2) {
      i = 0;
    }
  }
  return "can't sort";
}

console.log(1 > undefined);
// false
console.log(undefined == undefined);
// true
console.log("--------------------------------------");

console.log(robots);
console.log(robots.array);
console.log(robots.array[0]);
// Hank-44
console.log(robots.array[1]);
// Warren-21
console.log(robots.array[2]);
// Mellon-Tech
console.log(robots.array[3]);
// Eggplant-head

class ArrayClone {
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

  indexOf(element) {
    let i = 0;
    for (; i < this.length; i++) {
      if (this.array[i] == element) {
        return i;
      }
    }
    return -1;
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

  slice(index1, index2) {
    let newArray = new ArrayClone();
    for (; index1 < index2; index1++) {
      newArray.push(this.array[index1]);
    }
    return newArray;
  }
}

const dachshunds = new ArrayClone();

dachshunds.push("Beezer");
dachshunds.push("Chipper");
dachshunds.push("Bodhi");
dachshunds.push("Star");
dachshunds.push("Jake");

console.log(dachshunds.array);
console.log(dachshunds.array[0]);
// Beezer
console.log(dachshunds.array[1]);
// Chipper
console.log(dachshunds.array[2]);
// Bodhi
console.log(dachshunds.array[3]);
// Star
console.log(dachshunds.array[4]);
// Jake
console.log(dachshunds.array[5]);
// undefined
console.log(dachshunds.length);
// 5
console.log(dachshunds.indexOf("Bodhi"));
// 2
console.log(dachshunds.indexOf("Chipper"));
// 1
console.log(dachshunds.indexOf("Beezer"));
// 0
console.log(dachshunds.indexOf("Star"));
// 3
console.log(dachshunds.indexOf("Jake"));
// 4
console.log(dachshunds.includes("Beezer"));
// true
console.log(dachshunds.includes("Chipper"));
// true
console.log(dachshunds.includes("Bodhi"));
// true
console.log(dachshunds.includes("Star"));
// true
console.log(dachshunds.includes("Jake"));
// true
console.log(dachshunds.includes("test"));
// false
console.log(dachshunds.slice(1, 4));
let slice1 = dachshunds.slice(1, 4);

console.log(slice1.array);
// {0: 'Chipper', 1: 'Bodhi', 2: 'Star'}
console.log(slice1.length);
// 3
dachshunds.push("test-1");
console.log(dachshunds.array);
dachshunds.pop();
console.log(dachshunds.array);

const bodhi1 = dachshunds.array[2];

console.log(bodhi1.charAt(0));
// B

function everyCombo(string) {
  let rArray = [];
  let string2 = "";
  let i = 0;

  let j = 0;
  let string3 = "";
  let string4 = string.replace(string.charAt(0), "");

  for (; j < string4.length; j++) {
    string3 = string3.concat(string4.charAt(j));
    rArray.push(string3);
  }

  for (; i < string.length; i++) {
    string2 = string2.concat(string.charAt(i));
    rArray.push(string2);
    if (i == string.length - 1 && string.length >= 1) {
      string = string.replace(string.charAt(0), "");

      i = 0;
      string2 = "";
    }
  }
  return rArray;
}

console.log(everyCombo(bodhi1));

console.log("---------------------------------------");
console.log("-------------------------------------");

const hammerHead1 = {};

hammerHead1["name"] = "Hammerhead";
hammerHead1["occupation"] = "Pickerel Cola Space Truck Driver";
hammerHead1["homePlanet"] = "Venice Sands 5";
hammerHead1["hasPickerelCola"] = true;
hammerHead1["friends"] = ["Taylor", "Harvey", "Wibaux"];
hammerHead1["species"] = "Hammerhead Shark";

const hammerHeadChars = new ArrayClone();

const taylor1 = {};

taylor1["name"] = "Taylor";
taylor1["occupation"] = "Pickerel Cola Space Truck Driver";
taylor1["homePlanet"] = "Mariner Mists";
taylor1["hasPickerelCola"] = true;
taylor1["friends"] = ["Hammerhead", "Harvey", "Wibaux"];
taylor1["species"] = "Albatross";

const harvey1 = {};

harvey1["name"] = "Harvey";
harvey1["occupation"] = "Dam Builder";
harvey1["homePlanet"] = "Hardin-37";
harvey1["hasPickerelCola"] = true;
harvey1["friends"] = ["Wibaux", "Taylor", "Hammerhead"];
harvey1["species"] = "Beaver";

const wibaux1 = {};

wibaux1["name"] = "Wibaux";
wibaux1["occupation"] = "River Guide";
wibaux1["homePlanet"] = "Hardin-37";
wibaux1["hasPickerelCola"] = true;
wibaux1["friends"] = ["Harvey", "Taylor", "Hammerhead"];
wibaux1["species"] = "Whitefish";

hammerHeadChars.push(hammerHead1);
hammerHeadChars.push(taylor1);
hammerHeadChars.push(harvey1);
hammerHeadChars.push(wibaux1);

console.log(hammerHeadChars.array);

console.log(hammerHeadChars.array[0].name);
// Hammerhead
console.log(hammerHeadChars.array[1].name);
// Taylor
console.log(hammerHeadChars.array[2].name);
// Harvey
console.log(hammerHeadChars.array[3].name);
// Wibaux

const hammerHeadChars2 = [];

hammerHeadChars2.push(hammerHead1);
hammerHeadChars2.push(taylor1);
hammerHeadChars2.push(harvey1);
hammerHeadChars2.push(wibaux1);

console.log(hammerHeadChars2);

console.log(hammerHeadChars2[0].name);
// Hammerhead
console.log(hammerHeadChars2[1].name);
// Taylor
console.log(hammerHeadChars2[3].name == "Wibaux");
// true

if (hammerHeadChars2[3].name == "Wibaux") {
  let hh1 = hammerHeadChars2
    .filter(h1 => h1.species == "Whitefish")
    .map(s2 => s2.name);

  console.log(hh1);
  // ['Wibaux']

  let hh2 = hammerHeadChars2.map(s1 => s1.hasPickerelCola);

  console.log(hh2);
  // [true, true, true, true]
}

let nums40 = [1, 2, 3, 4, 5];

let nums41 = [41, 42, 43, 44, 45];

let nums42 = [51, 52, 53, 54, 55];

if (typeof "Dachshund" == "string") {
  let d1 = nums40.map(d2 => d2 + 1);

  console.log(d1);
  // [2, 3, 4, 5, 6]

  let d2 = nums41.map(d2 => d2 + 2);

  console.log(d2);
  // [43, 44, 45, 46, 47]

  nums42.forEach(e1 => {
    console.log(e1 * 2);
    // 102
    // 104
    // 106
    // 108
    // 110
  });
}

let powerOfTwo = num => console.log(num * num);

powerOfTwo(3);
// 9
powerOfTwo(9);
// 81

console.log("---------------------------------------");
console.log("-----------------------------------------");

const chars5 = [
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
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "'",
  "<",
  ">",
  "?",
  ".",
  "/",
  ",",
  "|",
  " "
];

console.log(chars5.length);
// 90

const hashNums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91
];

console.log(hashNums.length);
// 90

class hashTable5 {
  constructor() {
    this.container = [];
    this.size = 0;
  }

  hash(string) {
    let rString = "";
    let i = 0;

    for (; i < string.length; i++) {
      let index = chars5.indexOf(string.charAt(i));
      let newNum = hashNums[index];
      rString = rString.concat(newNum);
    }
    let rNum = parseInt(rString);
    return parseInt(rNum / 2);
  }

  set(key, value) {
    // let hashKey = this.hash(key);
    if (typeof key == "number") {
      this.container[key] = value;
      this.size++;
    }
  }

  get(key) {
    // let hashKey = this.hash(key);
    return this.container[key];
  }

  delete(key) {
    //  let hashKey = this.hash(key);
    delete this.container[key];
    this.size--;
  }

  has(key) {
    // let hashKey = this.hash(key);
    if (this.container[key] != undefined) {
      return true;
    } else {
      return false;
    }
  }
}

let spiderClones2 = new hashTable5();

console.log(spiderClones2.hash("Bodhi"));
// 1407744
console.log(spiderClones2.hash("Bodhi"));
// 1407744
console.log(spiderClones2.hash("Chipper"));
// 14945808259
console.log(spiderClones2.hash("Chipper"));
// 14945808259
console.log(spiderClones2.hash("Beezer"));
// 142763259
console.log(spiderClones2.hash("Beezer"));
// 142763259

spiderClones2.set(1, "Spider-Man");
spiderClones2.set(2, "Spider-Man 2099");
spiderClones2.set(3, "sp:DR//");
spiderClones2.set(4, "Spider-Ham");
spiderClones2.set(5, "Scarlet Spider");

console.log(spiderClones2.get(1));
// Spider-Man
console.log(spiderClones2.get(2));
// Spider-Man 2099
console.log(spiderClones2.get(3));
// sp:DR//
console.log(spiderClones2.get(4));
// Spider-Ham
console.log(spiderClones2.get(5));
// Scarlet Spider
console.log(spiderClones2.get(6));
// undefined
console.log(spiderClones2.size);
// 5
console.log(spiderClones2.has(1));
// true
console.log(spiderClones2.has(2));
// true
console.log(spiderClones2.has(23));
// false
spiderClones2.set(6, "test");
console.log(spiderClones2.get(6));
// test
console.log(spiderClones2.has(6));
// true
spiderClones2.delete(6);
console.log(spiderClones2.has(6));
// false

console.log("-----------------------------");
console.log("----------------------------------");

let testMap2 = new Map();

testMap2.set(1, "A");
testMap2.set(2, "B");
testMap2.set(3, "C");
testMap2.set(4, "D");
testMap2.set(5, "E");

console.log(testMap2.get(1));
// A
console.log(testMap2.get(2));
// B
console.log(testMap2.has(1));
// true

console.log("-------------------------");
console.log("--------------------------------");

console.log(parseInt(21 / 10));
// 2
console.log(typeof 4.5);
// number
console.log(parseInt("37"));
// 37
console.log(parseInt("37.5"));
// 37
console.log(parseFloat("37.5"));
// 37.5
console.log(37.5 % 1);
// 0.5
console.log(20.25 % 1);
// 0.25

function mathDotRound(num) {
  if (typeof num != "number") return "input must be a number";

  let decimal = num % 1;

  if (decimal >= 0.5) {
    return num - decimal + 1;
  }

  if (decimal < 0.5) {
    return num - decimal;
  }
}

console.log(mathDotRound(4.65));
// 5
console.log(mathDotRound(4.34));
// 4
console.log(mathDotRound(4));
// 4

console.log("--------------------------------");
console.log("------------------------------");

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

console.log(mathDotMax(3, 4));
// 4
console.log(mathDotMax(51, 49));
// 51
console.log(mathDotMax(31, 31));
// no max number

console.log("--------------------------------------");
console.log("-------------------------------------");

let mathDotFloor = num => {
  let decimal = num % 1;
  return num - decimal;
};

console.log(mathDotFloor(30.95));
// 30
console.log(mathDotFloor(21.76));
// 21
console.log(mathDotFloor(9));
// 9
console.log(mathDotFloor(5.12));
// 5
console.log("-----------------------------------");
console.log("-------------------------------");

let duplicates21 = [1, 6, 5, 3, 2, 1, 10, 7];

let duplicates22 = [22, 2, 31, 9, 0, 31, 40, 23];

let duplicates23 = [55, 31, 25, 2, 17, 71, 31];

function removeDuplicates(array) {
  let numsMap = new Map();
  let i = 0;

  for (; i < array.length; i++) {
    if (numsMap.get(array[i]) != undefined) {
      array.splice(i, 1);
    } else {
      numsMap.set(array[i], i);
    }
  }
  return array;
}

console.log(removeDuplicates(duplicates21));
// [1, 6, 5, 3, 2, 10, 7]
console.log(removeDuplicates(duplicates22));
// [22, 2, 31, 9, 0, 40, 23]
console.log(removeDuplicates(duplicates23));
// [55, 31, 25, 2, 17, 71]

console.log("--------------------------------------");
console.log("--------------------------------------");

let oneDigit1 = [23, 344, 566, 4509, 9];

let oneDigit2 = [764, 45, 3467, 7986, 4, 20];

let oneDigit3 = [43, 543, 21, 1, 978, 498, 95];

function oneDigit(array) {
  let rArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    array[i] = array[i].toString();
    let firstChar = array[i].charAt(0);
    let firstDigit = parseInt(firstChar);
    array[i] = firstDigit;
  }
  return array;
}

console.log(oneDigit(oneDigit1));
// [2, 3, 5, 4, 9]
console.log(oneDigit(oneDigit2));
// [7, 4, 3, 7, 4, 2]
console.log(oneDigit(oneDigit3));
// [4, 5, 2, 1, 9, 4, 9]

console.log("-----------------------------------");
console.log("--------------------------------");

let duplicates31 = [3, 4, 5, 3, 4, 6, 2, 1];

let duplicates32 = [14, 11, 12, 9, 14, 12, 15, 10];

let duplicates33 = [56, 43, 56, 23, 12, 39, 56];

let sortNum = array => array.sort((a, b) => a - b);

console.log(sortNum(duplicates31));
// [1, 2, 3, 3, 4, 4, 5, 6]
console.log(sortNum(duplicates32));
// [9, 10, 11, 12, 12, 14, 14, 15]
console.log(sortNum(duplicates33));
// [12, 23, 39, 43, 56, 56, 56]

console.log("----------------------------------");
console.log("----------------------------------");

function shuffleArray(array) {
  let i = 0;
  let j = 0;
  let temp = 0;

  for (; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleArray(duplicates31));

console.log("-------------------------------");
console.log("-----------------------------");

let reverse1 = [2, 12, 22, 32, 42, 52, 62, 72];

let reverse2 = [42, 43, 44, 45, 46, 47, 48, 49];

let reverse3 = [71, 72, 73, 74, 75, 76, 77, 78, 79];

let reverseArray = array => {
  let i = 0;
  let j = array.length - 1;
  let temp = 0;

  for (; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

console.log(reverseArray(reverse1));
// [72, 62, 52, 42, 32, 22, 12, 2]
console.log(reverseArray(reverse2));
// [49, 48, 47, 46, 45, 44, 43, 42]
console.log(reverseArray(reverse3));
// [79, 78, 77, 76, 75, 74, 73, 72, 71]

console.log("----------------------------------");
console.log("-----------------------------------");

const tomarRe = {
  name: "Tomar Re",
  homeBase: "Oa"
};

const greenLanterns = new Map();

greenLanterns.set(1, tomarRe);

console.log(greenLanterns.get(1).name);
// Tomar Re
console.log(greenLanterns.get(1).homeBase);
// Oa
