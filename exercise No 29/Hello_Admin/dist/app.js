"use strict";
const userName = ["Saad", "shrjeel", "Muhammad Inam", "Muhammad Tahir", "Owais"];
for (const user of userName) {
    if (user === "Muhammad Inam") {
        console.log(`HellO Mr ${user} welcome and have a nice day `);
    }
    else if (user === "Muhammad Tahir") {
        console.log(`Hello Mr ${user} have a Nice Day sir`);
    }
    else {
        console.log(`hello ${user}`);
    }
}
