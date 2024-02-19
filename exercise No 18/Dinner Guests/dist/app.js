"use strict";
const guests = ["Muhammad Khan", "Muhammad Mugire", "Muhammad Sameer", "Muhammad Anus", "Muhammad Hmaza", "Muhammad Mustafa"];
// lets write a function 
const Invetation = (guests) => {
    console.log("Dinner Guests");
    for (let guest of guests) {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]`);
    }
};
//find the guests in dinner
console.log(`Number of people invited in Dinner ${guests.length}`);
//call the function
Invetation(guests);
