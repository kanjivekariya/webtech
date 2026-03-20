
//! What is Date Object in JS ? 
//* The date Object is a built-in object in JS which is used to handle and manipulate the date and time in JS

//! Syntax: new Date():

let currentDate = new Date();
console.log(currentDate); // Wed Mar 18 2026 11:40:30 GMT+0530 (India Standard Time)

//! Date.now(): It will return the time in ms from Jan 1, 1970.
console.log(Date.now());
// console.log(currentDate.now()); // currentDate is not a function

//! length : 7
console.log(Date.length); // 7 

let randomDate = new Date(2005, 2, 18, 12, 25, 50);
console.log(randomDate);

//! Date Methods: get methods
//? 1. getFullYear();
console.log(currentDate.getFullYear());

//? 2. getMonth():
console.log(currentDate.getMonth());

//? 3. getDate():
console.log(currentDate.getDate()); // 18

//? 4. getDay():
console.log(currentDate.getDay()); // 3 monday tuesday wednesday

//? 5. getHours():
console.log(currentDate.getHours()); // 11 

//? 6. getMinutes():
console.log(currentDate.getMinutes()); // 47

//? 7. getSeconds():
console.log(currentDate.getSeconds()); 

//? 8. getMilliseconds():
console.log(currentDate.getMilliseconds()); 




