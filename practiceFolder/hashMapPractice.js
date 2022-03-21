console.log("Hello Oa");

let nums = new Map();

nums.set("one", 1);
nums.set("two", 2);
nums.set("three", 3);
nums.set("four", 4);
nums.set("five", 5);
nums.set("six", 6);
nums.set("seven", 7);
nums.set("eight", 8);
nums.set("nine", 9);
nums.set("ten", 10);
nums.set("eleven", 11);
nums.set("twelve", 12);

console.log(nums.get("one"));
// 1
console.log(nums.get("two"));
// 2
console.log(nums.get("three"));
// 3
console.log(nums.get("four"));
// 4
console.log(nums.get("five"));
// 5
console.log(nums.get("four") * nums.get("five"));
// 20
console.log(Math.pow(nums.get("eleven"), nums.get("two")));
// 121

function powerOf(num, power) {
  let rNum = 1;
  let i = 0;
  for (; i < power; i++) {
    rNum = rNum * num;
  }
  return rNum;
}

console.log(powerOf(3, 2));
// 9
console.log(powerOf(nums.get("seven"), nums.get("two")));
// 49
console.log(nums.size);
// 12
console.log(Object.keys(nums));
// []
console.log(Object.values(nums));
// []
console.log(nums);
console.log(nums.entries());

console.log(nums.has("one"));
// true
console.log(nums.has("twenty"));
// false
console.log(nums.keys());
// MapIterator {'one', 'two', 'three', 'four', 'five',
//              'six', 'seven', 'eight', 'nine', 'ten',
//              'eleven', 'twelve}
console.log(nums.values());
// MapIterator {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
console.log(nums.entries()[0]);
// undefined
console.log(Array.from(nums.keys()));
/* 

['one', 'two', 'three', 'four', 'five', 'six', 'seven', 
 'eight', 'nine', 'ten', 'eleven', 'twelve']

*/
console.log(Array.from(nums.values()));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(Array.from(nums.values())[0]);
// 1
let nums2 = new Array();

console.log(nums2);
// []
nums2.push(20);
nums2.push(21);
nums2.push(22);
nums2.push(23);
nums2.push(24);
nums2.push(25);

console.log(nums2);
// [20, 21, 22, 23, 24, 25]
console.log(nums2.length);
// 6
console.log("--------------------------------------------");
console.log("-------------------------------------------");

const hammerHead = {};

hammerHead["name"] = "Hammerhead";
hammerHead["career"] = "Pickerel Cola Space Truck Driver";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["friends"] = ["Taylor", "Harvey", "Wibaux"];
hammerHead["cosmicGuides"] = ["Geometry Man", "The Cosmic Trout"];
hammerHead["hasPickerelCola"] = true;
hammerHead["hasCoolJacket"] = true;

console.log(hammerHead);
// logs object
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.career);
// Pickerel Cola Space Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Harvey
console.log(hammerHead.friends[2]);
// Wibaux
console.log(hammerHead.cosmicGuides[0]);
// Geometry Man
console.log(hammerHead.cosmicGuides[1]);
// The Cosmic Trout
console.log(hammerHead.hasPickerelCola);
// true
console.log(hammerHead.hasCoolJacket);
// true

console.log("-------------------------------------------");

class ArrayBluePrint {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  push(element) {
    this.array[this.length] = element;
    this.length++;
  }

  pop() {
    let index = this.length - 1;
    delete this.array[index];
    this.length--;
  }

  reverse() {
    let temp = "";
    let i = 0;
    let j = this.length - 1;
    for (; i < j; i++, j--) {
      temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
    }
  }

  random() {
    let temp = 0;
    let i = 0;
    let j = 0;
    for (; i < this.length; i++) {
      j = Math.floor(Math.random() * (this.length - 1));
      temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
    }
  }
}

const robots = new ArrayBluePrint();

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
console.log(robots.push("test"));
// undefined since function has no return value
console.log(robots.array);
// 'test' added
console.log(robots.pop());
// undefined since function has no return value
console.log(robots.array);
// 'test' removed from array
const robots2 = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

robots2.reverse();
console.log(robots2);
// ['Eggplant-Head', 'Mellon-Tech', 'Warren-21', 'Hank-44']
console.log(robots.array[0]);
// Hank-44
console.log(robots.array[1]);
// Warren-21
console.log(robots.array[2]);
// Mellon-Tech
console.log(robots.array[3]);
// Eggplant-Head
robots.reverse();
console.log(robots.array);
/* 

{0: 'Eggplant-Head', 1: 'Mellon-Tech', 2: 'Warren-21', 3: 'Hank-44'}

*/
console.log(Math.random() * 10);

robots.random();
console.log(robots.array);
// working!

console.log("--------------------------------------------");
console.log("---------------------------------------------");

let roboMap = new Map();

roboMap.set(0, "Hank-44");
roboMap.set(1, "Warren-21");
roboMap.set(2, "Mellon-Tech");
roboMap.set(3, "Eggplant-Head");

console.log(roboMap.get(0));
// Hank-44
console.log(roboMap.get(1));
// Warren-21
console.log(roboMap.get(2));
// Mellon-Tech
console.log(roboMap.get(3));
// Eggplant-head
console.log(roboMap.has(0));
// true
console.log(roboMap.has("Hank-44"));
// false
console.log(roboMap.has(1));
// true
console.log(roboMap.has("Warren-21"));
// false

let mixedNum = new Map();

mixedNum.set(9, "9");
mixedNum.set(4, "4");
mixedNum.set(6, "6");
mixedNum.set(3, "3");

console.log(mixedNum);
console.log(Array.from(mixedNum.keys()));
// [9, 4, 6, 3]
console.log("---------------------------------------------");
console.log("--------------------------------------------");

const bigHornCrew = new Array();
bigHornCrew[0] = "Ace";
console.log(bigHornCrew);
// ['Ace']
bigHornCrew[1] = "Radek";
bigHornCrew[2] = "Marek";
bigHornCrew[3] = "Columbus";
bigHornCrew[4] = "Axel";

console.log(bigHornCrew);
/* 

['Ace', 'Radek', 'Marek', 'Columbus', 'Axel']

*/
console.log(bigHornCrew.length);
// 5
bigHornCrew[5] = "Galahad";
console.log(bigHornCrew);
// ['Ace', 'Radek', 'Marek', 'Columbus', 'Axel', 'Galahad']

bigHornCrew[5] = "Rowdy";
console.log(bigHornCrew);
// ['Ace', 'Radek', 'Marek', 'Columbus', 'Axel', 'Rowdy']
bigHornCrew[6] = undefined;
bigHornCrew[7] = undefined;
console.log(bigHornCrew);
delete bigHornCrew[6];
delete bigHornCrew[7];
console.log(bigHornCrew);
console.log(bigHornCrew);
console.log(bigHornCrew.length);
console.log(bigHornCrew[6]);

let replaceTest = replacement => replacement;

console.log(replaceTest());
// undefined

let robots5 = new Array();

robots5["apples"] = "Hank-44";

console.log(robots5);
// [apples: 'Hank-44']
console.log(robots5["apples"]);
// Hank-44
