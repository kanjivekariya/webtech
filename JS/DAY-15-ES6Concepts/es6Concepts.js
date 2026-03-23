//! What is ES6 Concepts ?
//* ES Stands for ECMA Script which was released in the year of 2015.
//* This is a major update in JS History after the ES5.
//* In the ES6 concepts they introduced some features such as :

//? 1. let and const
//? 2. arrow function
//? 3. Symbol()
//? 4. String Template Literals(Backticks)
//? 5. Function with default parameter.
//? 6. Destructuring
//? 7. Rest Parameter and Spread Operator
//? 8. Promise
//? 9. async / await
//? 10. class
//? 11. modules

//! 5. function with default parameter:
//* The variables which is declared at the time of function defination is called as parameter in function
//* Temporary variables

function greet(name = "guest") {
  console.log(`my name is ${name}`);
}
greet();
greet("john");

//! 6. Destructuring:
//* The breaking down big structure into small pieces(variables) for easy use.

//* We can perform destructuring for Array and Object.
//? 1. Array Destructuring:
let cricketers = ["sachin", "MSD", "Virat", "Rohit", "Arjun"];
console.log(cricketers);
console.log(cricketers[0]);
console.log(cricketers[1]);
console.log(cricketers[2]);

let [s, m, v, r, a, b] = cricketers;
console.log(s);
console.log(m);
console.log(b);

//? 2. Object Destructuring:
let employee = {
  eName: "John",
  eAge: 20,
  eSalary: 30000,
};
console.log(employee);
console.log(employee.eName);

let { eSalary } = employee;
// console.log(eName);
// console.log(eSalary);
console.log(eSalary);

//~ Special Note : When you are desturcring the object it is mandotory to use the same keyName as a variable name.
const product = {
  id: "P101",
  name: "Wireless Headphones",
  specs: {
    color: "Matte Black",
    weight: "250g",
  },
  manufacturer: {
    name: "AudioTech",
    specs: {
      location: "Tokyo",
      warranty: "2 years",
      name: "AudioTech Global",
    },
  },
};
// let {id,name,specs,manufacturer}=product;
// console.log(id);
// console.log(name);
// console.log(specs);

// let {color,weight} = specs;
// console.log(color);
// console.log(weight);

// let {name:mName,specs:mSpecs}=manufacturer;
// console.log(mName);
// console.log(mSpecs);

// let {location:loc,warranty,name:globalName} = mSpecs;
// console.log(loc)
// console.log(warranty)
// console.log(globalName)

//* Destrcucturing in single line
let {
  id,
  name,
  specs: { color, weight },
  manufacturer: {
    name: mName,
    specs: { location: loc, warranty, name: globalName },
  },
} = product;

console.log(loc);

//! 7. Rest Parameter:
//* It is used to collect all the remaining values.
//? Syntax: ...varName
//~ LHS
//~ Function Definition

let numArr = [10, 20, 30, 40, 50];
// let [n1, n2, n3, n4, n5] = numArr;
let [n1, ...nums] = numArr;
console.log(n1);
console.log(nums);

function getNumbers(num1, ...numbers) {
  console.log(num1);
  console.log(numbers);
}
getNumbers(1, 2, 3, 4, 5);

//! 7. Spread Operator:
//* The spread operator is used to un-pack or spread the values.
//? Syntax: ...varName
//~ RHS
//~ Function Call Statement

//! For Merging of arrays and objects.
let arr1 = [1, 2];
let arr2 = [3, 4, 5];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

//! Object merging:
let obj1 = { name: "John" };
let obj2 = { age: 20 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

function printNumbers(...nums) {
  console.log(nums);
}

let arrNum = [10, 20, 30, 40];
printNumbers(...arrNum);

