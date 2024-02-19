const placesToVisit:Array<string> = [ "Saudi-Arabia",  "Canada", "Germany", "Egypt","Russia"];

//Create a sorted copy of the array
let sortedPlacesToVisit:Array<string> = [...placesToVisit].sort();
//------
console.log("place to visit (alpahabtical Order)")
//---
for (const places of sortedPlacesToVisit) {
    console.log(places)
}
//Original Array 
console.log("place is original order");
for (const places of placesToVisit) {
    console.log(places)
}
//--------------
//reverse alphabatice places name
let reverSesortedPlacesToVisit:Array<string> = [...placesToVisit].sort().reverse();
//---
console.log("places reverse alphabatical Order")
for (const places of reverSesortedPlacesToVisit) {
    console.log(places)
}
//again original array order
console.log("Again Original Array Order");
//--
for (const places of placesToVisit) {
    console.log(places)
}
//Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of the original list
placesToVisit.reverse()
// Print the array to show its reversed order
console.log("reversed Places to Visit")
for (const places of placesToVisit) {
    console.log(places)
    
}
//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse()
// Print the array to show its reversed order
console.log("Again and Again original order Array")
for (const places of placesToVisit) {
    console.log(places)
    
}
//--------
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
//----
console.log("this is sort Array")
for (const places of placesToVisit) {
    console.log(places)
}
//----
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort((a,b )=> b.localeCompare(a));
//---
console.log("Reverse Sorted Places To Visit")
for (const places of placesToVisit) {
    console.log(places)
}
