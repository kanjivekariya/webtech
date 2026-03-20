//! Math Object:
//* The math object is a inbuilt object in javascript which will provide set of mathematical constants, properties and methods to perform operations.

//* It is object of window (global) object.

//! Math object does not need to create their instance without creating the instance you can use the math object.

// let myMath = new Math();
// console.log(myMath); // Math is not a constructor

console.log(Math);
console.log(typeof Math); // Object

//! Syntax: Math.propertyName or Math.methodName();

//! Math Properties:
//? 1. Math.E:
console.log(Math.E); //  2.718281828459045

//? 2. Math.PI:
console.log(Math.PI); // 3.14 or 22/7

//! Math Methods:
//? 1. Math.round():
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.3)); // 2

//? 2. Math.ceil():
console.log(Math.ceil(5.1)); // 6
console.log(Math.ceil(5.9)); // 6

//? 3. Math.floor():
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(5.9)); // 5

//? 4. Math.pow(base , exponent):
console.log(Math.pow(2,2)); // 4

//? 5. Math.sqrt():
console.log(Math.sqrt(49)); // 7

//? 6. Math.cbrt():
console.log(Math.cbrt(27)); // 3

//? 7. Math.min():
console.log(Math.max(1,67,34,78,9,234,78,23)); // 234

//? 8. Math.min():
console.log(Math.min(1,67,34,78,9,234,78,23)); // 1

//? 9. Math.abs():
console.log(Math.abs(12.89));
console.log(Math.abs(-12.89));

//? 9. Math.trunc():
console.log(Math.trunc(10.45)); // 10

//? 11.Math.random():
//* It is used to generate the random numbers between 0 (included) and 1 (excluded). 
console.log(Math.floor(Math.random()*10000));
document.getElementById("btn").addEventListener("click",()=>{
    let otp = document.getElementById("otp");
    otp.innerHTML= `Your OTP is ${(Math.floor(Math.random()*9000)+1000)}`;
})