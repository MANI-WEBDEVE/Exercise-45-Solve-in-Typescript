"use strict";
const guests = ["Muhammad Saad", "Muhammad Tahir", "Muhammad farhan", "Muhammad usman", "Muhammad zaeem"];
//--------
console.log(`${guests[2]} can't make it to the dinner`);
//--------
let newGuests = ["Muhammad Asim", "Muhammad Ali", "MUhammad Khashif", "Muhammad faize"];
//--------
guests.splice(2, 1, ...newGuests);
//----
let limitedGuest = guests.splice(0, 2);
//-------
const guestsInvetation = (guests) => {
    for (const guest of guests) {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]`);
    }
};
guestsInvetation(limitedGuest);
