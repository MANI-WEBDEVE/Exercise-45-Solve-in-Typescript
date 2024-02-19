"use strict";
const show_Magician = (magician) => {
    for (const magName of magician) {
        console.log(magName);
    }
};
const greatMagician = (magician) => {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `the great ${magician[i]}`;
    }
};
const magicianName = ["Mystique Mirage", "nigma Elysium", "Sorin Spellcaster", "Illusionist Inferno", "Merlin Mystical"];
greatMagician(magicianName);
show_Magician(magicianName);
