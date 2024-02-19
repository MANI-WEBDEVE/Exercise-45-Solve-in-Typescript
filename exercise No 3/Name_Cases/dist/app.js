"use strict";
let personName = "Muhammad Inam";
//lowecase method 
let lowercase = personName.toLowerCase();
//upperCase method
let upperCase = personName.toUpperCase();
//titleCase method
let titleCase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log(lowercase);
console.log(upperCase);
console.log(titleCase);
