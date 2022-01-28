// cloneMatrix.js

console.log("Hello Oa");

const risingDough = {};

risingDough["name"] = "Rising Dough";

console.log(risingDough.name);
// Rising Dough

risingDough["robotType"] = "Window Cleanse 10.5";

console.log(risingDough.robotType);
// Window Cleanse

risingDough["favoriteFood"] = "Pizza";

console.log(risingDough.favoriteFood);
// Pizza

risingDough["favoriteSoda"] = "Pickerel Cola";

console.log(risingDough.favoriteSoda);
// Pickerel Cola

console.log(risingDough);
// {name: 'Rising Dough', robotType: 'Window Cleanse 10.5',
//  favoriteFood: 'Pizza', favoriteSoda: 'Pickerel Cola'}

console.log(Object.keys(risingDough));
// ['name', 'robotType', 'favoriteFood', 'favoriteSoda']
console.log(Object.values(risingDough));
// ['Rising Dough', 'Window Cleanse 10.5', 'Pizza', 'Pickerel Cola']

risingDough["friends"] = [
  "Brooke Nevins",
  "Brayden Saskatoon",
  "Dex Garrity",
  "Sal Campana"
];

console.log(risingDough.friends[0]);
// Brooke Nevins
console.log(risingDough.friends[1]);
// Brayden Saskatoon
console.log(risingDough.friends[2]);
// Dex Garrity
console.log(risingDough.friends[3]);
// Sal Campana
console.log("----------------------------------------");
console.log("--------------------------------------------");

class Robot {
  constructor(name, model, paintColor) {
    this.name = name;
    this.model = model;
    this.paintColor = paintColor;
  }

  changeName(newName) {
    if (typeof newName == "string") {
      this.name = newName;
    } else return "Name must be a string";
  }

  changeModel(newModel) {
    if (typeof newModel == "string") {
      this.model = newModel;
    } else return "New Model Name must be a string";
  }

  changePaintColor(newColor) {
    if (typeof newColor == "string") {
      this.paintColor = newColor;
    }
  }
}

const mellonTech = new Robot("Mellon-Tech", "Modified-Air-Io", "Yellow");

console.log(mellonTech.name);
// Mellon-Tech
console.log(mellonTech.model);
// Moified-Air-Io
console.log(mellonTech.paintColor);
// Yellow
mellonTech.changePaintColor("Yellow and Green");
console.log(mellonTech.paintColor);
// Yellow and Green
mellonTech.changeModel("Air-Io-29");
console.log(mellonTech.model);
// Air-Io-29

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let roboJSON = JSON.stringify(robots);

localStorage.setItem("robots-list", roboJSON);

console.log(localStorage);

console.log(localStorage.getItem("robots-list"));
// ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"]
// in JSON

let roboData1 = localStorage.getItem("robots-list");

let roboData2 = JSON.parse(roboData1);

console.log(roboData2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head']
console.log(roboData2[0]);
// Hank-44
console.log(roboData2[1]);
// Warren-21
console.log(roboData2[2]);
// Mellon-Tech
console.log(roboData2[3]);
// Eggplant-Head

console.log(robots == roboData2);
// false
console.log(robots);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head'];
console.log(roboData2);
// ['Hank-44', 'Warren-21', 'Mellon-Tech', 'Eggplant-Head'];
console.log(robots[2] == roboData2[2]);
// true
console.log("----------------------------------------------");
console.log("----------------------------------------");

const spiderVerse = {};

spiderVerse[0] = { name: "Peter Parker", alias: "Spider-Man" };

spiderVerse[1] = { name: "Ben Reilly", alias: "Scarlett Spider" };

console.log(spiderVerse);
/* 

{
    0: {name: "Peter Parker", alias: "Spider-Man"}
    1: {name: "Ben Reilly", alias: "Scarlet Spider"}
}

*/

console.log(spiderVerse[0]);
// {name: 'Peter Parker', alias: 'Spider-Man'}
console.log(spiderVerse[1]);
// {name: 'Ben Reilly', alias: 'Scarlet Spider'}
spiderVerse[2] = { name: "Logan", alias: "Wolverine" };
console.log(spiderVerse);
/* 

0: {name: 'Peter Parker', alias: 'Spider-Man'}
1: {name: 'Ben Reilly', alias: 'Scarlett Spider'}
2: {name: 'Logan', alias: 'Wolverine'}

*/
console.log(spiderVerse[1].alias);
// Scarlett Spider
delete spiderVerse[2];
console.log(spiderVerse);
/* 

0: {name: 'Peter Parker', alias: 'Spider-Man'}
1: {name: 'Ben Reilly', alias: 'Scarlett Spider'}

*/
console.log("-----------------------------------------------");
console.log("---------------------------------------------");

class ArrayMaker {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  push(element) {
    this.array[this.length] = element;
    this.length++;
  }

  pop() {
    delete this.array[this.length - 1];
    this.length--;
  }
}

const batClones = new ArrayMaker();

console.log(batClones.length);
// 0
console.log(batClones.array);
// {}
batClones.push({ name: "Bruce Wayne", alias: "Batman Beyond" });
console.log(batClones.array);
/* 

{
    0: {name: 'Bruce Wayne', alias: 'Batman Beyond'}
}

*/
console.log(batClones.length);
// 1
console.log(batClones.array[0]);
// {name: 'Bruce Wayne', alias: 'Batman Beyond'}
console.log(batClones.array[0].name);
// Bruce Wayne
batClones.push({ name: "Jean-Paul Valley", alias: "Batman" });
console.log(batClones.length);
// 2
batClones.push({ name: "Terry McGinnis", alias: "Batman Beyond" });

batClones.push({ name: "Oswald Cobblepot", alias: "The Penguin" });

console.log(batClones.length);
// 4
console.log(batClones);
batClones.pop();
console.log(batClones.length);
// 3
console.log(batClones);

console.log("----------------------------------------");
console.log("-------------------------------------------");

let nums = {};

nums[0] = 0;

console.log(nums[0]);
nums[1] = { name: "zero" };
console.log(nums[1].name);
// zero
