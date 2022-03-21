console.log("Hello Oa");

// First Unique Character in a String

// Given a string s, find the first non-repeating character
// in it and return its index. If it does not exist, return -1

let string1 = "happen";
// desired output: 0

let string2 = "loveleetcode";
// desired output: 2

let string3 = "aabb";
// desired output: -1

function firstUniqueChar(string) {
  let lettersMap = new Map();
  let duplicatesMap = new Map();
  let i = 0;

  for (; i < string.length; i++) {
    if (lettersMap.get(string.charAt(i)) != undefined) {
      duplicatesMap.set(string.charAt(i), i);
    }
    lettersMap.set(string.charAt(i), i);
  }

  let j = 0;

  for (; j < string.length; j++) {
    if (duplicatesMap.get(string.charAt(j)) == undefined) {
      return j;
    }
  }
  return -1;
}

console.log(firstUniqueChar(string1));
// 0
console.log(firstUniqueChar(string2));
// 2
console.log(firstUniqueChar(string3));
// -1

console.log("---------------------------------------");
console.log("----------------------------------------");

// Jewels and Stones

/* 

You're given strings jewels representing the types of
stones that are jewels, and stones representing the stones
you have. Each character in stones is a type of stone you
have. You want to know how many of the stones you have are 
also jewels.

Letters are case sensitive, so "a" is considered a different
type of stone from "A".

Example 1:

    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3

Example 2:

    Input: jewels = "z", stones = "ZZ"
    Output: 0


*/

let jewels1 = "aA";

let stones1 = "aAAbbbb";

let jewels2 = "z";

let stones2 = "ZZ";

function jewelsAndStones(jewels, stones) {
  let jewelMap = new Map();
  let jewelCount = 0;
  let i = 0;

  for (; i < jewels.length; i++) {
    jewelMap.set(jewels.charAt(i), i);
  }

  let j = 0;

  for (; j < stones.length; j++) {
    if (jewelMap.get(stones.charAt(j)) != undefined) {
      jewelCount++;
    }
  }
  return jewelCount;
}

console.log(jewelsAndStones(jewels1, stones1));
// 3
console.log(jewelsAndStones(jewels2, stones2));
// 0

console.log("----------------------------------------");
console.log("-----------------------------------------");

// Valid Anagram

// Given two strings s and t, return true if t is an
// anagram of s, and false otherwise

let string11 = "anagram";

let string12 = "nagaram";

let string13 = "melt";

let string14 = "mern";

function isAnagram(stringA, stringB) {
  let charsMap = new Map();
  let i = 0;

  for (; i < stringA.length; i++) {
    charsMap.set(stringA.charAt(i), i);
  }

  let j = 0;

  for (; j < stringB.length; j++) {
    if (charsMap.get(stringB.charAt(j)) == undefined) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram(string11, string12));
// true
console.log(isAnagram(string13, string14));
// false

console.log("------------------------------------");
console.log("------------------------------------");

let array21 = [4, 3, 2, 3, 4];

let array22 = [5, 6, 7, 8, 9];

console.log(array21.slice(0, 1));
// [4]
console.log(array21.slice(4, 5));
// [4]

//-----------------------------------------
//--------------------------------------

function arrayCombos(array) {
  let masterArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let j = i + 1;
    let subArray = "";
    for (; j <= array.length; j++) {
      subArray = array.slice(i, j);
      masterArray.push(subArray);
    }
  }
  return masterArray;
}

//--------------------------------------------
//-----------------------------------------

console.log(arrayCombos(array21));

let subArrays1 = arrayCombos(array21);

console.log(subArrays1);

let subArrays2 = arrayCombos(array22);

function oddNumberArrayCount(array, num) {
  let oddNumArray = [];
  let i = 0;

  for (; i < array.length; i++) {
    let j = 0;
    let oddCount = 0;
    for (; j < array[i].length; j++) {
      if (array[i][j] % 2 != 0) {
        oddCount++;
      }
      if (j == array[i].length - 1) {
        oddNumArray.push(oddCount);
      }
    }
  }

  let a = 0;
  let returnCount = 0;

  for (; a < oddNumArray.length; a++) {
    if (oddNumArray[a] == num) {
      returnCount++;
    }
  }
  return returnCount;
}

console.log(oddNumberArrayCount(subArrays1, 2));
// 4
console.log(oddNumberArrayCount(subArrays2, 3));
// 1
