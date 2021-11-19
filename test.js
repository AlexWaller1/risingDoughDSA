let person = {
  first: "James",
  last: "Baker",
  alias: "JB"
};

console.log(person);

let { first, last, alias: nickName } = person;

console.log(nickName);

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

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
