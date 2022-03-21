console.log("Hello Oa");

const hammerHead = {};

hammerHead["name"] = "Hammerhead";
hammerHead["species"] = "Hammerhead Shark";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["hasPickerelCola"] = true;
hammerHead["friends"] = ["Taylor", "Harvey", "Wibaux"];

console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.species);
// Hammerhead Shark
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.hasPickerelCola);
// true
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Harvey
console.log(hammerHead.friends[2]);
// Wibaux

console.log("-----------------------------------");
console.log("-------------------------------");

const taylor = {};

taylor["name"] = "Taylor";
taylor["species"] = "Albatross";
taylor["homePlanet"] = "Mariner Mists";
taylor["hasPickerelCola"] = true;
taylor["friends"] = ["Hammerhead", "Harvey", "Wibaux"];

console.log(taylor.name);
// Taylor
console.log(taylor.species);
// Albatross
console.log(taylor.homePlanet);
// Mariner Mists
console.log(taylor.hasPickerelCola);
// true
console.log(taylor.friends[0]);
// Hammerhead
console.log(taylor.friends[1]);
// Harvey
console.log(taylor.friends[2]);
// Wibaux

console.log("-----------------------------------");
console.log("-----------------------------------");

const harvey = {};

harvey["name"] = "Harvey";
harvey["species"] = "Beaver";
harvey["homePlanet"] = "Hardin-37";
harvey["hasPickerelCola"] = true;
harvey["friends"] = ["Wibaux", "Taylor", "Hammerhead"];

console.log(harvey.name);
// harvey
console.log(harvey.species);
// Beaver
console.log(harvey.homePlanet);
// Hardin-37
console.log(harvey.hasPickerelCola);
// true
console.log(harvey.friends[0]);
// Wibaux
console.log(harvey.friends[1]);
// Taylor
console.log(harvey.friends[2]);
// Hammmerhead

console.log("---------------------------------");
console.log("----------------------------------");

const wibaux = {};

wibaux["name"] = "Wibaux";
wibaux["species"] = "Whitefish";
wibaux["homePlanet"] = "Hardin-37";
wibaux["hasPickerelCola"] = true;
wibaux["friends"] = ["Harvey", "Hammerhead", "Taylor"];

console.log(wibaux.name);
// Wibaux
console.log(wibaux.species);
// Whitefish
console.log(wibaux.homePlanet);
// Hardin-37
console.log(wibaux.hasPickerelCola);
// true
console.log(wibaux.friends[0]);
// Harvey
console.log(wibaux.friends[1]);
// Hammerhead
console.log(wibaux.friends[2]);
// Taylor

console.log("----------------------------------");
console.log("---------------------------------");

const hh11 = [];

hh11.push(hammerHead);
hh11.push(taylor);
hh11.push(harvey);
hh11.push(wibaux);

console.log(hh11);

console.log(hh11[0].name);
// Hammerhead
console.log(hh11[1].name);
// Taylor
console.log(hh11[2].name);
// Harvey
console.log(hh11[3].name);
// Wibaux

console.log(hh11[0].name == "Hammerhead");
// true

if (hh11[0].name == "Hammerhead") {
  let shark1 = hh11.filter(h1 => h1.hasPickerelCola == true).map(h2 => h2.name);

  console.log(shark1);
  // ['Hammerhead', 'Taylor', 'Harvey', 'Wibaux']

  let shark2 = hh11.map(h1 => h1.hasPickerelCola);

  console.log(shark2);
  // [true, true, true, true]

  let shark3 = hh11
    .filter(h1 => h1.homePlanet == "Hardin-37")
    .map(h1 => h1.name);

  console.log(shark3);
  // ['Harvey', 'Wibaux']
}

console.log(hh11[1].name == "Taylor");
// true

