// Tests for equality and inequality with strings
// Equal to (==) operator:
//True
console.log("apple" == "apple");
//False
let word1:string = "Apple";
let word2:string = "banana"
console.log(word1 == word2);

// Not equal to (!=) operator:
//False
console.log("Apple" != "Apple")
//True
let word3:string = "Apple";
let word4:string = "banana"
console.log(word3 == word4);

//Tests using the lower case function
let food1:string = "apple";
let food2:string = "APPLE";
let food3:string = "banana";
let food4:string = "BANANA";
//true
console.log(food1.toLowerCase() == food2.toLowerCase());
//false
console.log(food1.toLowerCase() == food3.toLowerCase());
//not Equal conditions
//false
console.log(food1.toLowerCase() != food3.toLowerCase());
//true
console.log(food1.toLowerCase() != food1.toLowerCase())
///-----------------
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1:number = 2
let num2:number = 4
let num3:number = 6
let num4:number = 8
//equality
console.log(num1 === 2);//True
console.log(num1 === num2);//false
//not equality
console.log(num1 != num2);//true
console.log(num3 != 3+3); //false
//greater and less than sign
console.log(num1 > num2 );//false
console.log(num2 > num1); //true
//----
console.log(num1 < 1);//false
console.log(1 < num2); // true
//------------
console.log(num4 >= 5); // True
console.log(5 >= num4); // False
console.log(5 >= 5); // True
//-------------
// Less than or equal to
console.log(num2 <= 10); // True
console.log(10 <= num2); // False
console.log(5 <= 5); // True
//-----------
// Tests using "and" and "or" operators
// Using "and" (&&) operator
console.log(true && true); // True
console.log(true && false); // False
console.log(false && true); // False
console.log(false && false); // False

// Using "or" (||) operator
console.log(true || true); // True
console.log(true || false); // True
console.log(false || true); // True
console.log(false || false); // False
//------------------
//Test whether an item is in a array
const arr:Array<number> = [1,2,3,4,5,6,7,8];
console.log(arr.includes(3));//True
console.log(arr.includes(10));//false
//-----
//Test whether an item is not in a array
console.log(!arr.includes(3));
console.log(!arr.includes(10));
