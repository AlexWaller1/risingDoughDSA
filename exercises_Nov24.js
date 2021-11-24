console.log("Hello Oa");
/* 

Create a function takes in an array(slot macine outcome) and
returns true if all elements in the array are identical, and
false otherwise. The array will contain 4 elements

*/

let slots1 = ["#", "#", "#", "#"];

let slots2 = ["%", "%", "*", "%"];

let slots3 = ["*", "*", "*", "*"];

let slots4 = ["!", "&", "&", "="];

function slotMachine(array) {
  let i = 0;
  let trueOrFalse = "";
  for (; i < array.length; i++) {
    if (array[i] == array[i + 1] || array[i] == array[i - 1]) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
      break;
    }
  }
  console.log(trueOrFalse);
}

slotMachine(slots1);
// true
slotMachine(slots2);
// false
slotMachine(slots3);
// true
slotMachine(slots4);
// false

console.log("--------------------------------------------");
console.log("------------------------------------------");
