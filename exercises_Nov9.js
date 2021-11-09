console.log("Hello Oa");

// function that sorts an array of 0s, 1s, and 2s
// without using the sort function

const unSorted = [1, 0, 2, 2, 0, 1, 1, 0, 1, 2];

function sortArray(array) {
  let i = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let newArray = [];
  for (; i < array.length; i++) {
    if (array[i] == 0) {
      count1++;
    } else if (array[i] == 1) {
      count2++;
    } else if (array[i] == 2) {
      count3++;
    }
  }
  while (count1 > 0) {
    newArray.push(0);
    count1--;
  }
  while (count2 > 0) {
    newArray.push(1);
    count2--;
  }
  while (count3 > 0) {
    newArray.push(2);
    count3--;
  }
  console.log(newArray);
}

sortArray(unSorted);

console.log("------------------------------");
console.log("----------------------------");

// function to sort an array of numbers
const sorter1 = [44, 12, 37, 45, 17];

let sortNumber = array => array.sort((a, b) => a - b);

console.log(sortNumber(sorter1));
// [12, 17, 37, 44, 45]

console.log("-------------------------------");
console.log("------------------------------");

// function to deliver the highest sum of an
// array of arrays

const bankAccounts = [
  [1, 2, 3], // 6
  [3, 4, 5], // 12
  [5, 6, 7] // 18
];

const bankAccounts2 = [
  [4, 5, 6], // 15
  [20, 37, 44], // 101
  [23, 14, 18] // 55
];

const bankAccounts3 = [
  [1, 2, 3, 4, 5], // 15
  [10, 15, 50], // 75
  [14, 14] // 28
];

function accountSum(array) {
  let sumArray = [];

  array.forEach(function (inner) {
    let sum = 0;
    let i = 0;

    for (; i < inner.length; i++) {
      sum = sum + inner[i];
      if (i == inner.length - 1) {
        sumArray.push(sum);
      }
    }
  });
  console.log(sumArray);
  let sortedSum = sortNumber(sumArray);
  console.log(sortedSum[sortedSum.length - 1]);
}
accountSum(bankAccounts3);
// 75
accountSum(bankAccounts2);
// 101
accountSum(bankAccounts);
// 18

console.log("----------------------------");
console.log("-------------------------------");

// another function to determine
// highest acount number

function accountSum2(array) {
  let sumArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let inner = array[i];
    let sum = 0;
    for (let j = 0; j < inner.length; j++) {
      sum = sum + inner[j];
      if (j == inner.length - 1) {
        sumArray.push(sum);
      }
    }
  }
  console.log(sumArray);
  let sortedSum2 = sortNumber(sumArray);
  console.log(sortedSum2[sortedSum2.length - 1]);
}

accountSum2(bankAccounts2);
// 101
accountSum2(bankAccounts3);
// 75
accountSum2(bankAccounts);
// 18

console.log("-------------------------------");
console.log("----------------------------");
