console.log("Hello Oa");

console.log("-----------------------------------");
console.log("--------------------------------");

function arrayOfMultiples(num, length) {
  let count = 1;
  let i = 1;
  let nums = [];

  for (; i <= length; i++) {
    let product = num * count++;
    nums.push(product);
  }
  console.log(nums);
}

arrayOfMultiples(7, 5);
// [7, 14, 21, 28, 35]
arrayOfMultiples(9, 3);
// [9, 18, 27]
arrayOfMultiples(4, 5);
// [4, 8, 12, 16, 20]

console.log("----------------------------------");
console.log("-----------------------------------");

let testObject = { number1: "1", number2: "2" };
console.log(testObject);

const { number1, number2 } = testObject;
console.log(number1);
// 1
console.log(number2);

//  console.log(number3);
//  number3 is not defined

console.log("-----------------------------------");
console.log("----------------------------------");

let sortNum = array => array.sort((a, b) => a - b);

let nums1 = [3, 6, 44, 33, 21, 15, 17, 20];

console.log(sortNum(nums1));
// [3, 6, 15, 17, 20, 21, 33, 44]

console.log("-----------------------------------");
console.log("-------------------------------");

let nums2 = [
  5, 4, 7, 9, 2, 2, 3, 9, 8, 6, 5, 4, 4, 2, 4, 8, 11, 2, 3, 4, 20, 24
];

let nums3 = [22, 23, 21];

let nums4 = [57, 5];

console.log(sortNum(nums2));

function mostSongsInHour(array) {
  let sorted = sortNum(array);
  let i = 0;
  let sum = 0;
  let count = 0;

  for (; i < sorted.length; i++) {
    sum = sum + sorted[i];
    if (sum <= 60) {
      count++;
    }
  }
  console.log(count);
}

mostSongsInHour(nums2);
// 15
mostSongsInHour(nums3);
// 2
mostSongsInHour(nums4);
// 1

console.log("-----------------------------------");
console.log("------------------------------------");

let crashBandicoot = [
  { value: "Crash Bandicoot", cart: "blue" },
  { value: "Tiny Tiger", cart: "green" },
  { value: "N. Ginn", cart: "purple" },
  { value: "Neo Cortex", cart: "red" },
  { value: "Dingodile", cart: "yellow" }
];

let testObj2 = [
  { value: 1 },
  { value: 24 },
  { value: 12 },
  { value: 10 },
  { value: 9 },
  { value: 76 },
  { value: 52 }
];

let sortASC2 = object => object.sort((a, b) => a.value - b.value);

let sortASC3 = array => array.sort((a, b) => (a.value > b.value ? 1 : -1));

console.log(sortASC2(testObj2));

console.log(Object.entries(testObj2));

function sortData(funct, data) {
  let newData = funct(data);
  console.log(newData);
}

sortData(sortASC2, testObj2);
// 0: {value: 1}
// 1: {value: 9}
// 2: {value: 10}
// 3: {value: 12}
// 4: {value: 24}
// 5: {value: 52}
// 6: {value: 76}

sortData(sortASC3, crashBandicoot);
// 0: {value: 'Crash Bandicoot', cart: 'blue'}
// 1: {value: 'Dingodile', cart: 'yellow'}
// 2: {value: 'N. Ginn', cart: 'purple'}
// 3: {value: 'Neo Cortex', cart: 'red'}
// 4: {value: 'Tiny Tiger', cart: 'green'}

console.log("-----------------------------------");
console.log("-----------------------------------");

// Game of Thrones Destructor

const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

let { first, last, origin, allegiance } = arya;

console.log(first);
// Arya
console.log(last);
// Stark

const jon = {
  first2: "Jon",
  last2: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

let {
  first2,
  last2,
  title,
  family: {
    brothers: { brother1, brother2 },
    sisters: { sister1, sister2 }
  }
} = jon;

console.log(brother1);
// Rob Stark
console.log(brother2);
// Rickon Stark
