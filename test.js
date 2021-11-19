let person = {
  first: "James",
  last: "Baker",
  alias: "JB"
};

console.log(person);

let { first, last, alias: nickName } = person;

console.log(nickName);
