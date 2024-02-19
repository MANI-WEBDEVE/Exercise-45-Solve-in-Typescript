"use strict";
const userName = ["Muhammad Khan", "Muhammad Inam", "Muhammad Musa", "Muhammad bilawal", "Muhammad Faiz"];
if (userName.length > 0) {
    for (const user of userName) {
        if (user === "Muhammad Inam") {
            console.log(`Asalam Wallikum sir have a nice day Mr ${user}`);
        }
        else {
            console.log(`hello Mr ${user}`);
        }
    }
}
else {
    console.log("you not employee this company and register the acount");
}
