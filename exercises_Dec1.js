console.log("Hello Oa");

// write a function which returns the number of true values there are is an
// array.

let trueFalse1 = [true, false, true, true, true, false, true];
// true count: 5

let trueFalse2 = [false, false, false, true, false, false, false];
// true count: 1

let trueFalse3 = [];
// true count: 0

function countTrue(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (array[i] == true) {
      count++;
    }
  }
  return count;
}

console.log(countTrue(trueFalse1));
// 5
console.log(countTrue(trueFalse2));
// 1
console.log(countTrue(trueFalse3));
// 0

console.log("---------------------------------------------");
console.log("---------------------------------------------");

/* 

Length of a Nested Array

The length property on an array will return the number of elements
in the array. For example, the array below contains 2 elements:

[1, [2, 3]]

Suppose we instead wanted to know the total number of non-nested in
the nested array. In the above case, [1, [2, 3]] contains 3 non-nested
items, 1, 2, and 3.

Examples

getLength([1, [2, 3]]) => 3

getLength([1, [2, [3, 4]]]) => 4

*/

let length1 = [1, [2, 3]];

let length2 = [1, [2, [3, 4]]];

function getLength(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] == "number") {
      count++;
    } else count = count + array[i].length;
  }
  console.log(count);
}

getLength(length1);
// 3

console.log("--------------------------------------------");
console.log("------------------------------------------------");

function getLength2(array) {
  let count = 0;
  let i = 0;

  for (; i < array.length; i++) {
    if (typeof array[i] == "number") {
      count++;
    } else {
      for (let j = 0; j < array[i].length; j++) {
        if (typeof array[i][j] == "number") {
          count++;
        } else count = count + array[i][j].length;
      }
    }
  }
  console.log(count);
}

getLength2(length2);
// 4
getLength2(length1);
// 3

console.log("----------------------------------------------");
console.log("------------------------------------------");