if (hh11[1].name == "Taylor") {
  console.log("Hello Oa");
  // Hello Oa

  let i = 0;

  for (; i < hh11.length; i++) {
    switch (hh11[i].homePlanet) {
      case "Hardin-37":
        console.log(`${hh11[i].name} is from Hardin-37`);
        // Harvey is from Hardin-37
        // Wibaux is from Hardin-37
        break;

      default:
        console.log(`${hh11[i].name} is not from Hardin-37`);
        // Hammerhead is not from Hardin-37
        // Taylor is not from Hardin-37
        break;
    }
  }
}

console.log("-------------------------------------");
console.log("------------------------------------");

let testObj = {};

testObj["test1"] = "test1";
testObj["test2"] = "test2";
testObj["test3"] = "test3";
testObj["test4"] = "test4";

console.log(testObj);

delete testObj["test3"];

console.log(testObj);

class NewArray {
  constructor() {
    this.container = {};
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.container[this.length - 1];
    this.length--;
  }

  includes(element) {
    let i = 0;

    for (; i < this.length; i++) {
      if (this.container[i] == element) {
        return true;
      }
    }
    return false;
  }

  indexOf(element) {
    let i = 0;

    for (; i < this.length; i++) {
      if (this.container[i] == element) {
        return i;
      }
    }
    return -1;
  }

  slice(index1, index2) {
    let newArray = new NewArray();

    for (; index1 < index2; index1++) {
      newArray.push(this.container[index1]);
    }
    return newArray;
  }
}

const robots = new NewArray();

robots.push("Hank-44");
robots.push("Warren-21");
robots.push("Mellon-Tech");
robots.push("Eggplant-Head");

console.log(robots.container);
// {0: 'Hank-44', 1: 'Warren-21', 2: 'Mellon-Tech', 3: 'Eggplant-Head'}

console.log(robots.container[0]);
// Hank-44
console.log(robots.container[1]);
// Warren-21
console.log(robots.container[2]);
// Mellon-Tech
console.log(robots.container[3]);
// Eggplant-Head
console.log(robots.length);
// 4
robots.push("test");
console.log(robots.container);

console.log(robots.length);
// 5
robots.pop();

console.log(robots.container);

console.log(robots.length);
// 4

console.log(robots.includes("Mellon-Tech"));
// true
console.log(robots.includes("Hank-44"));
// true
console.log(robots.includes("Warren-21"));
// true
console.log(robots.includes("Eggplant-Head"));
// true
console.log(robots.includes("test"));
// false

console.log(robots.indexOf("Hank-44"));
// 0
console.log(robots.indexOf("Warren-21"));
// 1
console.log(robots.indexOf("Mellon-Tech"));
// 2
console.log(robots.indexOf("Eggplant-Head"));
// 3
console.log(robots.indexOf("test"));
// -1

const robots2 = robots.slice(2, 4);

console.log(robots2.container);
// {0: 'Mellon-Tech', 1: 'Eggplant-Head'}
console.log(robots2.length);
// 2

console.log("---------------------------------------");
console.log("------------------------------------");

console.log(parseInt(21.74));
// 21

function reverseNumber(num) {
  let remainder = 0;
  let rNum = 0;

  for (; num > 1; num = num / 10) {
    num = parseInt(num);
    remainder = num % 10;
    rNum = rNum * 10 + remainder;
  }
  return rNum;
}

console.log(reverseNumber(321));
// 123
console.log(reverseNumber(12345));
// 54321
console.log(reverseNumber(4267));
// 6724

console.log(3.44 % 1);

console.log(parseFloat(3.44 % 1));

console.log(3.44 % 10);

console.log(3.45 % 1);

let decimal1 = 3.45 % 1;

console.log(3.45 - decimal1);
// 3

let decimal2 = 3.44 % 1;

console.log(3.44 - decimal2);
// 3

// mathDotFloor

// mathDotRound

console.log(9.5 % 1);
// 0.5

console.log(10.7 % 1);

let decimal3 = 10.7534 % 1;

console.log(10.7534 - decimal3);
// 10
