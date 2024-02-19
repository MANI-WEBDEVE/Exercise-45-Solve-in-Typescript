"use strict";
const show_Magician = (magician) => {
    for (const magName of magician) {
        console.log(magName);
    }
};
const greatMagician = (magician) => {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `the Great ${magician[i]}`;
    }
};
const make_great = (magicians) => {
    let greatMagician = [];
    for (const magician of magicians) {
        greatMagician.push(`the Great ${magician}`);
    }
    return greatMagician;
};
const magicianNames = ["Mystique Mirage", "Enigma Elysium", "Sorin Spellcaster", "Illusionist Inferno", "Merlin Mystical"];
// Use make_great() to create a new array with great magicians
let greatMagicianArray = make_great(magicianNames.slice());
// Use greatMagician() to modify the original array
greatMagician(magicianNames);
// Show the original magicians
console.log("Original Magicians:");
show_Magician(magicianNames);
// Show the great magicians from the new array
console.log("\nGreat Magicians (from new array):");
show_Magician(greatMagicianArray);
