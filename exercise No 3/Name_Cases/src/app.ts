let personName: string = "Muhammad Inam";
//lowecase method 
let lowercase: string = personName.toLowerCase();
//upperCase method
let upperCase:string = personName.toUpperCase();
//titleCase method
let titleCase:string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
console.log(lowercase)
console.log(upperCase)
console.log(titleCase)