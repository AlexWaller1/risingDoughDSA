// clone.js
console.log("Hello Oa");

class Robot {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  greetingsRobot() {
    console.log(`Welcome to the world, ${this.name},
      you are a ${this.model}`);
  }
}

const hank44 = new Robot("Hank-44", "Curl-Tron-2000");

hank44.greetingsRobot();
// Welcome to the world, Hank-44, you are a Curl-Tron-2000
const pizzaWarriors = [
  {
    name: "Rising Dough",
    species: "Robot",
    model: "Window Cleanse 10.5"
  },
  {
    name: "Beezer",
    species: "Dachshund",
    model: "N/A"
  },
  {
    name: "Brooke Nevins",
    species: "Human",
    model: "N/A"
  },
  {
    name: "Bodhi",
    species: "Dachshund",
    model: "N/A"
  },
  {
    name: "Timber-Tron",
    species: "Robot",
    model: "Timber_Io 34"
  },
  {
    name: "Chipper",
    species: "Dachshund",
    model: "N/A"
  },
  {
    name: "Sal Campana",
    species: "Human",
    model: "N/A"
  },
  {
    name: "Stokes Mitchell",
    species: "Human",
    model: "N/A"
  },
  {
    name: "Croix James",
    species: "Pickerel",
    model: "N/A"
  },
  {
    name: "Laila Blanco",
    species: "Human",
    model: "N/A"
  },
  {
    name: "Dex Garrity",
    species: "Robot",
    model: "Robo-Welder 4000"
  }
];

console.log(pizzaWarriors[0].name);
// Rising Dough
console.log(pizzaWarriors[0].name == "Rising Dough");
// true
console.log(pizzaWarriors[0].model);
// Window Cleanse 10.5
if (pizzaWarriors[0].name == "Rising Dough") {
  console.log(pizzaWarriors[0].name);
  // Rising Dough
  console.log("---------------------------");
  let robot = "";
  let i = 0;
  for (; i < pizzaWarriors.length; i++) {
    if (pizzaWarriors[i].species == "Robot") {
      robot = new Robot(
        `${pizzaWarriors[i].name}`,
        `${pizzaWarriors[i].model}`
      );
      robot.greetingsRobot();
      // Welcome to the world, Rising Dough, you are a
      // Window Cleanse 10.5
      // Welcome to the world, Timber-Tron, you are a
      // Timber_Io 34
      // Welcome to the world, Dex Garrity, you are a
      // Robo-Welder 4000
    }
  }
}

console.log(9 === "9");
// false
console.log(9 == "9");
// true
if (9 == "9" || 9 === "9") {
  console.log("----------------------------");
  let robo1 = pizzaWarriors
    .filter(r1 => r1.species == "Dachshund")
    .map(r2 => r2.name);
  console.log(robo1);
  // ['Beezer', 'Bodhi', 'Chipper']
}

console.log("---------------------------------------------");
console.log("---------------------------------------------");

function aAndAn(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let rString = `Do you have a ${string}?`;
  if (vowels.includes(string.charAt(0))) {
    rString = `Do you have an ${string}?`;
  }
  return rString;
}

console.log(aAndAn("Diet Coke"));
// Do you have a Diet Coke?
console.log(aAndAn("apple"));
// Do you have an apple?
console.log(aAndAn("pizza slice"));
// Do you have a pizza slice?
console.log("------------------------------------------");
console.log("-----------------------------------------");

let volvoStationwagon = {
  model: "Volvo Stationwagon",
  mpg: 31,
  tankSize: 18.8
};

let volvoList = [
  {
    name: "Reese's Peanut Butter Cups",
    price: 2.89,
    quantity: 4
  },
  {
    name: "Diet Pepsi",
    price: 2.79,
    quantity: 6
  },
  {
    name: "Jack Link's Beef Jerky",
    price: 5.09,
    quantity: 6
  },
  {
    name: "Breakfast Burrito",
    price: 3.99,
    quantity: 10
  }
];

let subaruCrosstrek = {
  name: "Subaru Crosstrek",
  mpg: 33,
  tankSize: 18.5
};

let subaruList = [
  {
    name: "Diet Coke",
    price: 2.69,
    quantity: 10
  },
  {
    name: "Kitkat Bar",
    price: 2.89,
    quantity: 5
  },
  {
    name: "12 inch sub",
    price: 10.19,
    quantity: 6
  },
  {
    name: "Hershey Bar",
    price: 2.89,
    quantity: 9
  }
];

let jeepWrangler = {
  name: "Jeep Wrangler",
  mpg: 29,
  tankSize: 21.5
};

let jeepWranglerList = [
  {
    name: "Lay's Potato Chips",
    price: 3.59,
    quantity: 2
  },
  {
    name: "Cheeto's Jumbo Puffs",
    price: 4.39,
    quantity: 3
  },
  {
    name: "Hot Dog",
    price: 3.49,
    quantity: 6
  },
  {
    name: "Diet Mountain Dew",
    price: 2.54,
    quantity: 15
  }
];

