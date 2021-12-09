console.log("Hello Oa");

const robots = ["Hank-44", "Warren-21", "Mellon-Tech", "Eggplant-Head"];

console.log(robots[0]);
// Hank-44
console.log(robots[1]);
// Warren-21
console.log(robots[2]);
// Mellon-Tech
console.log(robots[3]);
// Eggplant-Head

if (robots[2] == "Mellon-Tech") {
  for (i in robots) {
    console.log(robots[i]);
    // Hank-44
    // Warren-21
    // Mellon-Tech
    // Eggplant-Head
  }
}

if (robots[3] == "Eggplant-Head") {
  for (i in robots) {
    if (i == 2) {
      console.log(robots[i]);
      // Mellon-Tech
    }
  }
}

const hammerHead = [
  "Hammerhead",
  "Taylor",
  "Geometry Man",
  "Harvey",
  "Wibaux",
  "The Cosmic Trout"
];

console.log(hammerHead[0]);
// Hammerhead
console.log(hammerHead[4]);
// Wibaux

if (hammerHead[4] == "Wibaux") {
  hammerHead.forEach(function (hh2) {
    console.log(hh2);
    // Hammerhead
    // Taylor
    // Geometry Man
    // Harvey
    // Wibaux
    // The Cosmic Trout
  });
}
