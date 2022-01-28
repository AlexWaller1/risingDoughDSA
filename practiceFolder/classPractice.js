console.log("Hello Oa");

const spiderVerse = [];

class SpiderClone {
  constructor(name, alias) {
    this.name = name;
    this.alias = alias;
  }

  spiderVerseNew() {
    let newPair = { name: this.name, alias: this.alias };
    spiderVerse.push(newPair);
    console.log(spiderVerse);
  }

  greetings() {
    console.log(`Welcome to the Spiderverse, ${this.alias}!`);
  }
}

let spiderDR = new SpiderClone("Peni Parker", "SP//dr:");

spiderDR.spiderVerseNew();
// [{name: 'Peni Parker', alias: 'SP//dr:'}]
spiderDR.greetings();
// Welcome to the Spiderverse, SP//dr:!

let spiderManNoir = new SpiderClone("Peter Parker", "Spider-Man Noir");

spiderManNoir.spiderVerseNew();
// updated array
spiderManNoir.greetings();
// Welcome to the Spiderverse, Spider-Man Noir!

let scarletSpider = new SpiderClone("Ben Reilly", "Scarlet Spider");

scarletSpider.spiderVerseNew();
// updated array
scarletSpider.greetings();
// Welcome to the Spiderverse, Scarlet Spider!

console.log("---------------------------------------");
console.log("--------------------------------------------");

let nums = { name: "one", num: 1 };

let newPair = { negative: -1 };

Object.assign(nums, newPair);

console.log(nums);
// {name: "one", num: 1, negative: -1}

class OryxClone {
  constructor(name) {
    this.name = name;
    this.oryx = { name: this.name };
  }
  greetings() {
    console.log(`Welcome to the World, ${this.name}!`);
  }

  qualityAdder(key, value) {
    let newPair = { [key]: value };
    Object.assign(this.oryx, newPair);
    console.log(this.oryx);
  }
}

const thierry = new OryxClone("Thierry");

thierry.greetings();
// Welcome to the World, Thierry!
thierry.qualityAdder("country", "France");
// {name: 'Thierry', country: 'France'}
console.log(thierry.oryx.name);
// Thierry
console.log(thierry.oryx.country);
// France
thierry.qualityAdder("friends", ["Laurent", "Antoine"]);
// {name: 'Thierry', country: 'France', friends: Array(2)}
console.log(thierry.oryx.friends[0]);
// Laurent
console.log(thierry.oryx.friends[1]);
// Antoine
