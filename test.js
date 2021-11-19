let person = {
  first: "James",
  last: "Baker",
  alias: "JB"
};

console.log(person);

let { first, last, alias: nickName } = person;

console.log(nickName);

const roboInfo = [
  {
    name: "Hank-44",
    skills: ["Grilling", "Curling"],
    workPlace: "Nouvelle Milwaukee Curling Club",
    homeTown: "Nouvelle Milwaukee, Wisconsin"
  },
  {
    name: "Warren-21",
    skills: ["Grilling", "Curling"],
    workPlace: "Nouvelle Milwaukee Curling Club",
    homeTown: "Nouvelle Milwaukee, Wisconsin"
  },
  {
    name: "Mellon-Tech",
    skills: ["Guitar Playing", "Guitar Repair"],
    workPlace: "Bridgewater Guitar Repair",
    homeTown: "Somerville, New Jersey"
  },
  {
    name: "Eggplant-Head",
    skills: ["Guitar Playing", "Guitar Repair"],
    workPlace: "Bridgewater Guitar Repair",
    homeTown: "Somerville, New Jersey"
  }
];

let [robot1, robot2, robot3, robot4] = roboInfo;

console.log(robot1);
// {name: 'Hank-44', skills: Array(2),
// workPlace: 'Nouvelle Milwaukee Curling Club',
// homeTown: 'Nouvelle Milwaukee, Wisconsin'}
// homeTown: "Nouvelle Milwaukee, Wisconsin"
// name: "Hank-44"
// skills: (2) ['Grilling', 'Curling']
// workPlace: "Nouvelle Milwaukee Curling Club"

console.log(roboInfo[0].skills);
// ['Grilling', 'Curling]
console.log(roboInfo[2].skills);
// ['Guitar Playing', 'Guitar Repair']
console.log(roboInfo[1].skills[1]);
// curling
console.log(roboInfo[3].skills[0]);
// Guitar Playing

const mellonTech = {
  name: "Mellon-Tech",
  model: "Tech-O-Tron-3000",
  paintColor: "Yellow and Green",
  skills: {
    skill1: "Guitar Playing",
    skill2: "Guitar Repair"
  },
  workPlace: "Bridgewater Guitar Repair",
  homeTown: "Somerville, New Jersey",
  friends: {
    friend1: "Eggplant-Head",
    friend2: "Haley Jackson"
  }
};

let {
  name,
  model,
  paintColor,
  skills: { skill1, skill2 },
  workPlace,
  homeTown,
  friends: { friend1: eggPlantHead, friend2: haleyJackson }
} = mellonTech;

console.log(name);
// Mellon-Tech
console.log(model);
// Tech-O-Tron-3000
console.log(paintColor);
// Yellow and Green
console.log(skill1);
// Guitar Playing
console.log(skill2);
// Guitar Repair
console.log(workPlace);
// Bridgewater Guitar Repair
console.log(homeTown);
// Somerville, New Jersey
console.log(eggPlantHead);
// Eggplant-Head
console.log(haleyJackson);
// Haley Jackson

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

let [robo1, robo2, robo3, robo4] = robots;

console.log(robo1);
// Hank-44
console.log(robo2);
// Warren-21
console.log(robo3);
// Mellon-Tech
console.log(robo4);
// Eggplant-Head

console.log("----------------------------------");
console.log("------------------------------------");

let roboSort = robot => robot.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(roboSort(roboInfo));
// { name: 'Eggplant-Head' }
// { name: 'Hank-44' }
// { name: 'Mellon-Tech' }
// { name: 'Warren-21' }
