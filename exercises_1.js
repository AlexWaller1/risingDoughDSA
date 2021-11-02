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