let fordF150 = {
  name: "Ford F-150",
  mpg: 25,
  tankSize: 26
};

let fordF150List = [
  {
    name: "Peanut Butter Filled Pretzels",
    price: 8.79,
    quantity: 4
  },
  {
    name: "Oreo's Double Stuff",
    price: 4.82,
    quantity: 2
  },
  {
    name: "Arnold Palmer Half and Half",
    price: 0.79,
    quantity: 20
  },
  {
    name: "Twix Bar",
    price: 2.89,
    quantity: 7
  }
];

let quickCheck = {
  sixInchSub: 5.19,
  twelveInchSub: 10.19,
  fries: 2.49,
  hotDog: 3.49,
  chickenTenders: 4.49,
  softPretzel: 299,
  breakfastBagels: 4.59,
  breakfastBurrito: 3.99,
  milkShake: 3.99,
  coffee: 1.79,
  icedCoffee: 2.39,
  water: 1.24,
  redBull: 3.99,
  dietCoke: 2.69,
  dietMountainDew: 2.54,
  cokeACola: 2.69,
  mountainDew: 2.79,
  drPepper: 2.69,
  pepsi: 2.79,
  dietPepsi: 2.79,
  gatorade: 3.29,
  arizonaIceTea: 0.99,
  chocolateChipCookies: 3.59,
  donuts: 2.24,
  oreos: 2.14,
  hersheyBar: 2.89,
  kitKat: 2.89,
  reesesPeanutButterCups: 2.89,
  snickers: 2.89,
  twix: 2.89,
  mentos: 1.94
};

console.log(Object.keys(quickCheck));
/* 

['sixInchSub', 'twelveInchSub', 'fries', 'hotDog', 'chickenTenders', 
'softPretzel', 'breakfastBagels', 'breakfastBurrito', 'milkShake', 
'coffee', 'icedCoffee', 'water', 'redBull', 'dietCoke', 
'dietMountainDew', 'cokeACola', 'mountainDew', 'drPepper', 
'pepsi', 'dietPepsi', 'gatorade', 'arizonaIceTea', 'chocolateChipCookies', 
nuts', 'oreos', 'hersheyBar', 'kitKat', 'reesesPeanutButterCups', 
'snickers', 'twix', 'mentos']

*/

console.log(Object.values(quickCheck));
/* 

[5.19, 10.19, 2.49, 3.49, 4.49, 299, 4.59, 3.99, 3.99, 1.79, 2.39, 
1.24, 3.99, 2.69, 2.54, 2.69, 2.79, 2.69, 2.79, 2.79, 3.29, 0.99, 
3.59, 2.24, 2.14, 2.89, 2.89, 2.89, 2.89, 2.89, 1.94]

*/

// goal of function is to find out how much a road trip will
// have to pay for snacks on a road trip, each time the tank runs
// out of gas they will pay for their regular order at the
// minimart
console.log("------------------------------------------");
console.log("-------------------------------------------");

function miniMartTripPrice(list) {
  let totalPrice = 0;
  let i = 0;
  for (; i < list.length; i++) {
    totalPrice = totalPrice + list[i].price * list[i].quantity;
  }
  return totalPrice;
}

console.log(miniMartTripPrice(volvoList));
// 98.74
console.log(miniMartTripPrice(subaruList));
// 128.5
console.log(miniMartTripPrice(jeepWranglerList));
// 79.39
console.log(miniMartTripPrice(fordF150List));
// 80.83

console.log("-------------------------------------------");
console.log("-----------------------------------------------");

function reFuelNumber(object, tripLength) {
  let milesUntilRefuel = object.mpg * object.tankSize;
  let stopsNum = Math.round(tripLength / milesUntilRefuel);
  return stopsNum;
}

console.log(reFuelNumber(volvoStationwagon, 2130));
// 4
console.log(reFuelNumber(subaruCrosstrek, 2130));
// 3
console.log(reFuelNumber(jeepWrangler, 2130));
// 3
console.log(reFuelNumber(fordF150, 2130));
// 3

console.log("----------------------------------------------");
console.log("-------------------------------------------");

function miniMartStops(car, tripLength, carList) {
  let listPrice = miniMartTripPrice(carList);
  let refuelStopNum = reFuelNumber(car, tripLength);
  let totalPrice = listPrice * refuelStopNum;
  return totalPrice;
}

console.log(miniMartStops(volvoStationwagon, 2130, volvoList));
// 394.96
console.log(98.74 * 4);
// 394.96
console.log(miniMartStops(subaruCrosstrek, 2130, subaruList));
// 385.5
console.log(128.5 * 3);
// 385.5
console.log(miniMartStops(jeepWrangler, 2130, jeepWranglerList));
// 238.17
console.log(79.39 * 3);
// 238.17
console.log(miniMartStops(fordF150, 2130, fordF150List));
// 242.49
console.log(80.83 * 3);
// 242.49
console.log("-------------------------------------------");
console.log("--------------------------------------------");
