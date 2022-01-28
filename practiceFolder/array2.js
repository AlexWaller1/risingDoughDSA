console.log("Hello Oa");

const robots = {};

robots[0] = "Hank-44";

robots[1] = "Warren-21";

robots[2] = "Mellon-Tech";

robots[3] = "Eggplant-Head";

console.log(robots);

robots["number"] = 4;

console.log(robots);

const risingDough = {};

risingDough["name"] = "Rising Dough";

console.log(risingDough);

risingDough["robotModel"] = "Window Cleanse 2.5";

console.log(risingDough);
// {name: 'Rising Dough', robot model: 'Window Cleanse 2.5'}

console.log(risingDough.robotModel);
// Window Cleanse 2.5

console.log(risingDough.robotModel == "Window Cleanse 2.5");
// true

risingDough["test"] = "test";

console.log(risingDough);

delete risingDough.test;

console.log(risingDough);

risingDough[9] = 9;

console.log(risingDough);

delete risingDough[9];

console.log(risingDough);

console.log("-------------------------------------------------");
console.log("--------------------------------------");

class array2 {
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
}

let clone1 = new array2();

console.log(clone1.length);
// 0

clone1.push("Rising Dough");

console.log(clone1.array);
// {0: 'Rising Dough'}
console.log(clone1.length);
// 1
clone1.push("Dex Garrity");
console.log(clone1.array);
// {0: 'Rising Dough', 1: 'Dex Garrity}
console.log(clone1.length);
// 2
clone1.push("test");
console.log(clone1.array);
// {0: 'Rising Dough', 1: 'Dex Garrity', 2: 'test'};
console.log(clone1.length);
// 3
clone1.pop();

console.log(clone1.array);
// {0: 'Rising Dough', 1: 'Dex Garrity'}
console.log(clone1.length);
// 2

console.log("------------------------------------------------");
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

  //........................................................
  //........................................................

  slice(start, end) {
    let slicedArray = new ArrayMaker();
    for (; start < end; start++) {
      slicedArray.push(this.array[start]);
    }
    return slicedArray;
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
}

console.log("--------------------------------------------");

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

if (5 == "5") {
  let i = 0;
  for (; i < batClones.length; i++) {
    console.log(batClones.array[i].name);
    // Bruce Wayne
    // Jean-Paul Valley
    // Terry McGinnis
  }
}

let nums = [0, 1, 2, 3, 4, 5];

console.log(nums.slice(0, 3));

console.log("--------------------------------------");
console.log("------------------------------------");

let nums1 = new ArrayMaker();

nums1.push(0);
nums1.push(1);
nums1.push(2);
nums1.push(3);
nums1.push(4);
nums1.push(5);

console.log(nums1.array);
// {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5}

console.log(nums1.slice(0, 3));
// {0: 0, 1: 1, 2: 2}
console.log(nums1.slice(0, 4));
// {0: 0, 1: 1, 2: 2, 3: 3}
console.log(nums1.slice(0, 2));
// {0: 0, 1: 1}
console.log(nums1.slice(2, 4));
// {2: 2, 3: 3}

nums1.push(6);
nums1.push(7);
nums1.push(8);
nums1.push(9);
nums1.push(10);
nums1.push(11);
nums1.push(12);

console.log(nums1.array);

console.log(nums1.array[12]);
// 12
console.log(nums1.array[11]);
// 11
console.log(nums1.length);
// 13
nums1.pop();
console.log(nums1.array);
console.log(nums1.length);
// 12

let numTest1 = nums1.slice(0, 5);

console.log(numTest1);
// {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
//console.log(numTest1.duplicateLength);
// undefined
//console.log(nums1.duplicateLength);
// 5
//console.log(nums1.newInstance());

console.log(nums1.slice(1, 3));
// {0: 1, 1: 2}
let slice1 = nums1.slice(0, 3);
console.log(slice1);
// {0: 0, 1: 1, 2: 2}
console.log(slice1.length);
// 3

let slice2 = nums1.slice(1, 3);
console.log(slice2);
// {array: {0: 1, 1: 2}, length: 2}

console.log(slice2.array);
// {0: 1, 1: 2}

