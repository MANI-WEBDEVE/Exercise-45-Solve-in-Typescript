"use strict";
const updateGuest = ["Muhammad saad", "Muhammad Owais", "Muhammad sherjeel", "Muhammad Farhan", "Muhammad Ayan", "Muhammad Maheer"];
//----
console.log(`${updateGuest[2]} can't make it to the dinner`);
//--
let newGuest = "Muhammad Furkan";
//--
updateGuest[2] = newGuest;
const updateGuestList = (updateGuest) => {
    for (const updatedGuest of updateGuest) {
        console.log(`Dear ${updatedGuest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]`);
    }
};
updateGuestList(updateGuest);
