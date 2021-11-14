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

let testObj2 = [
  { number: 1 },
  { number: 24 },
  { number: 12 },
  { number: 10 },
  { number: 9 },
  { number: 76 },
  { number: 52 }
];

let sortASC2 = object => object.sort((a, b) => a.number - b.number);

console.log(sortASC2(testObj2));
