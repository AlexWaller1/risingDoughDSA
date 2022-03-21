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
    this.container = [];
    this.keys = [];
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // array[hash] = value
    // array[]
    let address = this._hash(key);
    this.container[address] = [key, value];
    this.size++;
  }

  get(key) {
    let address = this._hash(key);
    return this.container[address];
  }

  has(key) {
    let i = 0;
    for (; i < this.keys.length; i++) {
      if (this.keys[i] == key) {
        return true;
      }
    }
    return false;
  }
}

/* 

_hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }


*/

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
console.log(shoppingCart.has("apples"));
// true
console.log(shoppingCart.has("oranges"));
// true
console.log(shoppingCart.has("grapes"));
// true
console.log(shoppingCart.has("carrots"));
// false
console.log(shoppingCart);
