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
