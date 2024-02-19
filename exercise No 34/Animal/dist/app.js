"use strict";
const animals = ["Dog", "Cat", "Rabbit"];
console.log("Animals");
for (const animal of animals) {
    console.log(animal);
}
console.log("\nstatement each about animal");
for (const animal of animals) {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a agreat pet");
            break;
        case "Cat":
            console.log("cat is a Lovely companion");
            break;
        case "Rabbit":
            console.log("Rabbit is a friendly animal");
            break;
        default:
            console.log("unknown animals");
            break;
    }
}
