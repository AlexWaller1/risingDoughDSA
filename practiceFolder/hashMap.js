let shop = {
  apple: 5,
  grape: 10
};
console.log(Object.entries(shop));

function checkKey(key, obj) {
  let i = 0;
  for (; i < Object.keys(obj).length; i++) {
    if (Object.keys(obj)[i] == key) {
      return true;
    }
  }
  return false;
}

let a = 0;
let b = 1;
let c = 2;
let d = 3;

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[a]);
// Hank-44
console.log(robots[b]);
// Warren-21
console.log(robots[c]);
// Mellon-Tech
console.log(robots[d]);
// Eggplant-Head

console.log("--------------------------------------");
console.log("--------------------------------------");

class HashTable {
  constructor() {
    this.values = [];
    this.keys = [];
    this.size = 0;
  }

  set(key, value) {
    this.keys.push(key);
    this.values.push(value);

    key = this.values.indexOf(value);
    // tried this first
    this.size++;
  }

  get(key) {
    let index1 = this.keys.indexOf(key);
    return this.values[index1];
  }
}

console.log("-------------------------------------------");
console.log("---------------------------------------");

const robots2 = new HashTable();

robots2.set("a", "Hank-44");

robots2.set("b", "Warren-21");

robots2.set("c", "Mellon-Tech");

robots2.set("d", "Eggplant-Head");

console.log(robots2.values);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

console.log(robots2.get("a"));
// Hank-44

console.log(robots2.get("b"));
// Warren-21

console.log(robots2.get("c"));
// Mellon-Tech

console.log(robots2.get("d"));
// Eggplant-head

console.log(robots2.keys);
// ['a', 'b', 'c', 'd']

console.log(robots2.size);
// 4

console.log("--------------------------------------------");
console.log("------------------------------------------");

const shoppingCart = new HashTable();

shoppingCart.set("apples", 5);

shoppingCart.set("grapes", 10);

shoppingCart.set("oranges", 20);

console.log(shoppingCart.get("apples"));
// 5
console.log(shoppingCart.get("grapes"));
// 10;
console.log(shoppingCart.get("oranges"));
// 20;
console.log(shoppingCart.keys);
// ['apples', 'grapes', 'oranges']
console.log(shoppingCart.values);
// [5, 10, 20]
console.log(shoppingCart.size);
// 3
console.log(shoppingCart.get("apples") * shoppingCart.get("oranges"));
// 100
