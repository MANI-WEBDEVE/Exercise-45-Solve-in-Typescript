"use strict";
const guest = ["Abdul Kareem", "Abdul Raheem", "Abdul Rafee", "Muhammad Ahade", "Muhammad zain", "Muhammad Ali ", "Muhammad Haseeb"];
// Inform people about the bigger dinner table
console.log("We're excited to announce that we've found a bigger dinner table!");
//add a new person at start
guest.unshift("Abdul Waheed");
//add a new person at middle
let middleIndex = Math.floor(guest.length / 2);
guest.splice(middleIndex, 0, " Muhammad rahamat Ali");
// add a person last Index [push]
guest.push("Muhammad shafe");
//---------
const invetationGuest = (guest) => {
    for (const guests of guest) {
        console.log(`Dear ${guests},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]`);
    }
};
invetationGuest(guest);
