"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let oridinalEnding;
    if (number === 1) {
        oridinalEnding = "st";
    }
    else if (number === 2) {
        oridinalEnding = "nd";
    }
    else if (number === 3) {
        oridinalEnding = "rd";
    }
    else {
        oridinalEnding = "th";
    }
    console.log(`${number}${oridinalEnding}`);
}
