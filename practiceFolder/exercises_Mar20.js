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

let string15 = "mernn";

// split
// sort
// join

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

console.log("--------------------------------------");
console.log("--------------------------------------");

console.log("Technical Questions");

/* 


1. What's the difference between functional and class components

Functional Components: Functional components are some of the
more common components that we will come across while working 
with React. These are simply JavaScript functions. We can create
a functional component to React by writing a JavaScript function

const car = () => {
  return <h2>Hi, I am also a Car!</h2>;
}

Class Component: This is the bread and butter of most modern web apps built in
ReactJS. These components are simple classes(made up of multiple functions that
add functionality to the application).

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}



2. What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features
from function components. Hooks don't work inside classes -- they let you use
React without classes. 

3. Does React useState Hook update immediately?

When working with React a lot of people expect state changes to reflect immediately
both in a class and functional component with React hooks. This, however, is not
the case. State updates using this. setState and useState do not immediately
mutate the state but creates a pending state transition.


  


*/

let radar = "radar";
// 2

let racecar = "racecar";
// 3

let kayak = "kayak";
// 2

let sodaSoda = "sodasoda";
// -1

let hammerHead = "hammerhead";
// 5

let wire = "wire";
// 0

function firstNonRepeat2(string) {
  let charsMap = new Map();

  let i = 0;

  for (; i < string.length; i++) {
    if (!charsMap.has(string.charAt(i))) {
      charsMap.set(string.charAt(i), 1);
    } else {
      charsMap.set(string.charAt(i), 2);
    }
  }

  let j = 0;

  for (; j < string.length; j++) {
    if (charsMap.get(string.charAt(j)) == 1) {
      return j;
    }
  }
  return -1;
}

console.log(firstNonRepeat2(radar));
// 2
console.log(firstNonRepeat2(racecar));
// 3
console.log(firstNonRepeat2(kayak));
// 2
console.log(firstNonRepeat2(sodaSoda));
// -1
console.log(firstNonRepeat2(hammerHead));
// 5
console.log(firstNonRepeat2(wire));

console.log("------------------------------------");
console.log("--------------------------------");

let testSet = new Set();

testSet.add(1);
testSet.add(2);
testSet.add(3);
testSet.add(4);
testSet.add(5);

console.log(testSet.has(1));
// true
console.log(testSet.has(2));
// true
console.log(testSet.has(3));
// true
console.log(testSet.has(4));
// true
console.log(testSet.has(5));
// true

console.log("-------------------------------------");
console.log("----------------------------------");

let jewels3 = "aA";

let stones3 = "aAAbbbb";

let jewels4 = "z";

let stones4 = "ZZ";

function jewelsAndStones2(jewels, stones) {
  let jewelsSet = new Set();
  let jewelCount = 0;

  let i = 0;

  for (; i < jewels.length; i++) {
    jewelsSet.add(jewels.charAt(i));
  }

  let j = 0;

  for (; j < stones.length; j++) {
    if (jewelsSet.has(stones.charAt(j))) {
      jewelCount++;
    }
  }
  return jewelCount;
}

console.log(jewelsAndStones2(jewels3, stones3));
// 3
console.log(jewelsAndStones2(jewels4, stones4));
// 0

console.log("-------------------------------------");
console.log("---------------------------------");

let anagram21 = "elbow";

let anagram22 = "below";

let anagram23 = "peach";

let anagram24 = "cheap";

let anagram25 = "angel";

let anagram26 = "glean";

let anagram27 = "mern";

let anagram28 = "mernn";

let anagram29 = "table";

let anagram30 = "tabble";

function isAnagram2(string1, string2) {
  string1 = string1.split("");

  string2 = string2.split("");

  string1 = string1.sort((a, b) => (a > b ? 1 : -1));

  string2 = string2.sort((a, b) => (a > b ? 1 : -1));

  string1 = string1.join("");

  string2 = string2.join("");

  if (string1 == string2) {
    return true;
  }
  return false;
}

console.log(isAnagram2(anagram21, anagram22));
// true
console.log(isAnagram2(anagram23, anagram24));
// true
console.log(isAnagram2(anagram25, anagram26));
// true
console.log(isAnagram2(anagram27, anagram28));
// false
console.log(isAnagram2(anagram29, anagram30));
// false

console.log("------------------------------------");
console.log("----------------------------------");

let protoMap = new Map();

let a = "a";

protoMap.set(1, "a");

console.log(protoMap.get(1) == a);
// true

protoMap.set(2, 2);

console.log(protoMap.get(2));
// 2

protoMap.set(2, protoMap.get(2) + 1);

console.log(protoMap.get(2));
// 3

console.log("----------------------------------");
console.log("------------------------------------");

function isAnagram3(string1, string2) {
  let string1Map = new Map();
  let string2Map = new Map();
}

console.log("-----------------------");
console.log("----------------------");

let kayak2 = "kyaak";

let radar2 = "rrada";

let noon2 = "nono";

let level2 = "leevl";

let shelf = "shelf";

let flashlight = "flashlight";

let case2 = "case";

let book = "book";

let carerac = "carerac";

let as = "as";

let raddar = "raddar";

let xebbex = "xebbex";

let abc = "abc";

let aab = "aab";

let aaabbbbaaa = "aaabbbbaaa";

let redivider = "redivider";

// odd numbered palindrome examples
// level
// kayak
// racecar
// radar
// shared traits:
// every character appears same number of times except
// for 1
// every

// even numbered palindrome examples
// noon
// n == 2
// o == 2
//------------

// kayyak
// k == 2
// a == 2
// y == 2
//-------------

// raddar
// r == 2
// a == 2
// d == 2
//--------------

// xebbex
//--------------
// x == 2
// e == 2
// b == 2
//--------------

// aaabbbbaaa
// a == 6
// b == 4
//---------------

// acabbbbaca
// a == 4
// c == 2
// b == 4
//----------------

// acbabbabca
// a == 4
// c == 2
// b == 4
// every character must appear more than once
// every character must appear even number of times

function palindromePermutation(string) {
  let charsMap = new Map();

  let i = 0;

  for (; i < string.length; i++) {
    if (!charsMap.has(string.charAt(i))) {
      charsMap.set(string.charAt(i), 1);
    } else {
      charsMap.set(string.charAt(i), charsMap.get(string.charAt(i)) + 1);
    }
  }

  if (string.length % 2 == 0) {
    let j = 0;

    for (; j < string.length; j++) {
      let key = string.charAt(j);
      if (charsMap.get(key) % 2 != 0) {
        return false;
      }
    }
    return true;
  }

  if (string.length % 2 != 0) {
    let oddCount = 0;
    let oddChar = "";
    let k = 0;

    for (; k < string.length; k++) {
      let key = string.charAt(k);
      if (charsMap.get(key) % 2 != 0 && oddChar != key) {
        oddCount++;
        oddChar = key;
      }
      if (oddCount > 1) {
        return false;
      }
    }
    return true;
  }
}

console.log(palindromePermutation(kayak2));
// true
console.log(palindromePermutation(radar2));
// true
console.log(palindromePermutation("aaa"));
// false
