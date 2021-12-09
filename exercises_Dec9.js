console.log("Hello Oa");
// Hello Oa

/* 

# Is numeric

Create a function that accepts a string and returns 'true' if the 
string is a valid number, or 'false' if it is not.

# Instructions

- Loop through the given string and determine if it is a valid number.

- A valid number can only contain:

    - Numeric characters

    - A maximum of one decimal point placed anywhere in the string

    - One '+' or '-' character at the start of the string.

- For example, given the following str:

var str = "-0123.00";

- The function should return 'true'

- Given the following str:

var str = "+-a13";

- The function should return 'false'

- Attempt to accomplish this without using any built-in methods such
as 'isNan', 'parseInt', 'Number', 'parseFloat', charChodeAt', etc.

- Implicit type conversion is also not allowed. I.e. using arithmetic
or comparison operators on the given string such as '-', '+', '<', '>',
etc.


*/
console.log(typeof "2" == "number");
console.log("---------------------------------------------------");

let numString1 = "-0123.00";

let numString2 = "+-a13";

let numString3 = "b13";

let numString4 = "-9872";

function isNumeric(string) {
  let numChars = [
    ".",
    "+",
    "-",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  string = string.split("");
  let count1 = 0;
  let count2 = 0;
  let i = 0;
  for (; i < string.length; i++) {
    if (!numChars.includes(string[i])) {
      return false;
    } else if (string[i] == ".") {
      count1++;
    } else if (string[i] == "+" || string[i] == "-") {
      count2++;
    }
  }
  if (count1 > 1 || count2 > 1) {
    return false;
  } else return true;
}

console.log(isNumeric(numString1));
// true
console.log(isNumeric(numString2));
// false
console.log(isNumeric(numString3));
// false
console.log(isNumeric(numString4));
// true

// O(n^2) :(

console.log("---------------------------------------------");
console.log("------------------------------------------");

/* 

Write a function that reverses a string. The input string is given
as an array of characters char[].

Do not allocate extra space for another array, you must do this by
modifying the input array in place with with O(1) extra memory.

You masy assume all the characters consist of printable ascii
characters consist of printable ascii characters

Example 1:

Input: ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

*/

let chars1 = ["h", "e", "l", "l", "o"];

function reverseChars(array) {
  array.reverse();
  console.log(array);
}

reverseChars(chars1);
// ['o', 'l', 'l', 'e', 'h']
