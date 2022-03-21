console.log("Hello Oa");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const risingDough = [
  "Rising Dough",
  "Brooke Nevins",
  "Croix James",
  "Dex Garrity"
];

console.log("-------------------------------------------------------");
console.log("-----------------------------------------------------");

class HashTable {
  constructor() {
    this.container = [];

    this.size = 0;
  }

  set(key, value) {
    this.container[key] = value;
    this.size++;
  }

  get(key) {
    return this.container[key];
  }

  has(key) {
    if (this.container[key] != undefined) {
      return true;
    }
    return false;
  }

  delete(key) {
    delete this.container[key];
  }
}

console.log("--------------------------------------------------------");
console.log("----------------------------------------------------");

console.log("Hello Oa");

function hash(element) {
  let num = 0;
  let rString = "";
  let i = 0;
  for (; i < element.length; i++) {
    num = Math.floor(Math.random() * 10);
    num = num.toString();
    rString = rString.concat(num);
  }
  let rNum = parseInt(rString);
  return rNum;
}

console.log(hash("Chipper"));
// 4854553
console.log(hash("Beezer"));
// 375161
console.log(hash("Bodhi"));
// 512250
console.log("-----------------------------------------------------");
console.log("----------------------------------------------------");

console.log("Hello Oa");
let bodhi = "Bodhi";
console.log(bodhi);
// Bodhi
bodhi = bodhi.toString();
console.log(bodhi);
// Bodhi
console.log(bodhi.length);
// 5
bodhi = bodhi.split("");
console.log(bodhi);

function hash2(element) {
  element = element.toString();
  element = element.split("");

  let letters = [
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
    "9"
  ];
  let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62
  ];

  let num = 0;
  let i = 0;
  let rString = "";

  for (; i < element.length; i++) {
    let index = letters.indexOf(element[i]);
    num = numbers[index];

    num = num.toString();
    rString = rString.concat(num);
  }
  num = parseInt(num);

  return num;
}

console.log(hash2("test"));
// 64
console.log(hash2("test"));
// 64
console.log(hash2("Chipper"));
// 101
console.log(hash2("Chipper"));
// 101
console.log(hash2("Bodhi"));

console.log("-----------------------------------------------------");
console.log("------------------------------------------------------");

const robots2 = new HashTable();

robots2.set(10, "Hank-44");
robots2.set(20, "Warren-21");
robots2.set(30, "Mellon-Tech");
robots2.set(40, "Eggplant-Head");

console.log(robots2.container);
console.log(robots2.size);
// 4
console.log(robots2.get(10));
// Hank-44
console.log(robots2.get(20));
// Warren-21
console.log(robots2.get(30));
// Mellon-Tech
console.log(robots2.get(40));
// Eggplant-Head

console.log("---------------------------------------------------");
console.log("-------------------------------------------------");

const shoppingList = new HashTable();

shoppingList.set("apples", 5);
shoppingList.set("grapes", 20);
shoppingList.set("oranges", 37);

console.log(shoppingList.container);
// [apples: 5, grapes: 20, oranges: 37]
console.log(shoppingList.get("apples"));
// 5
console.log(shoppingList.get("grapes"));
// 20
console.log(shoppingList.get("oranges"));
// 37
console.log(shoppingList.has("apples"));
// true
console.log(shoppingList.has("carrots"));
// false
console.log(shoppingList.has(undefined));
// false

console.log("---------------------------------------------");
console.log("------------------------------------------------");
let nums = [1, 2, 3, 4, 5];
console.log(nums);

delete nums[0];

console.log(nums);
// [empty, 2, 3, 4, 5]
console.log(nums[0]);
// undefined
console.log(nums[0] == "empty");
// false

const sodaList = new Map();

sodaList.set(0, "Mountain Dew");
sodaList.set(1, "Diet Pepsi");
sodaList.set(2, "Dr. Pepper");
sodaList.set(3, "RC Cola");
sodaList.set(4, "Slice");

console.log(sodaList.get(4));
// Slice
console.log(sodaList.get(3));
// RC Cola
console.log(sodaList.get(12));
// undefined
sodaList.set(34, "Mountain Dew Code Red");
console.log(sodaList.has(undefined));
// false
sodaList.set(10, "Aquafina");
console.log(sodaList.get(10));
// Aquafina
sodaList.delete(10);
console.log(sodaList.get(10));
// undefined
console.log(sodaList.get(21));
// undefined
console.log(sodaList.has(21));
// false
sodaList.set(21, undefined);
console.log(sodaList.get(21));
// undefined
console.log(sodaList.has(21));
// true
let nested1 = [1, [2, 3]];
console.log(nested1.flat());
// [1, 2, 3]
let nested2 = [1, 2, 3];
console.log(nested1.flat());
// [1, 2, 3]
let nested3 = [1, [2, [3, 4, [5, [6]]]]];
nested3 = nested3.flat();
console.log(nested3);
// [1, 2, [3, 4, [5, [6]]]]
nested3 = nested3.flat();
console.log(nested3);
// [1, 2, 3, 4, [5, [6]]];
nested3 = nested3.flat();
console.log(nested3);
// [1, 2, 3, 4, 5, [6]]
nested3 = nested3.flat();
console.log(nested3);
// [1, 2, 3, 5, 6]
if (1 == "1") {
  let nested4 = [1, [2, [3, 4, [5, [6]]]]];
  let i = 0;
  for (; i < nested4.length; i++) {
    if (typeof nested4[i] == "object") {
      nested4 = nested4.flat();
    }
  }
  console.log(nested4.length);
  // 6
}
