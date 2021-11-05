// Exercises 1
console.log("Hello, Saturn");

// function to add two numbers

let addNums = (num1 = 3, num2 = 6) => console.log(num1 + num2);

addNums();
// 9
addNums(17, 20);
// 37

addNums(7 * 3, 11 * 4);
// 65

console.log("---------------------------------------------");
console.log("-----------------------------------------------");

// function to find the difference of two numbers

let subtractNums = (num1 = 34, num2 = 14) => console.log(num1 - num2);

subtractNums();
// 20

subtractNums(44, 37);
// 7

subtractNums(37, 44);
// -7

console.log("----------------------------------------------------");
console.log("----------------------------------------------------");

// function using string interpolation

const hiFriend = (friendName = "Bodhi") =>
  console.log(`
How's it going, ${friendName}!?`);

hiFriend();
// How's it going, Bodhi?!

hiFriend("Beezer");
// How's it going, Beezer!?

hiFriend("Chipper");
// How's it going, Chipper!?

console.log("-----------------------------------------");
console.log("------------------------------------------------");

// function that pushes even numbers to one array and odd numbers to another
// uses ternary operator and switch statements

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddEvenArrayPush(array) {
  let i = 0;
  let oddNumbers = [];
  let evenNumbers = [];

  for (; i < array.length; i++) {
    let num2 = array[i] % 2 == 0 ? true : false;

    switch (num2) {
      case true:
        evenNumbers.push(array[i]);
        break;
      case false:
        oddNumbers.push(array[i]);
        break;
    }
  }
  console.log(oddNumbers);
  console.log(evenNumbers);
}

oddEvenArrayPush(nums1);
// [1, 3, 5, 7, 9]
// [2, 4, 6, 8, 10]

console.log("-------------------------------------------------------");
console.log("------------------------------------------------------");

// function returns the parameter number to the power of 2

let powerOf2 = (num1 = 7) => Math.pow(num1, 2);

console.log(powerOf2());
// 49
console.log(powerOf2(10));
// 100

console.log("-----------------------------------------------------------");
console.log("--------------------------------------------------------");

// function returns a string that interpolates the square root
// of the number parameter

function squareRoot(num = 9) {
  let sq1 = Math.sqrt(num);
  console.log(`The square root of ${num} is ${sq1}`);
}

squareRoot();
// The square root of 9 is 3
squareRoot(81);
// The square root of 81 is 9
squareRoot(27);
// The square root of 27 is 5.2

console.log("----------------------------------------------------------");
console.log("----------------------------------------------------------");

// function finds the product of 2 numbers

let productOf = (num1 = 9, num2 = 6) => console.log(num1 * num2);

productOf();
// 54
productOf(5);
// 30
productOf(24, 65);
// 1560

console.log("------------------------------------------------------------");
console.log("-------------------------------------------------------");

// anonymous function returns a value with no parameters

let javaScript = () => "JavaScript is Awesome!";

console.log(javaScript());
// JavaScript is Awesome!

console.log("-----------------------------------------------------------");
console.log("-----------------------------------------------------");

// function returns the cubed number of the number parameter

let numCubed = (num1 = 4) => Math.pow(num1, 3);

console.log(numCubed());
// 64
console.log(numCubed(3));
// 27
console.log(numCubed(10));
// 1000

console.log("--------------------------------------------------");
console.log("----------------------------------------------");

// function returns the bigger of two number

let maxNumber = (num1 = 9, num2 = 14) => Math.max(num1, num2);

console.log(maxNumber());
// 14
console.log(maxNumber(94, 105));
// 105
console.log(maxNumber(307, 672));
// 673

console.log("--------------------------------------------");
console.log("---------------------------------------------------");

// function evaluates whether a number is even or not

function evenNumberTest(num1 = 10) {
  if (num1 % 2 == 0) {
    console.log(`${num1} is an even number`);
  } else console.log(`${num1} is an odd number`);
}

evenNumberTest();
// 10 is an even number
evenNumberTest(9);
// 9 is an odd number
evenNumberTest(37);
// 37 is an odd number
evenNumberTest(37.4);
// 37.4 is an odd number

