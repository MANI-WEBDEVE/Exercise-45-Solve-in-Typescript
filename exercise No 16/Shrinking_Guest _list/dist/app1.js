"use strict";
const oldGuests = ["Muhammad Waqar", "Muahmmad Dawar", "Muhammad Qasim", "Muhammad Umer", "Muhammad Usman", "Muhammad Jawade", "Muhammad Uzair"];
//----
console.log("Shrinking Guest List: You just found out that your new dinner table won`t arrive in time for the dinner, and you have space for only two guests.\n");
//---
while (oldGuests.length > 2) {
    let removeGuests = oldGuests.pop();
    console.log(`Sorry, ${removeGuests}, I'm unable to invite you to dinner.`);
}
//---
const invetation = (oldGuests) => {
    for (const fewGuests of oldGuests) {
        console.log(`Dear ${fewGuests},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]\n`);
    }
};
invetation(oldGuests);
