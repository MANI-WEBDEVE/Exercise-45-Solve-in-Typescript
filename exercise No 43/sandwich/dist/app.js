"use strict";
const makeSandwich = (...items) => {
    console.log("sandwich summery");
    if (items.length === 0) {
        console.log("the sandwich order has been empty");
    }
    else {
        console.log("your order a sandwich has a following items");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("---------------------------------------");
};
makeSandwich("cheese", "Tomato", "garlicMayo");
makeSandwich("turkeyTomato", "mozralaCheese");
makeSandwich();