console.log("---------------------------------");
console.log("-------------------------------");

// function finds the longest common prefix
// for an array of strings

const timberTron = ["Timber-Tron", "Timber_Io"];
const ps4 = ["Nintendo", "Playstation"];
let empty = [];
let one1 = ["Playstation"];

function longestCommonPrefix(array) {
  if (array.length < 2) console.log("Not Enough Elements");

  let prefix = array[0];
  let i = 1;

  for (; i < array.length; i++) {
    while (array[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length == 0) console.log("no common prefix");
    }
  }
  console.log(prefix);
}

longestCommonPrefix(timberTron);
// Timber
longestCommonPrefix(ps4);
// no common prefix
longestCommonPrefix(empty);
// Not Enough Elements
longestCommonPrefix(one1);
// Not Enough Elements, Playstation

console.log("-------------------------------------------------");
console.log("--------------------------------------------------");

function isPalindrome(string) {
  let index1 = 0;
  // first index of string
  let index2 = string.length - 1;
  // last index of string
  let rString = "";

  for (; index1 < index2; index1++, index2--) {
    if (string.charAt(index1++) != string.charAt(index2--)) {
      rString = `${string} is not a palindrome`;
    } else rString = `${string} is a palindrome`;
  }
  console.log(rString);
}

isPalindrome("kayak");
// kayak is palindrome
isPalindrome("controller");
// controller is a palindrome
// will have to look into this
isPalindrome("ribbon");
// ribbon is not palindrome
isPalindrome("webex");
// webex is not a palindrome
isPalindrome("racecar");
// racecar is a palindrome

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

// a second function to evaluate for a palindrome in JavaScript

function isPalindrome2(string) {
  let rString = "";
  let string2 = "";
  string2 = string.split("");
  string2 = string2.reverse();
  string2 = string2.join("");

  if (string == string2) {
    rString = `${string} is a palindrome`;
  } else {
    rString = `${string} is not a palindrome`;
  }
  console.log(rString);
}

isPalindrome2("kayak");
// kayak is a palindrome
isPalindrome2("dog");
// dog is not a palindrome
isPalindrome2("copper");
// copper is not a palindrome
isPalindrome2("webbex");
// webbex is not a palindrome
isPalindrome2("racecar");

// as long as we can use JavaScript this is definitely a better way

console.log("----------------------------------------------------");
console.log("-------------------------------------------------");

// find a substring that is a palindrome

let rocket = "rocket";
rocket = rocket.substring(1, rocket.length - 1);
console.log(rocket);
// ocke

function palindromeSubstring(string) {
  let string2 = "";
  let count = 0;
  let count2 = 0;
  string2 = string.split("");
  string2 = string2.reverse();
  string2 = string2.join("");
  console.log(string2);

  //   while (string != string2) {
  //     string = string.substring(string.charAt((count++, string.length - 1)));
  //     string2 = string2.substring(string.charAt((count2++, string2.length - 1)));
  //   }
  //   console.log(string);
}

palindromeSubstring("corarod");
// This is not quite working but we are on the right track
// will come back to this

console.log("------------------------------------------------");
console.log("-----------------------------------------------");

// This function is to reverse a number
let num22 = 22;
console.log(num22.toString());
// 22 as a string

function reverseNumber(num = 37) {
  let numString = num.toString();
  numString = numString.split("");
  numString = numString.reverse();
  numString = numString.join("");
  let reverseNum = parseInt(numString);
  console.log(reverseNum);
}

reverseNumber();
// 73
reverseNumber(109);
// 901
reverseNumber(-95);
// 59

console.log("----------------------------------------------------");
console.log("---------------------------------------------------");

// function returns a number parameter to the xth power of the
// second number parameter

let powerOfN = (num1 = 2, num2 = 6) => Math.pow(num1, num2);

console.log(powerOfN());
// 64
console.log(powerOfN(7, 9));
// 40353607
console.log(powerOfN(2, 5));
// 32

