console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}`
    );
  }
  greeting() {
    console.log("Hi!");
  }
}
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
      console.log("Hi TrueCoder!");
  }
}
const Nick = new Person("Nick", 0, "Alabama", ["Music", "DND", "Video Games"])
const William = new Coder("William", 0, "Alabama", ["Music", "Coding", "Video Games"]);


console.log(Nick.info());
console.log(William.info());