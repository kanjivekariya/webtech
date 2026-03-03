//! 3. const
//* const stands for constant value, which means if you assign one value to the variable you can not change after that
//* The const variable is introduced in ES6 concepts which was released in the year of 2015
//* It has a block scope in nature

//! 1. Declaration
// const num;
//Error 'const' declarations must be initialized.

//! 2. Initialization:\
// By default it will considered as var vaiable type
//num=10;
// console.log(num1);//10


//! 3. D+I
const num1=20;
console.log(num1);//20


//! 4. Re-declaration: ❌
//* RD means with same variables type and its variable
// let num1;
//Cannot redeclare block-scoped variable 'num1'.


//! 5. Re-initialization:✅
//* Assigning new value to the variable
num1=30;
console.log(num1);
//Uncaught TypeError: Assignment to constant variable.
