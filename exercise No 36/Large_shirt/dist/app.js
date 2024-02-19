"use strict";
const T_shirt = (size = "large", message = "I love T-shirt") => {
    console.log(`my T-shirt size is ${size} and i like a ${message}`);
};
T_shirt();
//-------
T_shirt("medium");
//-------
T_shirt("small", "I Love Python");
