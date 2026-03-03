//!What is Variable?
//* Variable is used to store the value or data
//* A variable is container which will store the data or value

//! There are 3 types of variables in JS:
//? 1.var
//? 2.let
//? 3.const

//! 1.var:
//* The var variable is introduced as a first variable in JS
//* It has a global scope (by default) and fucntion scope but it depends where we are defining

//? Syntax: variable_type identifier=value;
//variable_type identifier => Declaration
//value => Initialization

//! 1. Declaration
var num;
console.log(num); //undefined

//! 2. Initialization:
num=10;
console.log(num);

//! 3. D+I
var num2=20;
console.log(num2); //20

//! 4. Re-declaration:
//* RD means with same variables type and its variable
var num=30;
console.log(num);

//! 5. Re-initialization
//* Assigning new value to the variable
num2=40;
console.log(num2);//40



