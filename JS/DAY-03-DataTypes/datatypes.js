//! What are Datatypes in JS?
//* Datatypes means which kind or type of data we can store inside the variable.
//* there are mainly two types of datatypes:

//? 1. Primitive Datatypes:
//* The inbuilt datatypes which provided by the PL itself
//* It can only store a single value
//* We can access the value by their name.

//? 2. Non Primitive Datatype: 
//* These datatypes are also called as user defined data type
//* It can store multiple values inside it
//* We can access the value by thier reference

//! 1. Types of Primitive DAtatypes
//? 1 .Number
let num =10;
console.log(num);

//! type of operator:Unary operator
//* It is used to check the type of data stored inside a variable
//? Syntax: typeof varName or typeof (varName)
console.log(typeof num);

//* At the runtime of your js file.Js engine will read the value present inside the variable and it will automatically assign the datatype to the variable

//? 2. String:
//* A String is collection of characters.
//* We can create string in 3 ways

//! 1. by using single Quotes:(' ')
let str ='happy';
console.log(str);
console.log(typeof str); //string

//! 2.By using Double Quotes:(" ")
let str2="holi";
console.log(str2);

//!3. By using String Template literal (Backticks) : (``)
//* There are main two advantages of backticks:
//? 1. Multiline String:
let multiLineStr=`This is first line
This second line
This is third line`
console.log(multiLineStr);

//? 2 .We can access a dynamic value from the variable
//? Syntax: String Interpolation ->${}
let username="john";
console.log(`Hello, My name is ${username}`);

//? 3.boolean
let bool =true;
console.log(bool);
console.log(typeof bool);\

//? 4 .null:
//* Null means empty but not equals to zero
let nullValue=null;
console.log(nullValue);
console.log(typeof null);

//? undefined
//* The variable which is declared but not yet assigned any value is known as undefined
let a;
console.log(a);

//? 6. bigint:
let bignum=12345679563136796532235898989n;
console.log(bignum);

//? 7. Symbol():
//* The symbol() Primitive datatype is used to create a unique values.
let value1=Symbol("Happy");
let value2=Symbol("Happy");
let value3=value1;

console.log(value1===value2); //false-> Here comparing the address
console.log(value1.description);
console.log(value2.description);

console.log(value1.description === value2.description); //true -> Here Comparing the values

console.log(value1===value3);











