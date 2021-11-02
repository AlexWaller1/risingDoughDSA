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