console.log(slice2.length);
// 2

console.log(nums1.array);

console.log(nums1.includes(9));
// true
console.log(nums1.includes(4));
// true
console.log(nums1.includes(7));
// true
console.log(nums1.includes(5));
// true
console.log(nums1.includes(35));
// false
console.log(nums1.includes(undefined));
// false

console.log(nums1.indexOf(3));
// 3
console.log(nums1.indexOf(9));
// 9
console.log(nums1.indexOf(15));
// -1
console.log(nums1.indexOf(0));
// 0

console.log("-----------------------------------------------");

let nums5 = [1, 2, 3, 4, 5];

let nums6 = nums5.slice(0, 4);

console.log(nums6);
// [1, 2, 3, 4]
console.log(nums6.length);
// 4

console.log("-------------------------------------------");
console.log("----------------------------------------");

console.log(risingDough);

const risingDough2 = [
  {
    name: "Rising Dough",
    robot: true,
    model: "Window Cleanse 10.5"
  },
  {
    name: "Brooke Nevins",
    robot: false,
    model: "n/a"
  },
  {
    name: "Brayden Saskatoon",
    robot: false,
    model: "n/a"
  },
  {
    name: "Dex Garrity",
    robot: true,
    model: "Io_Flow"
  }
];

console.log(robots);
console.log(robots[2] == "Mellon-Tech");
// true
if (robots[2] == "Mellon-Tech") {
  nums5.forEach(s1 => console.log(s1));
  // 1
  // 2
  // 3
  // 4
  // 5
}

console.log(risingDough2[3].name);
// Dex Garrity
let testNums2 = [1, 2, 3, 4];

if (risingDough2[3].name == "Dex Garrity") {
  let robo1 = risingDough2.filter(r1 => r1.robot == true).map(r2 => r2.name);
  console.log(robo1);
  // ['Rising Dough', 'Dex Garrity']
  let robo2 = risingDough2.filter(r2 => r2.robot == false);
  console.log(robo2);
  /* 
  
  {
      0: {name: 'Brooke Nevins', robot: false, model: 'n/a'}
      1: {name: 'Brayden Saskatoon', robot: false, model: 'n/a'}
  }

  */
  let robo3 = testNums2.map(n1 => n1);
  console.log(robo3);
  // [1, 2, 3, 4]
}

console.log("---------------------------------------------");
console.log("-----------------------------------------------");

let vowels = ["a", "e", "i", "o", "u"];

function includes2(array, element) {
  let i = 0;
  for (; i < array.length; i++) {}
}

console.log(vowels.indexOf("i"));
// 2

let mixNums1 = [44, 2, 65, 34, 23, 27, 21, 19, 15, 54, 91];

let mixNums2 = [34, 56, 23, 32, 2, 14, 31, 98, 45, 64, 62, 40];

let mixNums3 = [56, 23, 44, 21, 29, 39, 37];

let sortNum = array => array.sort((a, b) => a - b);

console.log(sortNum(mixNums1));
// [2, 15, 19, 21, 23, 27, 34, 44, 54, 65, 91]

const roboClone = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let sortString = array => array.sort((a, b) => (a > b ? 1 : -1));

console.log(sortString(roboClone));
// ['Eggplant-Head', 'Hank-44', 'Mellon-Tech', 'Warren-21']
console.log(sortString(mixNums2));
// [2, 14, 23, 31, 32, 34, 40, 45, 56, 62, 64, 98]

function isSorted(array) {
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted(mixNums2));
// true
console.log(isSorted(mixNums3));
// false

const hammerHead = {};

console.log(hammerHead);

hammerHead["name"] = "Hammerhead";
hammerHead["occupation"] = "Space Soda Truck Driver";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["friends"] = ["Taylor", "Wibaux", "Harvey"];
hammerHead["hasPickerelCola"] = true;
hammerHead["hasCoolJacket"] = true;

console.log(hammerHead);
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.occupation);
// Space Soda Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.friends);
// ['Taylor', 'Wibaux', 'Harvey'];
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Wibaux
console.log(hammerHead.friends[2]);
// Harvey
console.log(hammerHead.hasPickerelCola);
// true
console.log(hammerHead.hasCoolJacket);
// true

