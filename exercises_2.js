console.log("Hello Oa");
console.log("------------------------------------------");

console.log("a" + "b");
// function to find all possible combinations
// of a 3 digit number

function threeDigitCombos(num) {
  let num1 = num.toString();
  num1 = num1.split("");
  let i = 0;
  let nums2 = [];

  for (; i < num1.length; i++) {
    if (i == 0) {
      let n1 = num1[i] + num1[i + 1] + num1[i + 2];
      let n2 = num1[i] + num1[i + 2] + num1[i + 1];
      nums2.push(n1, n2);
    } else if (i == 1) {
      let n3 = num1[i] + num1[i + 1] + num1[i - 1];
      let n4 = num1[i] + num1[i - 1] + num1[i + 1];
      nums2.push(n3, n4);
    } else if (i == 2) {
      let n5 = num1[i] + num1[i - 1] + num1[i - 2];
      let n6 = num1[i] + num1[i - 2] + num1[i - 1];
      nums2.push(n5, n6);
    }
  }
  let j = 0;
  for (; j < nums2.length; j++) {
    let nums3 = parseInt(nums2[j]);
    console.log(nums3);
  }
}

threeDigitCombos(942);
// 942
// 924
// 429
// 492
// 249
// 294
console.log("--------------------------------------");
threeDigitCombos(763);
// 763
// 736
// 637
// 673
// 367
// 376

console.log("------------------------------------------");
console.log("---------------------------------------");

// function to sort an array of numbers
// in ascending order

let nums4 = [34, 23, 12, 32, 24];

let nums5 = [63, 54, 45, 46, 50, 21, 30];

let numberSort = array => array.sort((a, b) => a - b);

console.log(numberSort(nums4));
// [12, 23, 24, 32, 34]
console.log(numberSort(nums5));
// [21, 30, 45, 46, 50, 54, 63]

console.log("--------------------------------------");
console.log("------------------------------------------");

// function that returns an ordered number array
// in descending order

let descendingOrder = array => array.sort((a, b) => b - a);

console.log(descendingOrder(nums4));
// [34, 32, 24, 23, 12]
console.log(descendingOrder(nums5));
// [63, 54, 50, 46, 45, 30, 21]

console.log("---------------------------------------");
console.log("--------------------------------------");

// function that delivers the maximum and minimum number
// of an array

function minMax(num) {
  let sorter = num1 => num1.sort((a, b) => a - b);
  num = sorter(num);
  console.log(`The max is ${num[num.length - 1]}`);
  console.log(`The min is ${num[0]}`);
}

minMax(nums4);
// The max is 34
// The min is 12
minMax(nums5);
// The max is 63
// The min is 21

console.log("------------------------------------------");
console.log("------------------------------------------");

// function to capitalize the first letter in each word
// of a sentence;
// input: Bodhi is awesome!
// output: Bodhi Is Awesome!

function capitalizeFirstLetter(string) {
  string = string.split(" ");
  let i = 0;
  let str2 = "";
  let concat = "";
  for (; i < string.length; i++) {
    str2 = string[i];
    str2 = str2.replace(str2.charAt(0), str2.charAt(0).toUpperCase());
    concat = concat + `${str2} `;
  }
  console.log(concat);
}

capitalizeFirstLetter("martian manhumter");
// Martian Manhunter
capitalizeFirstLetter("rocky and bullwinkle");
// Rocky And Bullwinkle

console.log("------------------------------------------");
console.log("------------------------------------------");
