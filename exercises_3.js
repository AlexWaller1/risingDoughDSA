function evenOrOdd(num) {
  let outPut = num % 2 == 0 ? "even" : "odd";
  console.log(outPut);
}

evenOrOdd(2);
// even
evenOrOdd(3);
// odd
evenOrOdd(4);
// even

console.log("-----------------------------------");
console.log("---------------------------------");

function triangularNumber(num) {
  let i = 0;
  let count = 1;
  let sum = 0;
  let rString = "";
  for (; sum < num; count++) {
    sum = sum + count;
  }
  if (sum == num) {
    rString = `${num} is a triangular number`;
  } else rString = `${num} is not a triangular number`;
  console.log(rString);
  console.log(sum);
}

triangularNumber(3);
// 3 is a triangular number
triangularNumber(4);
// 4 is not a triangular number
triangularNumber(6);
// 6 is a triangular number
triangularNumber(7);
// 7 is not a triangular number
triangularNumber(15);
// 15 is a triangular number
triangularNumber(9);
// 9 is not a triangular number
triangularNumber(10);
// 10 is a triangular number
triangularNumber(1);
// 1 is a triangular number

console.log("------------------------------------------");
console.log("---------------------------------------");

function isPalindrome2(string) {
  string = string.toLowerCase();
  let string2 = string;
  string2 = string2.split("");
  string2 = string2.reverse();
  string2 = string2.join("");
  if (string2 == string) {
    return true;
  } else return false;
}

console.log(isPalindrome2("kayak"));
// true
console.log(isPalindrome2("kayak") == true);
// true
console.log("kayak".length);
// 5
console.log("".length);
// 0

console.log("------------------------------------------");
console.log("-----------------------------------------");

function longestPalindromeSubString(string) {
  let max = "";
  let i = 0;
  for (; i < string.length; i++) {
    let rString = string.charAt(i);
    for (let j = i + 1; j < string.length; j++) {
      rString = rString.concat(string.charAt(j));
      if (isPalindrome2(rString) == true) {
        if (rString.length > max.length) {
          max = rString;
        }
      }
    }
  }
  console.log(max);
}

longestPalindromeSubString("rytughskayaktuyi");
// kayak
longestPalindromeSubString("ghfjdracecargjhuyi");
// racecar

console.log("----------------------------------------");
console.log("----------------------------------------");
