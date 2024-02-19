// Objcet in Typescirpt
type Book = {
    title:string,
    author:string,
    page:number
}
type student = {
    fullName:string,
    rollNumber:number,
    Marks:number
}
type Cars = {
    name:string,
    featurs:string,
    price:number,
}
//-------
const Student:student = {
    fullName:"Muhammad Inam",
    rollNumber:86201,
    Marks:87,

}
const Book1:Book = {
    title:"Essential_TypeScript_5",
    author:"ADAM FREEMAN",
    page:502
}
const car1:Cars={
    name:"Tesla",
    featurs:"Electric Car",
    price:5000000,
}
//--
console.log(`Book1 ${Book1}`)
console.log(`student1 ${Student}`)
console.log(`car1 ${car1}`)