console.log("Hello Oa");

const hammerHead = {};

hammerHead["name"] = "Hammerhead";
hammerHead["occupation"] = "Pickerel Cola Space Truck Driver";
hammerHead["homePlanet"] = "Venice Sands 5";
hammerHead["hasPickerelCola"] = true;
hammerHead["friends"] = ["Taylor", "Harvey", "Wibaux"];

console.log(hammerHead);
console.log(hammerHead.name);
// Hammerhead
console.log(hammerHead.occupation);
// Pickerel Cola Space Truck Driver
console.log(hammerHead.homePlanet);
// Venice Sands 5
console.log(hammerHead.hasPickerelCola);
// true
console.log(hammerHead.friends[0]);
// Taylor
console.log(hammerHead.friends[1]);
// Harvey
console.log(hammerHead.friends[2]);
// Wibaux
console.log("---------------------------------------------");
console.log("--------------------------------------------");

/*

Using Promises

A promise is an object representing the eventual completion or 
failure of an asynchronous operation. Since most people are 
consumers of already-created promises, this guide will explain
consumption of returned promises before explaining how to create
them.

Essentially, a promise is a returned object to which you attach
callbacks, instead of passing callbacks into a function.



*/

let successCallBack = () => "success";

let errorCallBack = () => "error";

trueValue = param => {
  if (param) {
    return true;
  } else {
    return false;
  }
};

console.log(trueValue(1));
// true

//..............................................................

const robots = [];
console.log(robots);
// []

let displayRobots = () => robots;

let addRobot = robot => {
  robots.push(robot);
};

addRobot("Hank-44");
addRobot("Warren-21");
addRobot("Mellon-Tech");
addRobot("Eggplant-Head");

console.log(displayRobots());
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']

let rocketPower = [];

let displayRocketPower = () => console.log(rocketPower);

let newRocketPower = (name, homeTown) => {
  return new Promise((resolve, reject) => {
    let newElement = { name: name, homeTown: homeTown };

    rocketPower.push(newElement);

    const error = false;

    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
};

console.log(
  newRocketPower("Raymundo Rocket", "Ocean Shores").then(displayRocketPower)
);

console.log(
  newRocketPower("Otto Rocket", "Ocean Shores").then(displayRocketPower)
);

console.log(newRocketPower(false, false).then(displayRocketPower));

const wibaux = {};

console.log(wibaux);
wibaux["name"] = "Wibaux";
console.log(wibaux);
// {name: 'Wibaux'}
console.log(Object.keys(wibaux));
// ['name']
console.log(Object.values(wibaux));
// ['Wibaux']

let displayWibaux = () => console.log(wibaux);

displayWibaux();
// {name: 'Wibaux'}
console.log(typeof hammerHead);
// object
console.log(typeof hammerHead == "object");
// true

let displayObject = objName => {
  if (typeof objName == "object") {
    console.log(objName);
  } else {
    console.log("param must be an object");
  }
};

displayObject(hammerHead);
// logs hammerHead object to console
displayObject(9);
// param must be an object
displayObject("The Gilded Age");
// param must be an object

let addKeyValue = (object, key, value) => {
  return new Promise((resolve, reject) => {
    object[key] = value;

    const error = false;

    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
};

addKeyValue(wibaux, "species", "Whitefish").then(displayObject(wibaux));
// {name: 'Wibaux', species: 'whitefish}
addKeyValue(wibaux, "homePlanet", "Hardin-37").then(displayObject(wibaux));
// {name: 'Wibaux', species: 'Whitefish', homePlanet: 'Hardin-37'}

console.log("Mellon-Tech");

console.log(robots);
