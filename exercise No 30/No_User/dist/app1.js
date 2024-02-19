"use strict";
const users = [];
if (users.length > 0) {
    for (const user of users) {
        if (user === "Muhammad") {
            console.log(`Asalam Wallikum sir have a nice day Mr ${user}`);
        }
        else {
            console.log(`hello Mr ${user}`);
        }
    }
}
else {
    console.log("We need to find some user");
}
