const favoritePizza:Array<string> = ['pepperoni', 'margherita', 'supreme'];
//----------------------------
console.log("My Favorite Pizza");
for (const favPizza of favoritePizza) {
    console.log(favPizza);
}
console.log("\nI like the following Pizza List")
for (const favPizza of favoritePizza) {
    console.log(`I Love ${favPizza}`);
}
console.log("\nI really love pizza!");
