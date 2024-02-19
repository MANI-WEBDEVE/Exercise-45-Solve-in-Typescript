//Addition function 
type maths =( n:number, m:number )=> number 
const addFunc:maths =(n, m)=>{
    return n + m
} 
console.log(addFunc(5 , 3))
//subtarcting function
const subFunc:maths = (n ,m )=>{
    return n - m
}
console.log(subFunc(10, 2))
//multiplay function
const multFunc:maths = (n, m)=>{
    return n * m
}
console.log(multFunc(4,2))
//divide function
const divideFunc:maths = (n ,m )=>{
    return n / m
}
console.log (divideFunc(16, 2))