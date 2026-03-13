//! TypeCasting:
//* The typecasting is the process of converting one datatype into another datatype

//! There are two ways to perform typecasting:
//? 1. Implicit typecasting  -> Internally -> automatically
//? 2. Explicit typecasting  -> Externally -> Manually by the programmer

//! 1. Implicit Typecasting:
//* The typecasting is done by internally is called as implicit typercasting

console.log(10 + 10); // 20
console.log(10 + "10"); //1010
console.log("20" - 10); // 10
console.log("hello" - 10); // NaN -> Not a number

console.log(true + 10); //11
console.log(true - 9); //-8
console.log(false + 10); //10

console.log("33" + 22 + "33"); //332233

//! 2. Explicit typecasting:
//* The typecasting which is done by prograammer is called as explicit typecasting
console.log(10 + Number("10")); //20
console.log(Boolean(true)); // true
console.log(Boolean("")); // false ->Empty string is considered as a falsy values
console.log(Boolean("Hello")); // true -> non-empty string will be considered as truthy values

console.log(10 + Number("true")); //Nan
console.log(10 + String(true)); //10true
console.log(10 + Number(Boolean(""))); //10

let userAge = prompt("Enter your age");
console.log(userAge);
console.log(typeof Number(userAge));
