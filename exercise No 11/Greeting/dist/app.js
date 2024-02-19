"use strict";
const friends = ["Muhammad", "inam", "Tahir", "Habib", "muzammil"];
//This Function to print personalized message
const printMessage = (friends) => {
    for (let friend of friends) {
        console.log(`you are my Best friend ${friend}`);
    }
};
//call function
printMessage(friends);
