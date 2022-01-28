console.log("Hello Oa");

let firstPair = { num: 1, name: "one" };

let secondPair = { num: 2, name: "two" };

console.log(firstPair + secondPair);

let testArray = [];

let firstElement = "first";

testArray = [firstElement];

console.log(testArray);

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[2]);
// Mellon-Tech

if (robots[2] == "Mellon-Tech") {
  console.log("Hello Mars");
  // Hello Mars
  let count = 0;
  let i = 0;
  for (; robots[i] != undefined; i++) {
    count++;
  }
  console.log(count);
  // 4
}

let nums1 = [1, 2, 3, 4];

console.log(nums1.pop());
// 4
console.log(nums1);
// [1, 2, 3]

let test1 = [undefined, undefined, undefined, undefined, 2];

console.log(test1[0] == undefined);
// true
if (test1[0] == undefined) {
  let i = 0;
  let count = 0;
  for (; i < test1.length; i++) {
    if (test1[i]) {
      count++;
    }
  }
  console.log(count);
  // 1
}

let emptyArray = [];
console.log(emptyArray.length);
// 0

if (emptyArray.length == 0) {
  let count = 0;
  let i = 0;
  for (; i <= emptyArray.length; i++) {
    console.log("Hello Oa");
    // Hello Oa
  }
}

let uD = [undefined, undefined, undefined];

console.log(uD[1]);
// undefined
console.log(uD[36]);
// undefined
console.log(uD.length);
// 3

console.log("-------------------------------------------");
console.log("-------------------------------------------");

class myArray {
  constructor(array = []) {
    this.array = array;
  }

  length() {
    let count = 0;
    let i = 0;
    while (this.array[i] != undefined) {
      count++;
      i++;
    }
    return count;
  }

  push(element) {
    let count = 0;
    let i = 0;
    for (; this.array[i] != undefined; i++) {
      count++;
    }
    let j = 0;
    this.array[count] = element;

    return this.array;
  }
  pop2() {
    // get length of instance array
    let r = 0;
    let count1 = 0;
    for (; this.array[r] != undefined; r++) {
      count1++;
    }
    //......................................

    let newArray = [];

    function push5(element, array) {
      let count = 0;
      let b = 0;

      for (; array[b] != undefined; b++) {
        count++;
      }

      array[count] = element;
      return array;
    }
    let i = 0;
    for (; i < count1 - 1; i++) {
      push5(this.array[i], newArray);
    }
    this.array = newArray;
    return this.array;
  }
}

let arrayClone = new myArray([]);

console.log(arrayClone.length());
// 0;
console.log(arrayClone.push("Hank-44"));
// ['Hank-44']
console.log(arrayClone.length());
// 1
console.log(arrayClone.push("Warren-21"));
// ['Hank-44', 'Warren-21']
console.log(arrayClone.length());
// 2
console.log(arrayClone.push("Mellon-Tech"));
// ['Hank-44', 'Warren-21', 'Mellon-Tech']
console.log(arrayClone.length());
// 3
console.log(arrayClone.push("Eggplant-Head"));
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(arrayClone.length());
// 4
console.log(arrayClone.push("Bender"));
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head', 'Bender']
console.log(arrayClone.length());
// 5
console.log(arrayClone.pop2());
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(arrayClone.push("Bender"));
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(arrayClone.length());
// 5
console.log(arrayClone.pop2());
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(arrayClone.length());
// 4

console.log("-----------------------------------------------");
console.log("--------------------------------------------");