console.log("----------------------------------------------------");
console.log("---------------------------------------------------");

// function returns how many numbers between the two parameters
// are divisible by 3

function divisibleBy3(num1 = 1, num2 = 100) {
  let i = num1 + 1;
  let count = 0;
  let rString = "";

  for (; i < num2; i++) {
    if (i % 3 == 0) {
      count = count + 1;
    }
  }
  rString = `There are ${count} numbers between ${num1} and ${num2}
  divisible by 3`;
  console.log(rString);
}

divisibleBy3();
// There are 33 numbers between 1 and 100 divisible by 3
divisibleBy3(3, 9);
// There is one number between 3 and 9 divisible by 3
divisibleBy3(27, 54);
// There are 8 numbers between 27 and 54 divisible by 3

console.log("----------------------------------------------------");
console.log("--------------------------------------------------");

// function will return a factorial of a number

function factorial(num1 = 5) {
  let i = num1;
  let count = 1;
  let rString = "";

  for (; i > 0; i--) {
    count = count * i;
  }
  rString = `${num1}! = ${count}`;
  console.log(rString);
}

factorial();
// 5! = 120
factorial(4);
// 4! = 24
factorial(9);
// 9! = 362880
factorial(2);
// 2! = 2

console.log("------------------------------------------------------");
console.log("-----------------------------------------------------");

// function will return the current date and time

function dateAndTime() {
  let date2 = new Date();
  console.log(date2);
}

dateAndTime();
// Tue Nov 02 2021 23:07:06 GMT-0400 (Eastern Daylight Time)

console.log("--------------------------------------------------");
console.log("---------------------------------------------------");

// function to find minimum and maximum values of an array

let array2 = [37, 6, 4, 98, 56, 34, 2, 5];

let array3 = [45, 76, 23, 34, 22, 21, 4, 45];

function minMax(array) {
  array.sort();
  let max = array[array.length - 1];
  let min = array[0];
  let rString = `${max} is the max and ${min} is the min`;
  console.log(rString);
}

minMax(array2);
// 98 is the max and 2 is the min
minMax(array3);
// didn't give the right answer

// keep this in mind that this is unreliable
// we could always convert array elements to strings and then
// back to integers if we really have to use sort()

console.log("------------------------------------------");
console.log("---------------------------------------------------");

function minMax2(array) {
  if (array.length == 0) console.log("array is empty");

  let i = 0;
  let min = array[0];
  let max = array[0];
  let rString = 0;

  for (; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  rString = `${max} is the max and ${min} is the min`;
  console.log(rString);
}

minMax2(array2);
// 98 is the max and 2 is the min
minMax2(array3);
// 76 is the max and 4 is the min
minMax2(empty);
// array is empty

console.log("2" < "3");
// true

console.log("-----------------------------------------");
console.log("-------------------------------------------");

// function to return difference in upvotes and downvotes

let votes1 = { upVotes: 12, downVotes: 9 };

let votes2 = { upVotes: 44, downVotes: 37 };

let voteCount = votes => votes.upVotes - votes.downVotes;

console.log(voteCount(votes1));
// 3
console.log(voteCount(votes2));
// 7

console.log("-------------------------------------------");
console.log("-----------------------------------------");

// fizzBuzz function

function fizzBuzz(num2 = 1, num = 15) {
  let i = num2;

  for (; i <= num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Fizz");
    } else if (i % 3 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();

/* 

1
2
Buzz
4
Fizz
Buzz
7
8
Buzz
Fizz
11
Buzz
13
14
FizzBuzz

*/

fizzBuzz(15, 20);
/* 

FizzBuzz
16
17
Buzz
19
Fizz

*/

console.log("-------------------------------------------");
console.log("----------------------------------------");

// function to get random element from array parameter

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let getRandom = array => array[Math.floor(Math.random() * array.length)];

console.log(getRandom(robots));
// Hank-44
// Warren-21
// Eggplant-Head
// Warren-21
// Mellon-Tech
// Hank-44
// Hank-44

console.log("------------------------------------------");
console.log("------------------------------------------");