let { name, occupation, homePlanet, friends, hasPickerelCola, hasCoolJacket } =
  hammerHead;

console.log(name);
// Hammerhead
console.log(homePlanet);
// Venice Sands 5
console.log(friends);
// ['Taylor', 'Wibaux', 'Harvey']
console.log(friends[0]);
// Taylor
console.log(friends[1]);
// Wibaux
console.log(friends[2]);
// Harvey
console.log(hasPickerelCola);
// true
console.log(hasCoolJacket);
// true

console.log(typeof undefined);
// undefined
console.log(typeof null);
// object
console.log(typeof null == "object");
// true

let unDefined = [undefined, undefined, undefined, undefined];

console.log(typeof undefined == undefined);
// false

if (typeof null == "object") {
  let i = 0;
  do {
    console.log(unDefined[i]);
    // undefined
    // undefined
    // undefined
    // undefined
    i++;
  } while (i < unDefined.length);
}

const hammerHead2 = [
  "Hammerhead",
  "Taylor",
  "The Geometry Man",
  "Harvey",
  "Wibaux",
  "The Cosmic Trout"
];

console.log(hammerHead2[2] == "The Geometry Man");
// true

if (hammerHead2[2] == "The Geometry Man") {
  let i = 0;
  for (; i < hammerHead2.length; i++) {
    hammerHead2[i] == "The Geometry Man"
      ? console.log(true)
      : console.log(false);
    // false
    // false
    // true
    // false
    // false
    // false
  }
}

console.log(hammerHead2[0]);
// Hammerhead
console.log(hammerHead2[hammerHead2.length - 1]);
// The Cosmic Trout

const hammerHead3 = [
  {
    name: "Hammerhead",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Venice Sands 5",
    hasPickerelCola: true,
    hasCoolJacket: true
  },
  {
    name: "Taylor",
    occupation: "Pickerel Cola Space Truck Driver",
    homePlanet: "Mariner Mists",
    hasPickerelCola: true,
    hasCoolJacket: false
  },
  {
    name: "The Geometry Man",
    occupation: "N/A",
    homePlanet: "N/A",
    hasPickerelCola: true,
    hasCoolJacket: false
  },
  {
    name: "Harvey",
    occupation: "Dam Builder",
    homePlanet: "Hardin-37",
    hasPickerelCola: false,
    hasCoolJacket: false
  },
  {
    name: "Wibaux",
    occupation: "River Advocate",
    homePlanet: "Hardin-37",
    hasPickerelCola: false,
    hasCoolJacket: false
  },
  {
    name: "The Cosmic Trout",
    occupation: "Cosmic Guide",
    homePlanet: "N/A",
    hasPickerelCola: true,
    hasCoolJacket: false
  }
];

let sortByName = array => array.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(sortByName(hammerHead3));

console.log(hammerHead3[5].name);
// Wibaux

if (hammerHead3[5].name == "Wibaux") {
  let shark1 = hammerHead3.map(s1 => s1.name);

  console.log(shark1);
  /* 
  
  ['Hammerhead', 'Harvey', 'Taylor', 'The Cosmic Trout',
   'The Geometry Man', 'Wibaux']

  */
  let shark2 = hammerHead3
    .filter(s2 => s2.homePlanet == "Venice Sands 5")
    .map(s3 => s3.name);

  console.log(shark2);
  // ['Hammerhead']

  let shark3 = hammerHead3
    .filter(s1 => s1.hasPickerelCola == false)
    .map(s1 => s1.name);

  console.log(shark3);
  // ['Harvey', 'Wibaux']
}

console.log(23 % 10);
// 3
console.log(37 % 10);
// 7

// 23, reverse is 32, take 3 * 10 and add 2

console.log(2 === "2");
// false
console.log(2 == "2");
// true
console.log(hammerHead2);

function reverseArray(array) {
  let temp = "";
  let i = 0;
  let j = array.length - 1;
  for (; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(reverseArray(hammerHead2));
// ['The Cosmic Trout', 'Wibaux', 'Harvey', 'The Geometry Man,
//  'Taylor', 'Hammerhead]

const mellonTech = "Mellon-Tech";
