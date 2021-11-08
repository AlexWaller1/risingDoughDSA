console.log("Hello Oa");

console.log(100 * 52);

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

const robots2 = [
  {
    name: "Hank-44",
    homeTown: "Nouvelle Milwaukee"
  },
  {
    name: "Warren-21",
    homeTown: "Nouvelle Milwaukee"
  },
  {
    name: "Mellon-Tech",
    homeTown: "Somerville"
  },
  {
    name: "Eggplant-Head",
    homeTown: "Somerville"
  }
];

if (robots[2] == "Mellon-Tech") {
  let i = 0;
  for (; i < robots.length; i++) {
    console.log(robots[i]);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
  }
}

if (robots[3] == "Eggplant-Head") {
  let i = 0;
  while (i < robots.length) {
    console.log(robots[i]);
    i++;
  }
  // Hank-44
  // Warren-21
  // Mellon-Tech
  // Eggplant-Head
}

if (robots[0] == "Hank-44") {
  let i = 0;
  do {
    console.log(robots[i]);
    i++;
  } while (i < robots.length);
  // Hank-44
  // Warren-21
  // Mellon-Tech
  // Eggplant-Head
}

if (robots[1] == "Warren-21") {
  let i = robots.length - 1;
  for (; i >= 0; i--) {
    console.log(robots[i]);
    // Eggplant-Head
    // Mellon-Tech
    // Warren-21
    // Hank-44
  }
}

console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

if (robots[0] == "Hank-44") {
  let robo1 = robots2
    .filter(function (robo2) {
      return robo2.homeTown == "Somerville";
    })
    .map(function (robo3) {
      return robo3.name;
    });
  console.log(robo1);
  // ['Mellon-Tech', 'Eggplant-Head']
}

if (robots[1] == "Warren-21") {
  let i = 0;
  let nouvelleMilwaukee = [];
  for (; i < robots2.length; i++) {
    if (robots2[i].homeTown == "Nouvelle Milwaukee") {
      console.log(robots2[i].name);
      // Hank-44
      // Warren-21
      nouvelleMilwaukee.push(robots2[i].name);
    }
  }
  console.log(nouvelleMilwaukee);
  // ['Hank-44', 'Warren-21']
}
