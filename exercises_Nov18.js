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
