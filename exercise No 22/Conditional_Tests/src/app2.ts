// Test 1: Equality check between two equal numbers
console.log(2 + 2 === 4); // True, because 2 + 2 equals 4

// Test 2: Comparison between two strings with different values
let word :string = "Hello ";
let  word1: string  = "World";
console.log(word === word1 ); // False, because "hello" is not equal to "world"

// Test 3: Comparison between a number and a string representation of the same number
console.log(10 == +"10"); // True, because 10 is equal to the numeric value of "10"

// Test 4: Check if a variable is truthy
const x: number = 5;
console.log(!!x); // True, because x is a non-zero number, which is truthy

// Test 5: Check if a variable is falsy
const y: number = 0;
console.log(!!y); // False, because y is zero, which is falsy

// Test 6: Check if two arrays with the same elements are equal
let num1:Array<number> = [1,2,3];
let num2:Array<number> = [1,2,3];
console.log(num1 === num2); // False, because arrays are reference types and are not equal by reference

// Test 7: Check if two objects with the same properties and values are equal
type object1 = {
    a:number,
    b:number
}
let obj1:object1 = {
     a: 1,
     b: 2 
}
let obj2:object1 = {
    a:1,
    b:2
}
console.log(obj1 === obj2); // False, because objects are reference types and are not equal by reference

// Test 8: Check if a string contains a specific substring
console.log("hello world".includes("hellolo")); // True, because the string "hello world" contains the substring "hello"

// Test 9: Check if a string is empty
console.log("" === ""); // True, because both strings are empty

// Test 10: Check if a variable is undefined
const z: number | undefined = undefined;
console.log(z === undefined); // True, because z is explicitly set to undefined
